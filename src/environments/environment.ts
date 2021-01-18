// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authenticate:"https://projectcheetah.herokuapp.com/users/authenticate",
  register:"https://projectcheetah.herokuapp.com/users/register",
  getTaskers:"https://projectcheetah.herokuapp.com/users/taskers",
  getAllTasks:"https://projectcheetah.herokuapp.com/tasks",
  sendRequest:"https://projectcheetah.herokuapp.com/tasks/sendRequest",
  showPendingTasks:"https://projectcheetah.herokuapp.com/tasks/tasker?taskerId=",
  findCustomer:"https://projectcheetah.herokuapp.com/users/customer/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
