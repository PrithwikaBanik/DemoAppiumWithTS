module.exports = {
  default: {
      require: ['src/features/**/*.ts'],
      requireModule: ['ts-node/register'],
      format: ['json:./reports/cucumber_report.json'],
      formatOptions: {
          snippetInterface: 'async-await'
      },
      publishQuiet: true
  }
};
