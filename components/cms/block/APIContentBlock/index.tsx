import type { IContentComponent } from "@optimizely/cms/models";
import type { APIContentBlock } from "../../../../schema";
import React, { useEffect, useState } from "react";

// Define the URL as a constant at the top of the file
const API_URL =
  "https://api.technologyradar.alwaysmoveforward.com/api/public/User/1/RadarTemplates";

export const APIContentBlockComponent: IContentComponent<
  APIContentBlock
> = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <hr></hr>
      <h1>API Component</h1>
      {data.map((item: any, index: number) => (
        <div key={item.id || index}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          {item.radarRings && (
            <>
              <table border={1}>
                <tbody>
                  <tr>
                    <th>Rings</th>
                    <th>Categories</th>
                  </tr>

                  <tr>
                    <td>
                      {item.radarRings.map((ring: any, index: number) => (
                        <div key={ring.id || index}>{ring.name}</div>
                      ))}
                    </td>
                    <td>
                      {item.radarCategories.map((cat: any, index: number) => (
                        <div key={cat.id || index}>{cat.name}</div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      ))}
    </>
  );
};

APIContentBlockComponent.displayName = "CMS-Component: APIContentBlock";

export default APIContentBlockComponent;
