import React from 'react';

class Banner extends React.Component {
   render() {
   return (
      <div className="banner-container">
         <section id="banner">
            <div id="banner-content">
               <div className="helloworld-container-title">
                  <h1>{">"}hello, world!</h1>
                  <h1>{">"}<span id="subline"></span><span id="cursorHeader" className="cursor">|</span></h1>
               </div>
               <div className="helloworld-container" id="cpp">
                  <h3>{">"}c++</h3>
                  <div className="codeblock">
                     <h4><span id="cppl1"></span><span id="cursorcppl1" className="cursor"></span></h4>
                     <h4><span id="cppl2"></span><span id="cursorcppl2" className="cursor"></span></h4>
                     <h4 className="tab"><span id="cppl3"></span><span id="cursorcppl3" class="cursor"></span></h4>
                     <h4 className="tab"><span id="cppl4"></span><span id="cursorcppl4" className="cursor"></span></h4>
                     <h4><span id="cppl5"></span><span id="cursorcppl5" className="cursor"></span></h4>
                  </div>
               </div>

               <div className="helloworld-container" id="python">
                  <h3>{">"}className</h3>
                  <div className="codeblock">
                     <h4><span id="py1"></span><span id="cursorpy1" className="cursor"></span></h4>
                  </div>
               </div>

               <div className="helloworld-container" id="javascript">
                  <h3>{">"}javascript</h3>
                  <div className="codeblock">
                     <h4><span id="js1"></span><span id="cursorjs1" className="cursor"></span></h4>
                  </div>
               </div>

               <div className="helloworld-container" id="java">
                  <h3>{">"}java</h3>
                  <div className="codeblock">
                     <h4><span id="java1"></span><span id="cursorjava1" className="cursor"></span></h4>
                     <h4 className="tab"><span id="java2"></span><span id="cursorjava2" className="cursor"></span></h4>
                     <h4 className="doubletab"><span id="java3"></span><span id="cursorjava3" className="cursor"></span></h4>
                     <h4 className="tab"><span id="java4"></span><span id="cursorjava4" className="cursor"></span></h4>
                     <h4><span id="java5"></span><span id="cursorjava5" className="cursor"></span></h4>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
   };
};

export default Banner