
const script = typeof window !== "undefined" ? require("loadjs") : (link, { success: callback }) => callback();

const GoogleChartLoader = {
    isLoaded: false,
    isLoading: false,
    initPromise: {},
    init: function init(packages, version) {
        if (this.isLoading || this.isLoaded) {
            return this.initPromise;
        }
        this.isLoading = true;
        this.initPromise = new Promise((resolve) => {
            script("https://www.gstatic.com/charts/loader.js", {
                success: () => {
                    window.google.charts.load(version || "current", { packages: packages || ["corechart", "line"] });
                    window.google.charts.setOnLoadCallback(() => {
                        this.isLoaded = true;
                        this.isLoading = false;
                        console.log("here in chart loading")
                        resolve();
                    });
                }
            });
        });
        return this.initPromise;
    },
};

export default GoogleChartLoader;
