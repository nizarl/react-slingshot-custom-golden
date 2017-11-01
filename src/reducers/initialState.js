// let's try to flatten this structure as much as possible.  This will make
// reducer logic simpler.
export default {
  // TODO: remove nested objects, update reducer, then in mapToState assemble for
  // component API
  components: {
    byId: {
      1: {
        id: 1,
        name: "clinicaldocs",
        urlPath: "clinicaldocs/",
        isOpened: true,
        clinicaldocsData: []
      },
      2: {
        id: 2,
        name: "problems",
        urlPath: "problems/",
        isOpened: true,
        problemsData: []
      }
    },
    allIds: [1, 2]
  }
};
