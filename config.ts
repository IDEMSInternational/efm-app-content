import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("early_family_math");

config.google_drive = {
  sheets_folder_ids: ["1hiIYr8nnLcP1kd2xTFAQx3MvVp7IlPQL"],
  assets_folder_ids: ["1VkoezEbbeCIeV5IksorFt5lFp6AURYur"],
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/efm-app-content.git",
  content_tag_latest: "1.2.6",
};

config.android = {
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.api.db_name = "early_family_math"

config.app_data.output_path = "./app_data";

// Override constants
config.app_config.APP_LANGUAGES.default = "us_en";
config.app_config.APP_HEADER_DEFAULTS.title = "Early Family Math";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "EFM";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from Early Family Math";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_UPDATES.enabled = true
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete"

export default config;
