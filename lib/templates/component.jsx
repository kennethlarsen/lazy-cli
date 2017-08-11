import React from 'react';
import Reflux from 'reflux';

import testStore from 'yousee/sales/flux/stores/domain/testStore.js';
import testActions from 'yousee/sales/flux/actions/domain/testActions.js';

export class test extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = testStore;
    }

    render() {
        return ();
    }
}
