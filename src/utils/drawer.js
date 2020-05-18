export default function drawCanvas(data) {
  switch (data.type) {
    case 'goods':
      return drawGoodsPoster(data)
    case 'activity':
      return drawActivity(data)
    case 'swiper':
      return drawSwiper(data)
  }
}
// 分享商品
function drawGoodsPoster(goods) {
  const startTop = 540
  let padding = 15 // 图片padding
  let posWidth = 550 // 图片默认宽度
  let posHeight = 876 // 图片默认宽度
  const views = [
    {
      type: 'image',
      url: goods.specialLogo,
      css: {
        top: '18px',
        width: '82px',
        height: '82px',
        left: '20px',
        borderWidth: '2px',
        borderColor: '#E9E9E9'
      }
    },
    {
      type: 'text',
      text: goods.goodsName,
      css: {
        maxLines: 2,
        width: '400px',
        fontSize: '28px',
        top: '25px',
        lineHeight: '35px',
        left: '121px',
        color: '#333333'
      }
    },
    {
      type: 'image',
      url: goods.goodsImg,
      css: {
        width: '520px',
        height: '520px',
        top: '119px',
        left: `${padding}px`,
        borderRadius: '10px'
      }
    },

    {
      type: 'text',
      text: '¥',
      css: {
        left: '16px',
        top: `${startTop + 119}px`,
        color: '#FF5000',
        fontSize: '30px'
      }
    },
    {
      id: 'goods-money',
      type: 'text',
      text: goods.goodsMoney,
      css: {
        left: '40px',
        top: `${startTop + 119}px`,
        color: '#FF5000',
        fontSize: '30px'
      }
    },
    {
      type: 'text',
      text: goods.goodsPrice,
      css: {
        left: ['50px', 'goods-money'],
        top: `${startTop + 126}px`,
        color: '#999999',
        fontSize: '22px',
        textDecoration: 'line-through'
      }
    },
    {
      type: 'text',
      text: ` 省：¥ ${goods.goodsPrice - goods.goodsMoney} `,
      css: {
        left: `${padding}px`,
        bottom: `145px`,
        background: '#FF5000',
        color: '#fff',
        height: '26px',
        lineHeight: '26px',
        fontSize: '22px',
        borderWidth: '3px',
        borderColor: '#FF5000'
      }
    },
    {
      type: 'qrcode',
      content: goods.qrcode,
      css: {
        bottom: '73px',
        right: '23px',
        width: '150px',
        height: '150px'
      }
    },
    {
      type: 'text',
      text: '长按识别二维码选购',
      css: {
        fontSize: '19px',
        color: '#666',
        bottom: '29px',
        right: `${padding}px`
      }
    }
  ]
  return {
    width: `${posWidth}px`,
    height: `${posHeight}px`,
    background: '#fff',
    views: views
  }
}
// 分享 专场活动
function drawActivity(activity) {
  let padding = 15 // 图片padding
  let posWidth = 550 // 图片默认宽度
  let posHeight = 785 // 图片默认宽度
  let topStart = 119
  return {
    width: `${posWidth}px`,
    height: `${posHeight}px`,
    background: '#fff',
    views: [
      {
        type: 'image',
        url: activity.specialLogo,
        css: {
          top: '18px',
          width: '82px',
          height: '82px',
          left: '20px',
          borderWidth: '2px',
          borderColor: '#E9E9E9'
        }
      },
      {
        type: 'text',
        text: activity.shareTitle,
        css: {
          maxLines: 1,
          width: '400px',
          fontSize: '28px',
          top: '47px',
          left: '121px',
          color: '#333333'
        }
      },
      {
        type: 'image',
        url: activity.shareImg,
        css: {
          top: `${topStart}px`,
          width: `${posWidth - padding * 2}px`,
          height: '416px',
          left: `${padding}px`,
          borderRadius: '10px'
        }
      },

      {
        type: 'rect',
        css: {
          left: `${padding}px`,
          bottom: '30px',
          color: '#FF8F52',
          width: '165px',
          height: '38px'
        }
      },
      {
        type: 'text',
        text: activity.specialDate,
        css: {
          fontSize: '24px',
          color: '#fff',
          bottom: '40px',
          left: '27px'
        }
      },
      {
        type: 'qrcode',
        content: activity.qrcode,
        css: {
          bottom: '73px',
          right: '25px',
          width: '150px',
          height: '150px'
        }
      },
      {
        type: 'text',
        text: '长按识别二维码选购',
        css: {
          fontSize: '20px',
          color: '#333333',
          bottom: '34px',
          right: `${padding}px`
        }
      }
    ]
  }
}
// 多张图
function drawSwiper(swiper) {
  let posWidth = 600 // 图片默认宽度
  let posHeight = 860 // 图片默认宽度
  let views = []
  switch (swiper.current) {
    case 0:
      views = [
        {
          type: 'image',
          url: swiper.shareImgs[swiper.current].shareImg,
          css: {
            width: `${posWidth}px`,
            height: `${posHeight}px`
          }
        },
        {
          type: 'rect',
          css: {
            left: '20px',
            bottom: '304px',
            color: '#EA3247',
            width: '560px',
            height: '56px',
            borderRadius: '28px'
          }
        },
        {
          type: 'text',
          text: swiper.shareImgs[swiper.current].title,
          css: {
            maxLines: 1,
            width: '400px',
            left: '300px',
            align: 'center',
            textAlign: 'center',
            fontSize: '34px',
            bottom: '318px',
            color: '#fff',
            fontWeight: 'bold'
          }
        },
        {
          type: 'qrcode',
          content: swiper.qrcode,
          css: {
            bottom: '102px',
            left: '100px',
            color: '#000',
            width: '170px',
            height: '170px'
          }
        }
      ]

      break
    case 1:
      views = [
        {
          type: 'image',
          url: swiper.shareImgs[swiper.current].shareImg,
          css: {
            width: `${posWidth}px`,
            height: `${posHeight}px`
          }
        },
        {
          type: 'rect',
          css: {
            left: '35px',
            top: '62px',
            color: '#41029B',
            width: '530px',
            height: '58px',
            borderRadius: '28px'
          }
        },
        {
          type: 'text',
          text: swiper.shareImgs[swiper.current].title,
          css: {
            maxLines: 1,
            width: '400px',
            left: '300px',
            align: 'center',
            textAlign: 'center',
            fontSize: '34px',
            top: '70px',
            color: '#fff',
            fontWeight: 'bold'
          }
        },
        {
          type: 'qrcode',
          content: swiper.qrcode,
          css: {
            bottom: '165px',
            left: '100px',
            color: '#000',
            width: '170px',
            height: '170px'
          }
        }
      ]

      break
    case 2:
      views = [
        {
          type: 'image',
          url: swiper.shareImgs[swiper.current].shareImg,
          css: {
            width: `${posWidth}px`,
            height: `${posHeight}px`
          }
        },
        {
          type: 'text',
          text: swiper.shareImgs[swiper.current].title,
          css: {
            maxLines: 1,
            width: '400px',
            left: '300px',
            align: 'center',
            textAlign: 'center',
            fontSize: '34px',
            top: '30px',
            color: '#EDF4E4',
            fontWeight: 'bold'
          }
        },
        {
          type: 'qrcode',
          content: swiper.qrcode,
          css: {
            bottom: '232px',
            left: '100px',
            color: '#000',
            width: '170px',
            height: '170px'
          }
        }
      ]

      break
    default:
      break
  }
  return {
    width: `${posWidth}px`,
    height: `${posHeight}px`,
    background: '#fff',
    views: views
  }
}
