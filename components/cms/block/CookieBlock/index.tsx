import type { IContentComponent } from "@optimizely/cms/models";
import type { CookieBlock } from "../../../../schema";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

export const CookieBlockComponent: IContentComponent<CookieBlock> = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["_gcc.profile"]);
  const [user, setUser] = useState({
    CustomerNumber: "1917560",
    RecognitionStatus: "rec:auth",
    IsSehcMember: "False",
    IsInnerCircleMember: "False",
    TopTpc: "DAS2026,SGE2026,BYA2026,CLB2025,EID2025",
    FrequencyDetail: "2X",
    Recency: "LTRAV1YR",
    SegmentationReferenceYear: "2025",
    TripBooked: "0",
    TravelStatus: "",
    TripsTaken: "",
    SessionId: "drm5l2nymfpdvfu44djsurn0",
    LastUpdated: "2024-07-18T12:43:33.012Z",
  });

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCookie("_gcc.profile", JSON.stringify(user), {
      path: "/",
      // domain: "www.oattravel.com",
    });
  };

  const handleDelete = () => {
    removeCookie("_gcc.profile");
  };

  return (
    <div>
      <hr></hr>
      <h3>Cookie Component</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Customer Number:
          <input
            name="CustomerNumber"
            value={user.CustomerNumber}
            onChange={handleChange}
            placeholder="CustomerNumber"
          />
        </label>
        <br />
        <label>
          Recognition Status:
          <input
            name="RecognitionStatus"
            value={user.RecognitionStatus}
            onChange={handleChange}
            placeholder="RecognitionStatus"
          />
        </label>
        <br />
        <label>
          Is Sehc Member:
          <input
            name="IsSehcMember"
            value={user.IsSehcMember}
            onChange={handleChange}
            placeholder="IsSehcMember"
          />
        </label>
        <br />
        <label>
          Is Inner Circle Member:
          <input
            name="IsInnerCircleMember"
            value={user.IsInnerCircleMember}
            onChange={handleChange}
            placeholder="IsInnerCircleMember"
          />
        </label>
        <br />
        <label>
          Top Tpc:
          <input
            name="TopTpc"
            value={user.TopTpc}
            onChange={handleChange}
            placeholder="TopTpc"
          />
        </label>
        <br />
        <label>
          Frequency Detail:
          <input
            name="FrequencyDetail"
            value={user.FrequencyDetail}
            onChange={handleChange}
            placeholder="FrequencyDetail"
          />
        </label>
        <br />
        <label>
          Recency:
          <input
            name="Recency"
            value={user.Recency}
            onChange={handleChange}
            placeholder="Recency"
          />
        </label>
        <br />
        <label>
          Segmentation Reference Year:
          <input
            name="SegmentationReferenceYear"
            value={user.SegmentationReferenceYear}
            onChange={handleChange}
            placeholder="SegmentationReferenceYear"
          />
        </label>
        <br />
        <label>
          Trip Booked:
          <input
            name="TripBooked"
            value={user.TripBooked}
            onChange={handleChange}
            placeholder="TripBooked"
          />
        </label>
        <br />
        <label>
          Travel Status:
          <input
            name="TravelStatus"
            value={user.TravelStatus}
            onChange={handleChange}
            placeholder="TravelStatus"
          />
        </label>
        <br />
        <label>
          Trips Taken:
          <input
            name="TripsTaken"
            value={user.TripsTaken}
            onChange={handleChange}
            placeholder="TripsTaken"
          />
        </label>
        <br />
        <label>
          Session Id:
          <input
            name="SessionId"
            value={user.SessionId}
            onChange={handleChange}
            placeholder="SessionId"
          />
        </label>
        <br />
        <label>
          Last Updated:
          <input
            name="LastUpdated"
            value={user.LastUpdated}
            onChange={handleChange}
            placeholder="LastUpdated"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleDelete}>Delete Cookie</button>
      {cookies?.["_gcc.profile"] && (
        <div>
          <h2>User Information:</h2>
          <p>Cookie Name : {cookies?.["_gcc.profile"]}</p>
          <p>Customer Number : {cookies?.["_gcc.profile"].CustomerNumber}</p>
          <p>
            Recognition Status : {cookies?.["_gcc.profile"].RecognitionStatus}
          </p>
          <p>Is Sehc Member : {cookies?.["_gcc.profile"].IsSehcMember}</p>
          <p>
            Is Inner Circle Member :{" "}
            {cookies?.["_gcc.profile"].IsInnerCircleMember}
          </p>
          <p>Top Tpc : {cookies?.["_gcc.profile"].TopTpc}</p>
          <p>Frequency Detail : {cookies?.["_gcc.profile"].FrequencyDetail}</p>
          <p>Recency : {cookies?.["_gcc.profile"].Recency}</p>
          <p>
            Segmentation Reference Year :{" "}
            {cookies?.["_gcc.profile"].SegmentationReferenceYear}
          </p>
          <p>Trip Booked : {cookies?.["_gcc.profile"].TripBooked}</p>
          <p>Travel Status : {cookies?.["_gcc.profile"].TravelStatus}</p>
          <p>Trips Taken : {cookies?.["_gcc.profile"].TripsTaken}</p>
          <p>Session Id : {cookies?.["_gcc.profile"].SessionId}</p>
          <p>Last Updated : {cookies?.["_gcc.profile"].LastUpdated}</p>
        </div>
      )}
    </div>
  );
};

CookieBlockComponent.displayName = "CMS-Component: CookieBlock";

export default CookieBlockComponent;
