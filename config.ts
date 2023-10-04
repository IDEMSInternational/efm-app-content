import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("[DEPLOYMENT_NAME]");

/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */

config.google_drive = {
  sheets_folder_id: "[FOLDER_ID]",
  assets_folder_id: "[FOLDER_ID]",
};

config.git = {
  content_repo: "[URL-TO-REPO]",
  content_tag_latest: "1.1.1",
};

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "[DEFINE]";
config.app_config.APP_HEADER_DEFAULTS.title = "[DEFINE]";
config.app_config.NOTIFICATION_DEFAULTS.title = "[DEFINE]";
config.app_config.NOTIFICATION_DEFAULTS.text = "[DEFINE]";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_THEMES.defaultThemeName = "professional";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";

export default config;
