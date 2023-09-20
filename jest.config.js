/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // 自动模拟所有导入的模块
  // automock: false,

  // 在发生 `n` 个失败后停止运行测试
  // bail: 0,

  // Jest 应该存储其缓存的依赖信息的目录
  // cacheDirectory: "/private/var/folders/7j/r_kgmlbj2512tj8c88xxg53r0000gn/T/jest_dx",

  // 在每个测试之前自动清除模拟调用、实例、上下文和结果
  clearMocks: true,

  // 指示是否在执行测试时应收集覆盖信息
  collectCoverage: true,

  // 一组用于收集覆盖信息的文件的 glob 模式数组
  collectCoverageFrom: ["src/**"],

  // Jest 输出覆盖率文件的目录
  coverageDirectory: "coverage",

  // 用于跳过覆盖率收集的正则表达式模式数组
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/stories/",
    "^.*\.stories\.tsx?$"
  ],

  // 指示用于覆盖率收集的提供程序
  // coverageProvider: "babel",

  // Jest 写覆盖率报告时使用的报告器名称列表
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // 配置覆盖率结果的最小阈值
  coverageThreshold: {
    "global": {
      "lines": 50
    }
  },

  // 自定义依赖提取器的路径
  // dependencyExtractor: undefined,

  // 使调用弃用的 API 时抛出有用的错误消息
  // errorOnDeprecated: false,

  // 自定义定时器的默认配置
  // fakeTimers: {
  //   "enableGlobally": false
  // },

  // 强制覆盖收集从被忽略的文件中匹配的内容
  // forceCoverageMatch: [],

  // 触发所有测试套件之前执行一次的异步函数的模块路径
  // globalSetup: undefined,

  // 触发所有测试套件之后执行一次的异步函数的模块路径
  // globalTeardown: undefined,

  // 在所有测试环境中都需要可用的一组全局变量
  // globals: {},

  // 用于运行测试的最大工作进程数
  // maxWorkers: "50%",

  // 递归搜索要求模块位置上方的一组目录名称
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // 模块使用的文件扩展名数组
  // moduleFileExtensions: [
  //   "js",
  //   "mjs",
  //   "cjs",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],

  // 从正则表达式到模块名称或模块名称数组的映射，允许使用单个模块来替代一组资源
  // moduleNameMapper: {},

  // 在模块加载程序将模块视为“可见”之前，匹配所有模块路径的正则表达式模式数组
  // modulePathIgnorePatterns: [],

  // 激活测试结果的通知
  // notify: false,

  // 指定通知模式的枚举。要求 { notify: true }
  // notifyMode: "failure-change",

  // 用作 Jest 配置基础的预设
  // preset: undefined,

  // 运行一个或多个项目的测试
  // projects: undefined,

  // 使用此配置选项添加自定义报告器到 Jest
  // reporters: undefined,

  // 在每个测试之前自动重置模拟状态
  // resetMocks: false,

  // 在运行每个单独的测试之前重置模块注册表
  // resetModules: false,

  // 自定义解析器的路径
  // resolver: undefined,

  // 在每个测试之前自动恢复模拟状态和实现
  // restoreMocks: false,

  // Jest 扫描测试和模块的根目录
  // rootDir: undefined,

  // 用于搜索文件的目录名称列表
  roots: [
    "src"
  ],

  // 允许您使用自定义运行器来替代 Jest 的默认测试运行器
  // runner: "jest-runner",

  // 运行某些代码以在每个测试之前配置或设置测试环境的模块路径列表
  // setupFiles: [],

  // 运行某些代码以在每个测试之前配置或设置测试框架的模块路径列表
  // setupFilesAfterEnv: [],

  // 指定测试被视为缓慢并以此方式报告的秒数
  // slowTestThreshold: 5,

  // 用于快照测试的序列化器模块的路径列表
  // snapshotSerializers: [],

  // 用于测试的测试环境
  testEnvironment: "jsdom",

  // 传递给测试环境的选项
  // testEnvironmentOptions: {},

  // 在测试结果中添加位置字段
  // testLocationInResults: false,

  // Jest 用于检测测试文件的 glob 模式
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  // 与所有测试路径匹配的正则表达式模式字符串数组，匹配的测试将被跳过
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // Jest 用于检测测试文件的正则表达式模式或模式数组
  // testRegex: [],

  // 此选项允许使用自定义结果处理器
  // testResultsProcessor: undefined,

   // 允许使用自定义测试运行器
  // testRunner: "jest-circus/runner",

  // 从正则表达式到变换器路径的映射
  // transform: undefined,

  // 与所有源文件路径匹配的正则表达式模式字符串数组，匹配的文件将跳过变换
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // 与模块加载器自动返回模拟值之前匹配的正则表达式模式字符串数组
  // unmockedModulePathPatterns: undefined,

  // 指示是否应在运行期间报告每个单独的测试
  verbose: true,

  // 在监视模式下重新运行测试之前匹配所有源文件路径的正则表达式模式数组
  // watchPathIgnorePatterns: [],

  // 是否使用 watchman 进行文件遍历
  // watchman: true,

  // 模块名称映射器，用于处理 CSS 文件
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};
