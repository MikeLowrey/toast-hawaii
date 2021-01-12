    class ToastHawaii {
    
        constructor(config = {}) {            
            this.duration = typeof(config.duration) == 'undefined' ? 1000 : config.duration;
            this.config = config;
            
            this.toast_id = 0;
            console.log(this.duration)
        }

        getIcon() {
            return {
                'success': `<svg width="34" height="34" viewBox="0 0 1792 1792" fill="#44C997" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
                        </svg>`,
                'warning': `<svg width="34" height="34" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  version="1.0" viewBox="0 0 627.769 550.45"><path id="path2231" fill="red" d="m614.57 504.94l-279.4-483.94c-4.38-7.588-12.47-12.262-21.23-12.262s-16.85 4.674-21.23 12.258l-279.41 483.94c-4.375 7.58-4.375 16.93 0.003 24.52 4.379 7.58 12.472 12.25 21.23 12.25h558.81c8.76 0 16.86-4.67 21.23-12.25 4.38-7.59 4.38-16.94 0-24.52z"/><polygon id="polygon2233" points="93.977 482.88 533.9 482.88 313.94 101.89" fill="#fff"/><path id="path2235" d="m291.87 343.36c1.21 11.49 3.21 20.04 6.02 25.66 2.81 5.63 7.82 8.43 15.04 8.43h2.01c7.22 0 12.24-2.8 15.04-8.43 2.81-5.62 4.82-14.17 6.02-25.66l6.42-88.75c1.21-17.3 1.81-29.71 1.81-37.25 0-10.25-2.91-18.25-8.73-23.99-5.53-5.46-13.38-8.59-21.56-8.59s-16.04 3.13-21.57 8.59c-5.81 5.74-8.72 13.74-8.72 23.99 0 7.54 0.6 19.95 1.8 37.25l6.42 88.75z"/><circle id="circle2237" cy="430.79" cx="313.94" r="30.747"/></svg>`,
            }
        }

        makeToast(paras) {
            let i = this.toast_id++;
            let _html = `<div id="toastid-${i}" class="relative salami  opacity-0 invisible transition-opacity duration-1000 ease-out" > <!-- absolute mx-auto top-0 mt-2 z-50 -->
                <div class=" flex mt-2 mx-2 ">
                  <div class="m-auto w-96">
                    <div class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
                      <div class="flex flex-row">
                        <div class="px-2 toast-hawaii-icon">${i}
                          <svg width="24" height="24" viewBox="0 0 1792 1792" fill="#44C997" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
                            </svg>
                        </div>
                        <div class="ml-2 mr-6">
                          <span class="font-semibold toast-hawaii-title">Zum Warenkorb hinzugefügt!</span>
                          <span class="block text-gray-500 toast-hawaii-msg">Oben recht auf die kleine Tasche klicken</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>`;

            var x = document.getElementById("toast-hawaii");            
            x.innerHTML += _html;            
            // catch the new toast
            let toast = document.getElementById('toastid-'+i);
            var toast_id = 'toastid-'+i;

            toast.querySelector('#toast-hawaii .toast-hawaii-title').innerHTML = (typeof paras.title == 'undefined' || paras.title.length == 0) ? 'default' : paras.title;
            toast.querySelector('#toast-hawaii .toast-hawaii-msg').innerHTML = (typeof paras.msg == 'undefined' || paras.msg.length == 0) ? 'default' : paras.msg;
            toast.querySelector('#toast-hawaii .toast-hawaii-icon').innerHTML = typeof paras.style == 'undefined' ? this.getIcon().warning : this.getIcon()[paras.style];

            var toastController = {                
                async remove(id) {
                    let _t = document.getElementById(id);
                    _t.classList.toggle('opacity-70' );
                    setTimeout(() => {                                       
                        _t.remove();
                    }, this.duration+500);                                
                },
                fadeIn(__t) {
                    __t.classList.toggle('invisible');
                    __t.classList.toggle('opacity-70');
                },
                fadeOut(id) {                    
                    let _t = document.getElementById(id);                    
                    _t.classList.toggle('opacity-70')          
                }
            }            
            
            // short delay for the browser because browser need some times to recognise what heapend here ;-)
            setTimeout(function() {         
                toastController.fadeIn(toast);
            }, 50)            
            
            setTimeout(() => {
                toastController.remove(toast_id);                                
            }, this.duration);              
        }
    }
