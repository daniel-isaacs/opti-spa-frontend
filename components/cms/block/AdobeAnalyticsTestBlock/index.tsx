import type { IContentComponent } from "@optimizely/cms/models";
import type { AdobeAnalyticsTestBlock } from "../../../../schema";

export const AdobeAnalyticsTestBlockComponent: IContentComponent<
AdobeAnalyticsTestBlock
> = () => {
  return (
    <>
    <button analytics="HiAAfromOpti" class="favorite styled" type="button">Adobe Analytics Test</button>
    </>
  );
};

AdobeAnalyticsTestBlockComponent.displayName = "CMS-Component: AdobeAnalyticsTestBlock";

export default AdobeAnalyticsTestBlockComponent;