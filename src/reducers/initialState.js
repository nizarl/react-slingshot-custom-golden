/**
 * Redux is intended to be a predictable state container. l
 * We store application state as needed into a single state seen below.
 * State is changed by Reducers only. Never directory by components. 
 * Let's try to keep this structure flat as much as possible.  This will make Reducer logic simpler.
 */
export default {
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
