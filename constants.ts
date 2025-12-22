
import { Lesson } from './types';

export const LESSONS: Lesson[] = [
  {
    id: 1,
    title: '第一課：我家附近',
    subtitle: '韻母辨識與音節拼寫',
    icon: '🏠',
    animal: '🐰',
    questions: [
      {
        id: 101,
        category: '韻母辨識',
        question: '「衣」的韻母是？',
        options: ['i', 'ia', 'ie'],
        correctIndex: 0,
        explanation: '「衣」的韻母是 i。'
      },
      {
        id: 102,
        category: '韻母辨識',
        question: '「鴉」的韻母是？',
        options: ['i', 'ia', 'iao'],
        correctIndex: 1,
        explanation: '「鴉」(yā) 的韻母是 ia。'
      },
      {
        id: 103,
        category: '韻母辨識',
        question: '「耶」的韻母是？',
        options: ['ie', 'iao', 'iou'],
        correctIndex: 0,
        explanation: '「耶」(yē) 的韻母是 ie。'
      },
      {
        id: 104,
        category: '韻母辨識',
        question: '「腰」的韻母是？',
        options: ['iao', 'ian', 'in'],
        correctIndex: 0,
        explanation: '「腰」(yāo) 的韻母是 iao。'
      },
      {
        id: 105,
        category: '韻母辨識',
        question: '「優」的韻母是？',
        options: ['iou', 'iang', 'ing'],
        correctIndex: 0,
        explanation: '「優」(yōu) 的韻母是 iou (拼寫為 iu)。'
      },
      {
        id: 106,
        category: '韻母辨識',
        question: '「煙」的韻母是？',
        options: ['ian', 'in', 'iong'],
        correctIndex: 0,
        explanation: '「煙」(yān) 的韻母是 ian。'
      },
      {
        id: 107,
        category: '韻母辨識',
        question: '「音」的韻母是？',
        options: ['in', 'iang', 'ing'],
        correctIndex: 0,
        explanation: '「音」(yīn) 的韻母是 in。'
      },
      {
        id: 108,
        category: '韻母辨識',
        question: '「烏」的韻母是？',
        options: ['u', 'ua', 'uo'],
        correctIndex: 0,
        explanation: '「烏」(wū) 的韻母是 u。'
      },
      {
        id: 109,
        category: '韻母辨識',
        question: '「蛙」的韻母是？',
        options: ['ua', 'uai', 'uei'],
        correctIndex: 0,
        explanation: '「蛙」(wā) 的韻母是 ua。'
      },
      {
        id: 110,
        category: '韻母辨識',
        question: '「窩」的韻母是？',
        options: ['uo', 'uan', 'uen'],
        correctIndex: 0,
        explanation: '「窩」(wō) 的韻母是 uo。'
      },
      {
        id: 111,
        category: '音節拼寫',
        question: '「藥丸」的正確音節是？',
        options: ['iào uán', 'yào wán', 'yāo wán'],
        correctIndex: 1,
        explanation: 'i 改寫為 y，u 改寫為 w。'
      },
      {
        id: 112,
        category: '音節拼寫',
        question: '「蛙泳」的正確音節是？',
        options: ['uā ǐǒng', 'wā yǒng', 'wā yōng'],
        correctIndex: 1,
        explanation: '「蛙」寫作 wā，「泳」寫作 yǒng。'
      },
      {
        id: 113,
        category: '音節拼寫',
        question: '「鸚鵡」的正確音節是？',
        options: ['īng ǔ', 'yīng wǔ', 'yīng wū'],
        correctIndex: 1,
        explanation: '「鸚」加 y，「鵡」加 w。'
      },
      {
        id: 114,
        category: '音節拼寫',
        question: '「衣」自成音節的寫法是？',
        options: ['yī', 'yi', 'i'],
        correctIndex: 0,
        explanation: 'i 前加 y，標聲調寫作 yī。'
      },
      {
        id: 115,
        category: '音節拼寫',
        question: '「烏」自成音節的寫法是？',
        options: ['u', 'wu', 'wū'],
        correctIndex: 2,
        explanation: 'u 前加 w，標聲調寫作 wū。'
      }
    ]
  },
  {
    id: 2,
    title: '第二課：社區有心人',
    subtitle: 'ü 行韻母辨析與規則',
    icon: '🤝',
    animal: '🐶',
    questions: [
      {
        id: 201,
        category: '詞語韻母辨析',
        question: '「學會」中「學」的韻母是？',
        options: ['üe', 'üan', 'ün'],
        correctIndex: 0,
        explanation: '「學」(xué) 的韻母是 üe。'
      },
      {
        id: 202,
        category: '詞語韻母辨析',
        question: '「捐助」中「助」的韻母是？',
        options: ['u', 'ü', 'ou'],
        correctIndex: 0,
        explanation: '「助」(zhù) 的韻母是 u。'
      },
      {
        id: 205,
        category: '詞語韻母辨析',
        question: '「薰衣草」中「薰」的韻母是？',
        options: ['ün', 'üe', 'uan'],
        correctIndex: 0,
        explanation: '「薰」(xūn) 的韻母是 ün。'
      },
      {
        id: 206,
        category: '詞語韻母辨析',
        question: '「茶葉」中「葉」的韻母是？',
        options: ['üe', 'ie', 'ün'],
        correctIndex: 1,
        explanation: '「葉」(yè) 的韻母是 ie。'
      },
      {
        id: 207,
        category: '詞語韻母辨析',
        question: '「約會」中「約」的韻母是？',
        options: ['üe', 'üan', 'ün'],
        correctIndex: 0,
        explanation: '「約」(yuē) 的韻母是 üe。'
      },
      {
        id: 208,
        category: '詞語韻母辨析',
        question: '「鴛鴦」中「鴛」的韻母是？',
        options: ['üan', 'ün', 'ian'],
        correctIndex: 0,
        explanation: '「鴛」(yuān) 的韻母是 üan。'
      },
      {
        id: 209,
        category: '詞語韻母辨析',
        question: '「頭暈」中「暈」的韻母是？',
        options: ['ün', 'üe', 'un'],
        correctIndex: 0,
        explanation: '「暈」(yūn) 的韻母是 ün。'
      },
      {
        id: 210,
        category: '韻母規則',
        question: '「閱讀」的「閱」對應音節 yuè，原韻母是？',
        options: ['üe', 'ie', 'üan'],
        correctIndex: 0,
        explanation: 'yuè 原韻母是 üe。'
      },
      {
        id: 213,
        category: '音節拼寫',
        question: '韻母「üe」自成音節的寫法是？',
        options: ['üe', 'yuē', 'yue'],
        correctIndex: 2,
        explanation: '加 y 去兩點寫作 yue。'
      }
    ]
  },
  {
    id: 3,
    title: '第三課：打電話',
    subtitle: '聲母與 ü 行韻母組合',
    icon: '📞',
    animal: '🐱',
    questions: [
      {
        id: 304,
        category: '詞語韻母辨析',
        question: '「訓練班」中「訓」的韻母是？',
        options: ['ün', 'üe', 'un'],
        correctIndex: 0,
        explanation: '「訓」(xùn) 的韻母是 ün。'
      },
      {
        id: 306,
        category: '聲母組合',
        question: '「區」的音節是 qū，其組合是？',
        options: ['q + ü', 'q + u', 'q + ie'],
        correctIndex: 0,
        explanation: 'j/q/x 與 ü 相拼要去掉兩點。'
      },
      {
        id: 307,
        category: '聲母組合',
        question: '「學」的音節是 xué，其組合是？',
        options: ['x + üe', 'x + ue', 'x + ie'],
        correctIndex: 0,
        explanation: 'x 與 üe 相拼要去掉兩點。'
      },
      {
        id: 308,
        category: '聲母組合',
        question: '「均」的音節是 jūn，其組合是？',
        options: ['j + ün', 'j + un', 'j + in'],
        correctIndex: 0,
        explanation: 'j 與 ün 相拼要去掉兩點。'
      },
      {
        id: 309,
        category: '聲母組合',
        question: '「全」的音節是 quán，其組合是？',
        options: ['q + üan', 'q + uan', 'q + ian'],
        correctIndex: 0,
        explanation: 'q 與 üan 相拼要去掉兩點。'
      },
      {
        id: 310,
        category: '拼寫辨析',
        question: '「n」與「üe」拼寫的音節是？',
        options: ['nüe', 'nue', 'nie'],
        correctIndex: 0,
        explanation: 'n/l 與 ü 行拼寫時保留兩點。'
      },
      {
        id: 311,
        category: '拼寫辨析',
        question: '「l」與「ü」拼寫的音節是？',
        options: ['lü', 'lu', 'li'],
        correctIndex: 0,
        explanation: 'l 與 ü 相拼保留兩點。'
      },
      {
        id: 314,
        category: '拼寫組合',
        question: '「捲曲」中的「捲」(juǎn) 是哪種組合？',
        options: ['j + üan', 'j + uan', 'j + ian'],
        correctIndex: 0,
        explanation: 'j 與 üan 相拼。'
      }
    ]
  },
  {
    id: 4,
    title: 'Bonus：生活詞語',
    subtitle: '常用詞語拼音練習',
    icon: '🎁',
    animal: '🐹',
    questions: [
      {
        id: 401,
        category: '韻母辨識',
        question: '「運動場」中「動」的韻母是？',
        options: ['ong', 'iong', 'eng'],
        correctIndex: 0,
        explanation: '「動」(dòng) 的韻母是 ong。'
      },
      {
        id: 402,
        category: '韻母辨識',
        question: '「購物商場」中「物」的韻母是？',
        options: ['u', 'iu', 'ou'],
        correctIndex: 0,
        explanation: '「物」(wù) 的韻母是 u。'
      },
      {
        id: 403,
        category: '韻母辨識',
        question: '「社區」中「社」的韻母是？',
        options: ['e', 'i', 'ie'],
        correctIndex: 0,
        explanation: '「社」(shè) 的韻母是 e。'
      },
      {
        id: 404,
        category: '韻母辨識',
        question: '「設施」中「設」的韻母是？',
        options: ['e', 'i', 'ie'],
        correctIndex: 0,
        explanation: '「設」(shè) 的韻母是 e。'
      },
      {
        id: 405,
        category: '韻母辨識',
        question: '「齊全」中「齊」的韻母是？',
        options: ['i', 'iu', 'iai'],
        correctIndex: 0,
        explanation: '「齊」(qí) 的韻母是 i。'
      },
      {
        id: 406,
        category: '韻母辨識',
        question: '「對面兒」中「面」的韻母是？',
        options: ['an', 'ian', 'uan'],
        correctIndex: 1,
        explanation: '「面」(miàn) 的韻母是 ian。'
      },
      {
        id: 407,
        category: '韻母辨識',
        question: '「旁邊兒」中「邊」的韻母是？',
        options: ['an', 'ian', 'uan'],
        correctIndex: 1,
        explanation: '「邊」(biān) 的韻母是 ian。'
      },
      {
        id: 408,
        category: '韻母辨識',
        question: '「方便」中「便」的韻母是？',
        options: ['an', 'ian', 'uan'],
        correctIndex: 1,
        explanation: '「便」(biàn) 的韻母是 ian。'
      }
    ]
  }
];
