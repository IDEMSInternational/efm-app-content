import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("early_family_math");

config.google_drive = {
  sheets_folder_id: "1hiIYr8nnLcP1kd2xTFAQx3MvVp7IlPQL",
  assets_folder_id: "1VkoezEbbeCIeV5IksorFt5lFp6AURYur",
};
config.translations = {
  filter_language_codes: ["us_en", "es_es"],
  translated_strings_path: "packages/app-data/translations_source/from_translators",
  source_strings_path: "packages/app-data/translations_source/to_translate",
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/efm-app-content.git",
  content_tag_latest: "1.1.2",
};

config.app_data.output_path = "./app_data";

// Override constants
config.app_config.APP_LANGUAGES.default = "us_en";
config.app_config.APP_HEADER_DEFAULTS.title = "Early Family Math";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "EFM";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from Early Family Math";
config.app_config.APP_THEMES.available = ["default", "professional"];

export default config;