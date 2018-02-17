import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 123,
      name: "Paul",
      lastName: "Ashwin"
    }];
  }
});
