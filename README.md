# efm-app-content
This package contains data used in the early family math app

## App Preview
https://early-family-math.web.app

## Syncing data updates (automatic)
A pull request syncing all spreadsheets and assets can be created automatically by running the following GitHub workflow: [Sync Content](https://github.com/IDEMSInternational/efm-app-content/actions/workflows/sync-content.yml)

## Syncing data updates (manual)
Data can be syncd from corresponding google drive folders via the script
```
yarn scripts app-data-sync
```

## Translations
Files for translation, and compiled translation strings are automatically generated during sync scripts.

Any strings for use in translations should be placed in the `./translations_source/from_translators` folder named in the format `{filename}.{langCode}.json`

The final output of translation strings can be found in the `./translations/strings` folder.

References to these strings are stored in individual data files, so that the app can quickly know what rows have text available for translation and which languages currently have existing translations
