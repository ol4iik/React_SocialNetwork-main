
import React, { Suspense } from 'react';
import Preloader from '../Preloader/Preloader';

const withSuspense = (Component) => {
    return <Suspense fallback={<Preloader />}>
        <Component />
    </Suspense>
}

export default withSuspense;