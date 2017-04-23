import ava from 'ava';
import { Mother, Jelly, XiaoMi, AllFactory, fieldTest, Battery } from '../src/Factory';


ava('test Mother', (t)=>{
    // 宝宝要开始提需求了
    // 宝宝要糖糖
    let jelly = Mother.giveMe('tangtang');

    // 宝宝要飞飞
    let toyPlane = Mother.giveMe('feifei');

    t.true(jelly instanceof Jelly ); // 妈妈给宝宝果冻
    t.true(jelly.chewed); // 宝宝得到的果冻是经过处理的
    t.true(toyPlane === null) // 妈妈不同意买飞机
})


ava('test XiaoMi Factory', (t)=>{
    t.true(XiaoMi('battery').getBattery() instanceof Battery);
    t.true(XiaoMi('screen').getScreen().name === 'screen');

})


let email = 'belovedyogurt@gmail.com';
let myname = "陈大明";

ava('fieldTest' , t => {
    t.true(fieldTest('email').test(email));
    t.true(fieldTest('character').test(myname));
})


ava('AllFactory', t => {
    let mom = AllFactory.getMother();

    let test = AllFactory.getFieldTest();

    t.true(mom === Mother);
    t.true(test('email').test(email));	
})




