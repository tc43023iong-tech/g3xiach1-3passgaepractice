
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
        explanation: '「衣」的韻母是單韻母 i。'
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
    title: '第三課：打電話 (拼寫篇)',
    subtitle: 'ü 行與聲母組合規則',
    icon: '📞',
    animal: '🐱',
    questions: [
      {
        id: 301,
        category: '聲母組合',
        question: '「區」的音節是 qū，它的原組合是？',
        options: ['q + ü', 'q + u', 'q + i'],
        correctIndex: 0,
        explanation: 'j, q, x 見到 ü，兩點要去掉喔！'
      },
      {
        id: 302,
        category: '聲母組合',
        question: '「全」的音節是 quán，它的原組合是？',
        options: ['q + uan', 'q + üan', 'q + ian'],
        correctIndex: 1,
        explanation: '小 ü 見到 q，脫掉帽子變 uan 的樣子。'
      },
      {
        id: 303,
        category: '聲母組合',
        question: '「學」的音節是 xué，它的原組合是？',
        options: ['x + üe', 'x + ue', 'x + ie'],
        correctIndex: 0,
        explanation: 'x 也是 ü 的好朋友，拼寫時要去掉兩點。'
      },
      {
        id: 304,
        category: '聲母組合',
        question: '「均」的音節是 jūn，它的原組合是？',
        options: ['j + un', 'j + ün', 'j + in'],
        correctIndex: 1,
        explanation: 'j 見到 ün，兩點也要去掉。'
      }
    ]
  },
  {
    id: 5,
    title: '第三課：打電話 (標調篇)',
    subtitle: '標調位置與實戰規則',
    icon: '🎯',
    animal: '🦒',
    questions: [
      {
        id: 501,
        category: '標調位置',
        question: '在音節「xiu」(休) 中，聲調應該標在？',
        options: ['標在 i 上', '標在 u 上', '標在 x 上'],
        correctIndex: 1,
        explanation: 'i、u 並列標在後，誰在後面標誰！'
      },
      {
        id: 502,
        category: '標調位置',
        question: '在音節「qiu」(球) 中，聲調應該標在？',
        options: ['標在 i 上', '標在 u 上', '標在 q 上'],
        correctIndex: 1,
        explanation: 'i、u 並列標在後，u 在後面。'
      },
      {
        id: 503,
        category: '標調位置',
        question: '在音節「dui」(對) 中，聲調應該標在？',
        options: ['標在 u 上', '標在 i 上', '標在 d 上'],
        correctIndex: 1,
        explanation: 'i、u 並列標在後，這裡 i 在後面。'
      },
      {
        id: 504,
        category: '標調位置',
        question: '在音節「hui」(會) 中，聲調應該標在？',
        options: ['標在 u 上', '標在 i 上', '標在 h 上'],
        correctIndex: 1,
        explanation: 'i、u 並列標在後。'
      },
      {
        id: 505,
        category: '標調位置',
        question: '在音節「jue」(決) 中，聲調應該標在？',
        options: ['標在 u 上', '標在 e 上', '標在 j 上'],
        correctIndex: 1,
        explanation: '沒 a 找 o、e。這裡有 e 標在 e 上。'
      },
      {
        id: 506,
        category: '標調實戰',
        question: '「柳」(liu) 的第三聲，正確寫法是？',
        options: ['lǐu', 'liǔ', 'liù'],
        correctIndex: 1,
        explanation: '標在後面那個字母上。'
      },
      {
        id: 507,
        category: '標調實戰',
        question: '「桂」(gui) 的第四聲，正確寫法是？',
        options: ['guì', 'gùi', 'guĭ'],
        correctIndex: 0,
        explanation: '標在 i 上。'
      },
      {
        id: 508,
        category: '標調順序',
        question: '拼音標調的正確優先順序是？',
        options: ['a o e i u ü', 'a e o i u ü', 'i u ü a o e'],
        correctIndex: 0,
        explanation: 'a o e i u ü 是標準順序。'
      },
      {
        id: 509,
        category: '標調規則',
        question: '當「i 和 u 在一起」時，聲調要怎麼標？',
        options: ['標在 i 上', '標在後一個字母上', '標在 u 上'],
        correctIndex: 1,
        explanation: '誰在後面標誰頭上。'
      },
      {
        id: 510,
        category: '標調辨析',
        question: '下列音節標調正確的是？',
        options: ['qíu (球)', 'xiū (休)', 'dùi (對)'],
        correctIndex: 1,
        explanation: '只有 xiū 遵循了 i、u 並列標在後的規則。'
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
        question: '「購物商場」中「場」的韻母是？',
        options: ['ang', 'iang', 'uang'],
        correctIndex: 0,
        explanation: '「場」(chǎng) 的韻母是 ang。'
      },
      {
        id: 403,
        category: '韻母辨識',
        question: '「社區」中「區」的韻母是？',
        options: ['ü', 'u', 'i'],
        correctIndex: 0,
        explanation: '「區」(qū) 的韻母是 ü。'
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
        question: '「齊全」中「全」的韻母是？',
        options: ['üan', 'uan', 'an'],
        correctIndex: 0,
        explanation: '「全」(quán) 的韻母是 üan。'
      },
      {
        id: 406,
        category: '韻母辨識',
        question: '「對面兒」中「面」的韻母是？',
        options: ['an', 'ian', 'uan'],
        correctIndex: 1,
        explanation: '「面」(miàn) 的韻母是 ian。'
      }
    ]
  },
  {
    id: 6,
    title: '綜合大冒險',
    subtitle: '拼音小達人：20題大挑戰！',
    icon: '🌈',
    animal: '🦁',
    questions: [
      {
        id: 601,
        category: '韻母辨識',
        question: '「優」(yōu) 的實際韻母組合是？',
        options: ['iou', 'iu', 'iou'],
        correctIndex: 0,
        explanation: '實際為 iou，拼寫時縮寫為 iu。'
      },
      {
        id: 602,
        category: 'ü 行規則',
        question: '當「q」和「üan」組合時，音節寫作？',
        options: ['qüan', 'quán', 'qian'],
        correctIndex: 1,
        explanation: 'j, q, x 與 ü 相拼要去掉兩點。'
      },
      {
        id: 603,
        category: '標調位置',
        question: '「球」(qiu) 的聲調應該標在？',
        options: ['i 上', 'u 上', 'q 上'],
        correctIndex: 1,
        explanation: 'i、u 並列標在後。'
      },
      {
        id: 604,
        category: '韻母辨識',
        question: '「鴉」(yā) 的韻母是？',
        options: ['ia', 'a', 'ua'],
        correctIndex: 0,
        explanation: '「鴉」的音節是 yā，韻母是 ia。'
      },
      {
        id: 605,
        category: '音節拼寫',
        question: '「烏」自成音節時正確的寫法是？',
        options: ['u', 'wu', 'wū'],
        correctIndex: 2,
        explanation: 'u 前加 w，並標上聲調。'
      },
      {
        id: 606,
        category: '標調規則',
        question: '「i 和 u 並列」時，聲調標在？',
        options: ['前一個字母', '後一個字母', '隨便哪一個'],
        correctIndex: 1,
        explanation: '誰在後面標誰身上。'
      },
      {
        id: 607,
        category: '詞語辨析',
        question: '「齊全」中「全」(quán) 的韻母是？',
        options: ['uan', 'üan', 'an'],
        correctIndex: 1,
        explanation: '「全」的原韻母是 üan。'
      },
      {
        id: 608,
        category: 'ü 行規則',
        question: '音節「xué」的原韻母組合是？',
        options: ['x + üe', 'x + ue', 'x + ie'],
        correctIndex: 0,
        explanation: 'x 與 üe 相拼去兩點。'
      },
      {
        id: 609,
        category: '標調實戰',
        question: '「會」(hui) 的第四聲，寫法是？',
        options: ['huì', 'hùi', 'hui'],
        correctIndex: 0,
        explanation: 'i、u 在一起標在後，這裡 i 在後。'
      },
      {
        id: 610,
        category: '韻母辨識',
        question: '「音」(yīn) 的韻母是？',
        options: ['in', 'ing', 'ian'],
        correctIndex: 0,
        explanation: '「音」的韻母是前鼻音 in。'
      },
      {
        id: 611,
        category: '標調順序',
        question: '拼音標調的優先順序第一名是？',
        options: ['o', 'e', 'a'],
        correctIndex: 2,
        explanation: '有 a 不放過，a 是老大。'
      },
      {
        id: 612,
        category: '生活詞語',
        question: '「旁邊兒」中「邊」的韻母是？',
        options: ['an', 'ian', 'uan'],
        correctIndex: 1,
        explanation: '「邊」(biān) 的韻母是 ian。'
      },
      {
        id: 613,
        category: 'ü 行規則',
        question: '「n」和「ü」相拼時，兩點需要去掉嗎？',
        options: ['需要', '不需要', '都可以'],
        correctIndex: 1,
        explanation: '只有 j, q, x, y 才去兩點，n, l 不去喔！'
      },
      {
        id: 614,
        category: '標調位置',
        question: '「對」(dui) 的聲調標在？',
        options: ['u 上', 'i 上', 'd 上'],
        correctIndex: 1,
        explanation: 'i、u 在一起標在後。'
      },
      {
        id: 615,
        category: '音節拼寫',
        question: '「藥丸」正確的拼寫是？',
        options: ['yào wán', 'iào uán', 'yāo wán'],
        correctIndex: 0,
        explanation: 'i 改 y，u 改 w。'
      },
      {
        id: 616,
        category: '標調位置',
        question: '「決」(jue) 的聲調標在？',
        options: ['j 上', 'u 上', 'e 上'],
        correctIndex: 2,
        explanation: '沒 a 找 o、e，這裏有 e。'
      },
      {
        id: 617,
        category: '韻母辨識',
        question: '「耶」(yē) 的韻母是？',
        options: ['ie', 'ia', 'ue'],
        correctIndex: 0,
        explanation: '「耶」的韻母是 ie。'
      },
      {
        id: 618,
        category: '生活詞語',
        question: '「社區」中「區」的韻母是？',
        options: ['u', 'ü', 'i'],
        correctIndex: 1,
        explanation: '「區」的音節是 qū，韻母是 ü。'
      },
      {
        id: 619,
        category: '標調實戰',
        question: '「柳」(liu) 的第三聲寫法是？',
        options: ['lǐu', 'liǔ', 'liù'],
        correctIndex: 1,
        explanation: 'i、u 在一起標在後，標在 u 上。'
      },
      {
        id: 620,
        category: '綜合規則',
        question: '下列哪一個音節標調是正確的？',
        options: ['qíu', 'xiū', 'dùi'],
        correctIndex: 1,
        explanation: '只有 xiū 標在了正確的後面字母 u 上。'
      }
    ]
  }
];
