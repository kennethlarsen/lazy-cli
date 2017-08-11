import Reflux from 'reflux';

import testActions from 'yousee/sales/flux/actions/domain/testActions.js';

export default class store extends Reflux.Store {
    constructor() {
        super();
        this.listenables = [testActions];
    }
}

