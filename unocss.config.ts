import {
  defineConfig,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import {
  presetApplet,
  presetRemToRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

export default defineConfig({
  presets: [
    presetApplet(),
    /**
     * you can add `presetAttributify()` here to enable unocss attributify mode prompt
     * although preset is not working for applet, but will generate useless css
     */
    presetAttributify(),
    presetRemToRpx(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    // Don't change the following order
    transformerAttributify(),
    transformerApplet(),
  ],
})
