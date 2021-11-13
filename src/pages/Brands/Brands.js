import React from 'react';

const Brands = () => {
    return (
        <div>
            <h1 className='text-center'>Other Brands</h1>
            <div className="container text-center">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div className="col" >
                        <div className="shadow p-3 mb-5 bg-body rounded">

                            <h3>Audi</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <h3>Aston Martin</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <h3>Bentely</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <h3>Ferrari</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <h3>Ford</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <h3>Honda</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Brands;