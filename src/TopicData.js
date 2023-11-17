import youngman_angry from './assets/youngman_angry.jpg';
import army from './assets/army.jpg';
import woman_angry from './assets/woman_angry.jpg';
import ossan_confuse from './assets/ossan_confuse.jpg';
import speech from './assets/speech.jpg';
import teacher from './assets/teacher.jpg';
import agriculture from './assets/agriculture.jpg';
import kickboard from './assets/kickboard.jpg';
import oldwoman_confuse from './assets/oldwoman_confuse.jpg';
import smoke_dislike from './assets/smoke_dislike.jpg';
import darty_dog from './assets/darty_dog.jpg';
import soap from './assets/soap.jpg';
import ryoushi from './assets/ryoushi.jpg';
import sick from './assets/sick.jpg';
import QRpay from './assets/QRpay.jpg';




//表示される問題
const topics = [
  {
    id: 1,
    description: 'タバコ吸える場所少なすぎだろ!',
    image: youngman_angry,
    detail: '公共の場ではタバコを吸うことができませんが、喫煙者にとっては不便です。喫煙スペースの設置や税率の調整によって、この問題に対処することが可能です。',
    choices: [
      {
        text: 'たばこの税率を下げる',
        effect: {
          budget: -50,
          youth: 3,
          elderly: 1
        }
      },
      {
        text: 'たばこの税率を上げる',
        effect: {
          budget: 1000,
          youth: -3,
          elderly: -2
        }
      },
      {
        text: '喫煙所を設置する',
        effect: {
          budget: -100,
          youth: -4,
          elderly: -4
        }
      },
      // 他の選択肢
    ]
  },
  // 他のトピックオブジェクト
  {
    id: 2,
    description: '防衛費を増やして有事に備えて欲しい',
    image: army,
    detail: '防衛費は議論が複雑です',
    choices: [
      {
        text: '防衛費を増やす',
        effect: {
          budget: -100,
          youth: 0,
          elderly: 0
        }
      },
      {
        text: '防衛費を減らす',
        effect: {
          budget: 1000,
          youth: 5,
          elderly: 5
        }
      },
      {
        text: '検討する',
        effect: {
          budget: 0,
          youth: -3,
          elderly: -2
        }
      },
      // 他の選択肢
    ]
  },

  {
    id: 3,
    description: '娘が幼稚園に入れなかったんだけど！',
    image: woman_angry,
    detail: '公共の場ではタバコを吸うことができませんが、喫煙者にとっては不便です。喫煙スペースの設置や税率の調整によって、この問題に対処することが可能です。',
    choices: [
      {
        text: '幼稚園を新設する',
        effect: {
          budget: -200,
          youth: 10,
          elderly:-3 
        }
      },
      {
        text: '補助金を出す',
        effect: {
          budget: -100,
          youth: 7,
          elderly: -5
        }
      },
      {
        text: '検討する',
        effect: {
          budget: 0,
          youth: -10,
          elderly: 0
        }
      },
      // 他の選択肢
    ]
  },

  {
    id: 4,
    description: 'ガソリン代が高すぎるよ',
    image: ossan_confuse,
    detail: '公共の場ではタバコを吸うことができませんが、喫煙者にとっては不便です。喫煙スペースの設置や税率の調整によって、この問題に対処することが可能です。',
    choices: [
      {
        text: 'ガソリン税を減税する',
        effect: {
          budget: -300,
          youth: 10,
          elderly:10 
        }
      },
      {
        text: 'ガソリンスタンドへ補助金を出す',
        effect: {
          budget: -200,
          youth: 10,
          elderly: 5
        }
      },
      {
        text: 'リモートワークの推進',
        effect: {
          budget: 0,
          youth: -4,
          elderly: -5
        }
      },
    ]
  },
    
      // 他の選択肢
      {
        id: 5,
        description: '学校の先生が不足しているようです。',
        image: teacher,
        detail: '教育は国の将来にとって非常に重要です。教師の不足は教育の質に影響を与えるため、適切な対策が必要です。',
        choices: [
          {
            text: '教師の給料を増やす',
            effect: {
              budget: -100,
              youth: 2,
              elderly: 0
            }
          },
          {
            text: '教育プログラムを見直す',
            effect: {
              budget: 50,
              youth: 8,
              elderly: 0
            }
          },
          {
            text: 'ボランティア教師を募集する',
            effect: {
              budget: 0,
              youth: -8,
              elderly: -3
            }
          },
        ]
      },

      {
        id: 6,
        description: '最近の食品の安全性が心配です。',
        image: agriculture,
        detail: '食の安全は市民の健康に直結する問題です。食品の検査体制を強化し、安全な食品を提供することが求められています。',
        choices: [
          {
            text: '食品検査の基準を厳格化する',
            effect: {
              budget: -30,
              youth: 10,
              elderly: 7
            }
          },
          {
            text: '食品の原産地表示を義務付ける',
            effect: {
              budget: -30,
              youth: 5,
              elderly: 5
            }
          },
          {
            text: '食育プログラムを推進する',
            effect: {
              budget: 50,
              youth: 3,
              elderly: 0
            }
          },
        ]
      },

      {
        id: 7,
        description: '電動キックボードを推進したい',
        image: kickboard,
        detail: '公共交通機関の利用促進は環境保護にもつながります。より多くの市民が電動キックボードを利用するための施策を検討しましょう。',
        choices: [
          {
            text: '法律を整備する',
            effect: {
              budget: 50,
              youth: 5,
              elderly: 8
            }
          },
          {
            text: 'アプリの宣伝をする',
            effect: {
              budget: -70,
              youth: 10,
              elderly: 5
            }
          },
          {
            text: '危険なので禁止する',
            effect: {
              budget: 0,
              youth: -10,
              elderly: 10
            }
          },
        ]
      },

      {
        id: 8,
        description: '緑地が少なくなってきています。',
        image: oldwoman_confuse,
        detail: '市民の憩いの場である公園や緑地は、都市の環境にも良い影響を与えます。都市の緑化に向けた取り組みを進めましょう。',
        choices: [
          {
            text: '公園を新設する',
            effect: {
              budget: -100,
              youth: 7,
              elderly: 10
            }
          },
          {
            text: '屋上緑化を奨励する',
            effect: {
              budget: -60,
              youth: 5,
              elderly:10
            }
          }, 
          {
            text: '自転車利用の推進',
            effect: {
              budget: 0,
              youth: 0,
              elderly: -5
            }
          },
          ]
         },
         {
          id: 9,
          description: '副流煙は有害だから、喫煙所を減らして欲しい',
          image: smoke_dislike,
          detail: '副流煙は健康被害を与えます',
          choices: [
            {
              text: '喫煙所を減らす',
              effect: {
                budget: 100,
                youth: 9,
                elderly: 3
              }
            },
            {
              text: 'タバコ税を増税する',
              effect: {
                budget: 500,
                youth: -5,
                elderly:-10
              }
            }, 
            {
              text: 'タバコの販売を禁止する',
              effect: {
                budget: -20,
                youth: -15,
                elderly: -15
              }
            },
            ]
           },
           {
            id: 10,
            description: '虐待を受けている子供を助けてあげて欲しい',
            image: darty_dog,
            detail: '虐待は絶対あってはなりません',
            choices: [
              {
                text: '子供の相談窓口を宣伝する',
                effect: {
                  budget: -20,
                  youth: 7,
                  elderly: 3
                }
              },
              {
                text: '家庭訪問を頻繁に実施する',
                effect: {
                  budget: -20,
                  youth: -2,
                  elderly:-1
                }
              }, 
              {
                text: '健康診断を頻繁にする',
                effect: {
                  budget: -20,
                  youth: 4,
                  elderly: -5
                }
              },
              ]
             },

             {
              id: 11,
              description: '温泉で男児の混浴を禁止してください',
              image: soap,
              detail: '規制する年齢を条例で定めているのは38都道府県です。最も厳しい県で7歳以上禁止、規制がない県も存在します',
              choices: [
                {
                  text: '法律を作る',
                  effect: {
                    budget: -50,
                    youth: 9,
                    elderly: 3
                  }
                },
                {
                  text: '各都道府県のルールを徹底',
                  effect: {
                    budget: 0,
                    youth: 5,
                    elderly:3
                  }
                }, 
                {
                  text: '検討する',
                  effect: {
                    budget: 0,
                    youth: -10,
                    elderly: -5
                  }
                },
                ]
               },

               {
                id: 12,
                description: '漁獲高が減って大変です',
                image: ryoushi,
                detail: '年齢制限は',
                choices: [
                  {
                    text: '捕っていい量を決める',
                    effect: {
                      budget: -20,
                      youth: 2,
                      elderly: 3
                    }
                  },
                  {
                    text: '事業者に補助金を配る',
                    effect: {
                      budget: -200,
                      youth: -100,
                      elderly:-5
                    }
                  }, 
                  {
                    text: '養殖を推進する',
                    effect: {
                      budget: -200,
                      youth: 10,
                      elderly: 10
                    }
                  },
                  ]
                 },
                 {
                  id: 13,
                  description: 'ウイルスの流行で病床が逼迫しています',
                  image: sick,
                  detail: 'コロナ感染者が多すぎてで病院側が患者を受け入れられなかった',
                  choices: [
                    {
                      text: '病院に補助金を配る',
                      effect: {
                        budget: -20,
                        youth: 2,
                        elderly: 3
                      }
                    },
                    {
                      text: 'ホテルに感染者隔離の協力を依頼する',
                      effect: {
                        budget: -10,
                        youth: -10,
                        elderly:-5
                      }
                    }, 
                    {
                      text: '自宅療養を訴えかける',
                      effect: {
                        budget: -30,
                        youth: 10,
                        elderly: 10
                      }
                    },
                    ]
                   },                 
                   {
                    id: 14,
                    description: '強制',
                    image: QRpay,
                    detail: 'あ',
                    choices: [
                      {
                        text: 'クリア',
                        effect: {
                          budget: 1000,
                          youth: 100,
                          elderly: 100
                        }
                      },
                      {
                        text: 'ゲームオーバー',
                        effect: {
                          budget: -1000,
                          youth: -100,
                          elderly:-100
                        }
                      }, 
                      {
                        text: '続行',
                        effect: {
                          budget: 0,
                          youth: 0,
                          elderly: 0
                        }
                      },
                      ]
                     },  
                     {
                      id: 15,
                      description: '選挙演説の声がうるさいです',
                      image: speech,
                      detail: '選挙演説が騒音トラブルとして話題になったことがあった',
                      choices: [
                        {
                          text: '選挙演説を全面禁止する',
                          effect: {
                            budget: -20,
                            youth: 2,
                            elderly: 3
                          }
                        },
                        {
                          text: 'マイク音量に制限をつける',
                          effect: {
                            budget: -10,
                            youth: -10,
                            elderly:-5
                          }
                        }, 
                        {
                          text: '仕方ないことであると説明する',
                          effect: {
                            budget: 0,
                            youth: -10,
                            elderly: -10
                          }
                        },
                        ]
                       },  
]; 

export default topics;
