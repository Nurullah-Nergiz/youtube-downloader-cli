process.params = {};
process.params = {};
process.argv.splice(2, 2).map((argv) => {
   if (argv[0] === "-") {
      const [key, val] = argv.replace("-", "").split("=");
      process.params[key] = val;
   }
});

export default {};
