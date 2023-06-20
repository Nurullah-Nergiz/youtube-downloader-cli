process.params = {};
process.argv.splice(2, 2).forEach((argv) => {
   // console.log(argv);
   if (argv.startsWith("-") || argv.startsWith("--")) {
      const [key, ...val] = argv.replace("-", "").split("=");
      process.params[key] = val.join("=");
   }
});

export default {};
