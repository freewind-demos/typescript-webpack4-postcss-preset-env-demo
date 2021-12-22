Webpack4 Config "postcss-preset-env" Demo
======================================

注意，虽然postcss-preset-env引入了很多插件，但并不是完全启用它们的功能。

通过`stage`参数（可以理解为“成熟度”，数字越大越成熟）控制，默认为`2`，但nesting相关功能为`1`

所以为了使用本demo正常工作，需要手动设置：

```
postcssPresetEnv({stage: 1})
```

或

```
postcssPresetEnv({features: {'nesting-rules': true}})
```

```
npm install
npm run demo
```
