# toast-hawaii
Small Notification App written in JavaScript and Tailwind. 

First of all, include the script in your programme. Then you can initiate the **ToastHawaii** object in your programme with: 
```
let t = new ToastHawaii({duration:3000}). 
```

From now on, you have access to the makeToast() method. With this function you can create a toast. See the example:

```
t.makeToast({
  title: 'Hello World',
  msg: 'It is allways good to be polite!',
  style: 'success'
});
```

**Don't forget to include in your HTML the Toast Container.**

```
<div class="fixed inset-x-0 top-0 z-40 pointer-events-none" id="toast-hawaii"></div>
```
You can find an example / demo here:
https://demos.seotheater.de/254/
