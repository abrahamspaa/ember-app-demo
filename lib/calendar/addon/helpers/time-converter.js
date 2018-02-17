import { helper } from '@ember/component/helper';

export function timeConverter(params/*, hash*/) {
  console.log(params);
  return params;
}

export default helper(timeConverter);
