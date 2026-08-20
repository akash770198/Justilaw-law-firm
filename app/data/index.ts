import rawSiteData from "@/app/data/siteData.json";

/**
 * Centralized data provider for the application.
 * All components should import siteData from here instead of directly from the JSON file.
 * This makes it easier to swap out the data source (e.g. to a CMS, API, or database) in the future.
 */
export const siteData = rawSiteData;

export default siteData;
