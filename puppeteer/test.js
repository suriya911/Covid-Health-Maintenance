const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ddbeaaecdfcdeaaefedffcfecbdeeecbaafbda.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h1');
    console.log('TESTCASE:testcase1:success');
  }
  catch(e){
    console.log('TESTCASE:testcase1:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ddbeaaecdfcdeaaefedffcfecbdeeecbaafbda.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('img');
    const result1 = await page.evaluate(()=>{
      let heading = document.querySelector("#titleName");
      return heading.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let heading = document.querySelector("#health1");
      return heading.innerHTML;
    })
    console.log('TESTCASE:testcase2:success');
  }
  catch(e){
    console.log('TESTCASE:testcase2:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ddbeaaecdfcdeaaefedffcfecbdeeecbaafbda.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('p');
    const result1 = await page.evaluate(()=>{
      let button = document.querySelector("#healthDescription1");
      return button.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let button = document.querySelector("#healthParagraph1");
      return button.innerHTML;
    })
    console.log('TESTCASE:testcase3:success');
  }
  catch(e){
    console.log('TESTCASE:testcase3:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ddbeaaecdfcdeaaefedffcfecbdeeecbaafbda.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    const result1 = await page.evaluate(()=>{
      let button = document.querySelector("#healthDescription2");
      return button.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let button = document.querySelector("#healthParagraph2");
      return button.innerHTML;
    })
    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ddbeaaecdfcdeaaefedffcfecbdeeecbaafbda.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    const result1 = await page.evaluate(()=>{
      let button = document.querySelector("#healthDescription3");
      return button.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let button = document.querySelector("#healthParagraph3");
      return button.innerHTML;
    })
    console.log('TESTCASE:testcase5:success');
  }
  catch(e){
    console.log('TESTCASE:testcase5:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ddbeaaecdfcdeaaefedffcfecbdeeecbaafbda.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('p');
    const result1 = await page.evaluate(()=>{
      let button = document.querySelector("#health2");
      return button.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let button = document.querySelector("#health3");
      return button.innerHTML;
    })
    console.log('TESTCASE:testcase6:success');
  }
  catch(e){
    console.log('TESTCASE:testcase6:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();