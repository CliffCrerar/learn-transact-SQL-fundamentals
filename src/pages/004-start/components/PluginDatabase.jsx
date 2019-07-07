import React from 'react';

function PluginDatabase(){
    return(
        <React.Fragment>
        <div class="p4-img-container">
            <style>{`
                .p4-img-container{
                    position: relative;
                    width:100%
                }
                .img-class {
                    position: relative;
                    max-width:100%
                }
            `}</style>
            <img class="img-class" src="https://cdn-learnsql.c1i44.now.sh/pg4/plugin-database.jpg" alt="plugin database"/>
        </div>
        </React.Fragment>
    )
}

export default PluginDatabase;