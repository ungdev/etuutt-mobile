# Internationalization

Internationalization allow the website to support multiple languages. We use the library i18n (short for internationalization) in the project.

## How to use

To have a translated string with i18n, simply import i18n from `src/modules/internationalization/services/i18n.servie.ts`. This returns an object with different properties. We will use the property "`t`" of i18n :

```
import i18n from 'relative/path/to/src/modules/internationalization/services/i18n.servie.ts'

i18n.t('translation.key')
```

`translation.key` is the key of your translation. the t function will return the right value based on the current user language

Add the translation key for all translations in src/translations. For english : en.ts

## Go back to [README](../README.md)
