const czml = {
	state: {
		czml: [
   //  {
		 //    "id" : "document",
		 //    "name" : "CZML Geometries: Cones and Cylinders",
		 //    "version" : "1.0"
			// }, {
   //      "id": "textPolygon1",
   //      "name": "polygon on surface1",
   //      "polygon": {
   //        "positions": {
   //          "cartographicDegrees": [
   //          	118.58901657904786, 28.82226287106789, 211.18372299422074,
   //          	118.58960344940768, 28.822099413815067, 208.52965421707918,
   //          	118.5885723043708, 28.821485600840063, 213.543572744285
   //          ]
   //        },
   //        "material": {
   //          "solidColor": {
   //            "color": {
   //                "rgba": [255, 100, 10 ,255]
   //            }
   //          }
   //        },
   //        "perPositionHeight" : true,
   //      }
   //    }
      {
          "id" : "document",
          "name" : "Basic CZML billboard and label",
          "version" : "1.0",
          "clock": {
            "interval": "2018-09-01T00:00:00Z/2018-09-02T00:00:00Z",
            "currentTime": "2018-09-01T00:00:00Z",
            "multiplier": 1000
          },
          // "clock": {
          //     "interval": "2015-01-01T00:00:00Z/2015-01-01T00:00:20Z",
          //     "currentTime": "2015-01-01T00:00:00Z",
          //     "multiplier": 20
          // }
      }, {
          "id" : "biaozhu01",
          "name" : "红谷滩会展中心",
          "description" : "<p>111</p>",
          "billboard" : {
              "image" : require('@/assets/icon/point.png'),
              "scale" : 0.05
          },
          "label" : {
              "fillColor" : {
                  "rgba" : [255, 255, 255, 255]
              },
              "font" : "14pt  Microsoft YaHei",
              "horizontalOrigin" : "CENTER",
              "pixelOffset" : {
                  "cartesian2" : [0, -15]
              },
              "outlineColor" : {
                  "rgba":[0, 0, 0, 255]
              },
              "outlineWidth" : 1,
              "style" : "FILL_AND_OUTLINE",
              "text" : "红谷滩会展中心"
          },
          "polyline" : {
              "positions" : {
                  "cartographicDegrees" : [
                      115.8563314379521,28.68813888652397,42.61879042710008,
                      115.8563314379521,28.68813888652397,60
                  ]
              },
              "material" : {
                  "solidColor" : {
                      "color" : {
                          "rgba" : [255, 165, 0, 255]
                      }
                  }
              },
              "width" : 2,
          },
          "position" : {
              "cartographicDegrees" : [
                      115.8563314379521,28.68813888652397,60
              ]
          }
      },
      {
          "id" : "biaozhu02",
          "name" : "南昌市委",
          "description" : "",
          "billboard" : {
              "image" : require('@/assets/icon/point.png'),
              "scale" : 0.05
          },
          "label" : {
              "fillColor" : {
                  "rgba" : [255, 255, 255, 255]
              },
              "font" : "14pt  Microsoft YaHei",
              "horizontalOrigin" : "CENTER",
              "pixelOffset" : {
                  "cartesian2" : [0, -15]
              },
              "outlineColor" : {
                  "rgba":[0, 0, 0, 255]
              },
              "outlineWidth" : 1,
              "style" : "FILL_AND_OUTLINE",
              "text" : "南昌市委"
          },
          "polyline" : {
              "positions" : {
                  "cartographicDegrees" : [
                      115.85463282884392,28.688889402413967,38.28104584213658,
                      115.85463282884392,28.688889402413967,95
                  ]
              },
              "material" : {
                  "solidColor" : {
                      "color" : {
                          "rgba" : [255, 165, 0, 255]
                      }
                  }
              },
              "width" : 2,
          },
          "position" : {
              "cartographicDegrees" : [
                      115.85463282884392,28.688889402413967,95
              ]
          }
      },
      {
          "id" : "biaozhu03",
          "name" : "南昌市人大常务委员会",
          "description" : "",
          "billboard" : {
              "image" : require('@/assets/icon/point.png'),
              "scale" : 0.05
          },
          "label" : {
              "fillColor" : {
                  "rgba" : [255, 255, 255, 255]
              },
              "font" : "14pt  Microsoft YaHei",
              "horizontalOrigin" : "CENTER",
              "pixelOffset" : {
                  "cartesian2" : [0, -15]
              },
              "outlineColor" : {
                  "rgba":[0, 0, 0, 255]
              },
              "outlineWidth" : 1,
              "style" : "FILL_AND_OUTLINE",
              "text" : "南昌市人大常务委员会"
          },
          "polyline" : {
              "positions" : {
                  "cartographicDegrees" : [
                      115.85317005297637,28.689509582020893,57.79044063829855,
                      115.85317005297637,28.689509582020893,90
                  ]
              },
              "material" : {
                  "solidColor" : {
                      "color" : {
                          "rgba" : [255, 165, 0, 255]
                      }
                  }
              },
              "width" : 2,
          },
          "position" : {
              "cartographicDegrees" : [
                      115.85317005297637,28.689509582020893,90
              ]
          }
      },
      {
          "id" : "biaozhu04",
          "name" : "中国人民政协南昌市委会",
          "description" : "",
          "billboard" : {
              "image" : require('@/assets/icon/point.png'),
              "scale" : 0.05
          },
          "label" : {
              "fillColor" : {
                  "rgba" : [255, 255, 255, 255]
              },
              "font" : "14pt  Microsoft YaHei",
              "horizontalOrigin" : "CENTER",
              "pixelOffset" : {
                  "cartesian2" : [0, -15]
              },
              "outlineColor" : {
                  "rgba":[0, 0, 0, 255]
              },
              "outlineWidth" : 1,
              "style" : "FILL_AND_OUTLINE",
              "text" : "中国人民政协南昌市委会"
          },
          "polyline" : {
              "positions" : {
                  "cartographicDegrees" : [
                      115.85186517431087,28.68693493045129,56.11566797605205,
                      115.85186517431087,28.68693493045129,80
                  ]
              },
              "material" : {
                  "solidColor" : {
                      "color" : {
                          "rgba" : [255, 165, 0, 255]
                      }
                  }
              },
              "width" : 2,
          },
          "position" : {
              "cartographicDegrees" : [
                      115.85186517431087,28.68693493045129,80
              ]
          }
      },
      {
          "id" : "biaozhu05",
          "name" : "南昌市政府",
          "description" : "",
          "billboard" : {
              "image" : require('@/assets/icon/shop1.png'),
              "scale" : 0.7
          },
          "label" : {
              "fillColor" : {
                  "rgba" : [255, 255, 255, 255]
              },
              "font" : "14pt  Microsoft YaHei",
              "horizontalOrigin" : "CENTER",
              "pixelOffset" : {
                  "cartesian2" : [0, -35]
              },
              "outlineColor" : {
                  "rgba":[0, 0, 0, 255]
              },
              "outlineWidth" : 2,
              "style" : "FILL_AND_OUTLINE",
              "text" : "南昌市政府"
          },
          "polyline" : {
              "positions" : {
                  "cartographicDegrees" : [
                      115.85328959768015,28.686248039464076,42.39162354935073,
                      115.85328959768015,28.686248039464076,90
                  ]
              },
              "material" : {
                  "solidColor" : {
                      "color" : {
                          "rgba" : [255, 165, 0, 255]
                      }
                  }
              },
              "width" : 2,
          },
          "position" : {
              "cartographicDegrees" : [
                      115.85328959768015,28.686248039464076,90
              ]
          }
      },
      {
          "id" : "biaozhu06",
          "name" : "泰耐克国际大酒店",
          "description" : "",
          "billboard" : {
              "image" : require('@/assets/icon/point.png'),
              "scale" : 0.05
          },
          "label" : {
              "fillColor" : {
                  "rgba" : [255, 255, 255, 255]
              },
              "font" : "14pt  Microsoft YaHei",
              "horizontalOrigin" : "CENTER",
              "pixelOffset" : {
                  "cartesian2" : [0, -15]
              },
              "outlineColor" : {
                  "rgba":[0, 0, 0, 255]
              },
              "outlineWidth" : 1,
              "style" : "FILL_AND_OUTLINE",
              "text" : "泰耐克国际大酒店"
          },
          "polyline" : {
              "positions" : {
                  "cartographicDegrees" : [
                      115.85474249011095,28.685490667008466,68.25258196257808,
                      115.85474249011095,28.685490667008466,100
                  ]
              },
              "material" : {
                  "solidColor" : {
                      "color" : {
                          "rgba" : [255, 165, 0, 255]
                      }
                  }
              },
              "width" : 2,
          },
          "position" : {
              "cartographicDegrees" : [
                      115.85474249011095,28.685490667008466,100
              ]
          }
      },
      {
          "id" : "biaozhu07",
          "name" : "世纪广场",
          "description" : "",
          "billboard" : {
              // "image" : "src/img/billboard/mountain.png",
              "image": require('@/assets/icon/mountain.png'),
              "scale" : 0.12
          },
          "label" : {
              "fillColor" : {
                  "rgba" : [255, 255, 255, 255]
              },
              "font" : "14pt  Microsoft YaHei",
              "horizontalOrigin" : "CENTER",
              "pixelOffset" : {
                  "cartesian2" : [0, -25]
              },
              "outlineColor" : {
                  "rgba":[0, 0, 0, 255]
              },
              "outlineWidth" : 1,
              "style" : "FILL_AND_OUTLINE",
              "text" : "世纪广场"
          },
          "position" : {
              "cartographicDegrees" : [
                      115.85360872858605,28.687708801105327,23.5
              ]
          }
      },
      {
          "id" : "VPolygon1",
          "name" : "南昌市政府",
          "description" : "<p>南昌市人民政府是南昌市人民代表大会的执行机关，是本市国家行政机关。对本市人民代表大会和上一级国家行政机关负责。分别由市长、副市长和秘书长、局长、委员会主任等组成。</p>",
          "polygon" : {
              "positions" : {
                  "cartographicDegrees" : [
                      115.85374511613843,28.685705817548456,22.137725476612964,
                      115.85406765622025,28.68636090977089,21.38086290851169,
                      115.85288667563717,28.686801140756845,22.620388329738173,
                      115.85253116575426,28.686105993433056,23.276901210616835
                  ]
              },
              "material" : {
                  "solidColor" : {
                      "color" : {
                          "rgba" : [255, 100, 0, 100]
                      }
                  }
              },
              "extrudedHeight" : 60.0,
              "outline" : true,
              "outlineColor" : {
                  "rgba" : [255, 100, 0, 255]
              },
              "closeTop" : true,
              "closeBottom" : false
          }
      },
      {
          "id" : "VPolygon2",
          "name" : "南昌市委",
          "description" : "<p>政府机关</p>",
          "polygon" : {
              "positions" : {
                  "cartographicDegrees" : [
                      115.85504856858276,28.688210174838442,20.672650393028963,
                      115.85543610785153,28.689000205863074,20.529946554094582,
                      115.85418680111174,28.68950907869647,21.706720772111044,
                      115.8538469918395,28.688877572899056,21.852200615129366
                  ]
              },
              "material" : {
                  "solidColor" : {
                      "color" : {
                          "rgba" : [255, 0, 0, 100]
                      }
                  }
              },
              "extrudedHeight" : 70.0,
              "outline" : true,
              "outlineColor" : {
                  "rgba" : [255, 0, 0, 255]
              },
              "closeTop" : true,
              "closeBottom" : false
          }
      },
      {
          "id" : "wall1",
          "wall" : {
              "positions" : {
                  "cartographicDegrees" : [
                      115.85527383214728,28.687624234911752,30,
                      115.85595447693204,28.688928047040104,30,
                      115.85725342154257,28.68842111471802,30,
                      115.85659471999121,28.687066114627882,30,
                      115.85527383214728,28.687624234911752,30
                  ]
              },
              "material" : {
                  "solidColor" : {
                      "color" : {
                          "rgba" : [3, 101, 197, 150]
                      }
                  }
              },
              "outline" : true,
              "outlineColor" : {
                  "rgba" : [3, 101, 197, 255]
              },
          }
      },
      {
          "id" : "wall2",
          "wall" : {
              "positions" : {
                  "cartographicDegrees" : [
                      115.85438414794132,28.686833572491043,30,
                      115.85628458689618,28.68605708349263,30,
                      115.8556163321094,28.684486982825607,30,
                      115.85353493037087,28.685154138697637,30,
                      115.85438414794132,28.686833572491043,30
                  ]
              },
              "material" : {
                  "solidColor" : {
                      "color" : {
                          "rgba" : [3, 101, 197, 150]
                      }
                  }
              },
              "outline" : true,
              "outlineColor" : {
                  "rgba" : [3, 101, 197, 255]
              },
          }
      },
      {
          "id" : "wall3",
          "wall" : {
              "positions" : {
                  "cartographicDegrees" : [
                      115.8504529498821,28.686377428538957,50,
                      115.85568078344699,28.684210479248296,50,
                      115.85666592209597,28.686454907852962,50,
                      115.8583904088278,28.688454003318817,50,
                      115.85269254531967,28.690653201661043,50,
                      115.8504529498821,28.686377428538957,50
                  ]
              },
              "material" : {
                  "solidColor" : {
                      "color" : {
                          "rgba" : [255, 255, 255, 180]
                      }
                  }
              },
              "outline" : true,
              "outlineColor" : {
                  "rgba" : [255, 255, 255, 255]
              },
          }
      },
      // {
      //     "id" : "aircraft model",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85425190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },




      // {
      //     "id" : "aircraft model1",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85325190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model2",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.853325190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model3",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85345190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model4",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85355190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model5",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85436190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model6",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85375190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model7",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85385190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model8",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85395190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model9",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85405190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model10",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85415190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model11",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85425190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model21",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85435190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model22",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85445190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model12",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85455190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model13",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85465190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model14",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85475190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model15",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85485190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model16",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85495190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model17",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85505190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model18",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85515190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model19",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85525190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },
      // {
      //     "id" : "aircraft model20",
      //     "name" : "Cesium Air",
      //     "position" : {
      //         "cartographicDegrees" : [115.85535190649784,28.688041262376074,97.862242773842393]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         // "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 2.0,
      //         "minimumPixelSize": 128
      //     }
      // },







      // {
      //     "id" : "Vehicle model",
      //     "name" : "Cesium road",
      //     "position" : {
      //         "cartographicDegrees" : [115.85424190649784,28.688141262376074,21.862242773842393]
      //     },
      //     "model": {
      //         // "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
      //         "gltf": "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMilkTruck/CesiumMilkTruck.glb",
      //         "scale" : 1.0,
      //         "minimumPixelSize":100,
      //         "maximumScale":1.0
      //     }
      // },

      // {
      //     "id" : "model",
      //     "position" : {
      //         "cartographicDegrees" : [115.85425190649784,28.688041262376074,21.202242773842393]
      //     },
      //     "viewFrom" : {
      //         "cartesian" : [4.3, 0.1, 2.6]
      //     },
      //     "model": {
      //         "gltf" : "https://cesiumjs.org/Cesium/Apps/SampleData/models/CesiumMan/Cesium_Man.glb",
      //         "scale" : 1.0,
      //         "runAnimations": false,
      //         "nodeTransformations": {
      //             "Skeleton_arm_joint_L__3_": {
      //                 "rotation": {
      //                     "epoch": "2018-09-01T00:00:00Z",
      //                     "unitQuaternion":[
      //                         0,-0.7762877147481148, -0.16428915803853994, 0.3706585477262082, 0.482699386243276,
      //                         10,-0.6840422631464792, -0.40211904424847345, 0.05175867757399086, 0.6063888981321548,
      //                         20,-0.7762877147481148, -0.16428915803853994, 0.3706585477262082, 0.482699386243276
      //                     ]
      //                 }
      //             },
      //             "Skeleton_arm_joint_R__2_": {
      //                 "rotation": {
      //                     "unitQuaternion": [
      //                         0.31933321618140015, 0.5055578277509731, -0.5903490075872426, 0.5421490838170975
      //                     ]
      //                 }
      //             }
      //         }
      //     }
      // },


      // {
      //     "id" : "gltf1",
      //     "name" : "人工模型",
      //     "position" : {
      //         "cartographicDegrees" : [115.85488160445384,28.685241262376074,17.862242773842393]
      //     },
      //     "model": {
      //         // "gltf" : require('@/assets/QSGC.gltf'),
      //         // "gltf" : "static/QSGC.gltf",
      //         "gltf": "http://192.168.1.169/Cesium-lab/gltf1/QSGC.gltf",
      //         "scale" : 1.0,
      //         "minimumPixelSize": 128
      //     }
      // }
		],
    // czmlStream: [
    //   [
    //     {
    //       "id":"document",
    //       "version":"1.0"
    //     },

    //     {
    //       "id":"Vehicle",
    //       "availability":"2012-08-04T16:00:00Z/2012-08-04T17:04:54.9962195740191Z",
    //       "label":{
    //         "fillColor":[
    //           {
    //             "interval":"2012-08-04T16:00:00Z/2012-08-04T18:00:00Z",
    //             "rgba":[
    //               255,255,0,255
    //             ]
    //           }
    //         ],
    //         "font":"bold 10pt Segoe UI Semibold",
    //         "horizontalOrigin":"CENTER",
    //         "outlineColor":{
    //           "rgba":[
    //             0,0,0,255
    //           ]
    //         },
    //         "pixelOffset":{
    //           "cartesian2":[
    //             0.0,20.0
    //           ]
    //         },
    //         "scale":1.0,
    //         "show":[
    //           {
    //             "interval":"2012-08-04T16:00:00Z/2012-08-04T18:00:00Z",
    //             "boolean":true
    //           }
    //         ],
    //         "style":"FILL",
    //         "text":"Test Vehicle",
    //         "verticalOrigin":"CENTER"
    //       },
    //       "model":{
    //         // "gltf":"models/CesiumMilkTruck/CesiumMilkTruck.glb",
    //         "gltf": "http://192.168.1.169/Cesium-lab/gltf1/QSGC.gltf",
    //         "minimumPixelSize":100,
    //         "maximumScale":50
    //       },
    //       "orientation" : {
    //         "velocityReference": "#position"
    //       },
    //       "viewFrom": {
    //         "cartesian": [ -2080, -1715, 779 ]
    //       },
    //       "properties" : {
    //           "fuel_remaining" : {
    //               "epoch":"2012-08-04T16:00:00Z",
    //               "number": [
    //                   0, 22.5,
    //                   1500, 21.2
    //               ]
    //           }
    //       },
    //       "path":{
    //         "material":{
    //             "solidColor":{
    //               "color":{
    //                   "interval":"2012-08-04T16:00:00Z/2012-08-04T18:00:00Z",
    //                   "rgba":[
    //                     255,255,0,255
    //                   ]
    //                 }
    //               }
    //         },
    //         "width":[
    //           {
    //             "interval":"2012-08-04T16:00:00Z/2012-08-04T18:00:00Z",
    //             "number":5.0
    //           }
    //         ],
    //         "show":[
    //           {
    //             "interval":"2012-08-04T16:00:00Z/2012-08-04T18:00:00Z",
    //             "boolean":true
    //           }
    //         ]
    //       },
    //       "position":{
    //         "interpolationAlgorithm":"LAGRANGE",
    //         "interpolationDegree":1,
    //         "epoch":"2012-08-04T16:00:00Z",
    //         "cartesian":[
    //           0.0,-2379754.6637012,-4665332.88013588,3628133.68924173,
    //           10.0,-2379510.08905552,-4665419.64840452,3628182.20006795,
    //           20.0,-2379568.4769522,-4665555.3441867,3627970.83323261,
    //           30.0,-2379638.93786855,-4665691.63561896,3627750.82085873,
    //           40.0,-2379709.29834665,-4665827.9679646,3627530.80187124,
    //           50.0,-2379837.28064915,-4665847.7494347,3627422.12874017,
    //           60.0,-2379624.98289073,-4665907.50853722,3627484.1191848,
    //           70.0,-2379386.12743523,-4666029.54174431,3627483.83297459,
    //           80.0,-2379147.26777171,-4666151.56669944,3627483.5403492,
    //           90.0,-2378908.40390057,-4666273.58340244,3627483.24130864,
    //           1e2,-2378663.69301645,-4666379.62408751,3627507.14485116,
    //           110.0,-2378416.29648478,-4666444.93145547,3627584.82610021,
    //           120.0,-2378184.75115833,-4666458.05260387,3627718.84628509,
    //           130.0,-2377958.22637221,-4666461.11592729,3627862.42864636,
    //           140.0,-2377733.79758374,-4666460.508441,3628009.31669747,
    //           150.0,-2377509.36460154,-4666459.89268533,3628156.19830638,
    //           160.0,-2377284.92742603,-4666459.26866028,3628303.07347284,
    //           170.0,-2377060.48605759,-4666458.63636585,3628449.9421966,
    //           180.0,-2376835.38472681,-4666459.12413084,3628595.78980713,
    //           190.0,-2376609.71084875,-4666460.58154837,3628740.75156098,
    //           2e2,-2376384.03277903,-4666462.03069678,3628885.70687201,
    //           210.0,-2376158.35051806,-4666463.47157605,3629030.65573998,
    //           220.0,-2375928.48736859,-4666473.69575712,3629167.08552075,
    //           230.0,-2375685.23921682,-4666516.66377513,3629270.3788586,
    //           240.0,-2375437.34307768,-4666580.50029931,3629350.0215939,
    //           250.0,-2375189.01133306,-4666646.99320452,3629426.53515423,
    //           260.0,-2374940.52675783,-4666719.29042452,3629495.71527129,
    //           270.0,-2374695.15633549,-4666818.94185605,3629527.91579302,
    //           280.0,-2374469.42323533,-4666959.02687352,3629495.69349509,
    //           290.0,-2374249.06659405,-4667105.51477438,3629451.77975513,
    //           3e2,-2374028.70574724,-4667251.99442379,3629407.85959417,
    //           310.0,-2373808.3406953,-4667398.46582147,3629363.9330123,
    //           320.0,-2373585.10773309,-4667542.05948567,3629325.52597676,
    //           330.0,-2373360.83645524,-4667684.60869937,3629289.10800226,
    //           340.0,-2373136.5609746,-4667827.1496603,3629252.68360778,
    //           350.0,-2372912.28129155,-4667969.68236819,3629216.25279339,
    //           360.0,-2372687.9974065,-4668112.20682281,3629179.81555915,
    //           370.0,-2372463.70931983,-4668254.72302389,3629143.37190511,
    //           380.0,-2372239.41703195,-4668397.2309712,3629106.92183136,
    //           390.0,-2372018.7615611,-4668543.12509124,3629063.76398058,
    //           4e2,-2371803.72586004,-4668694.25404103,3629010.24868951,
    //           410.0,-2371587.17705087,-4668844.01756398,3628959.44085712,
    //           420.0,-2371365.33472237,-4668989.01539779,3628918.13984128,
    //           430.0,-2371134.7547923,-4669122.83460485,3628896.77687771,
    //           440.0,-2370898.14635373,-4669248.94021679,3628889.16522147,
    //           450.0,-2370660.31892949,-4669372.89697404,3628885.07134974,
    //           460.0,-2370422.47459187,-4669496.82305927,3628881.00796265,
    //           470.0,-2370184.62606153,-4669620.7408867,3628876.93815788,
    //           480.0,-2369946.77333888,-4669744.65045611,3628872.86193545,
    //           490.0,-2369708.91642433,-4669868.55176729,3628868.77929537,
    //           5e2,-2369471.05531832,-4669992.44482001,3628864.69023764,
    //           510.0,-2369233.19002126,-4670116.32961405,3628860.59476226,
    //           520.0,-2368989.65950726,-4670225.94237244,3628878.39787596,
    //           530.0,-2368742.64810033,-4670324.93393451,3628912.01606989,
    //           540.0,-2368494.95906007,-4670419.65546435,3628951.51257903,
    //           550.0,-2368248.2848424,-4670519.53079746,3628983.74302284,
    //           560.0,-2368001.37437725,-4670618.8319301,3629016.84097985,
    //           570.0,-2367753.95809484,-4670715.82368808,3629053.19940679,
    //           580.0,-2367506.53762994,-4670812.80718267,3629089.55141416,
    //           590.0,-2367259.11298298,-4670909.78241366,3629125.89700192,
    //           6e2,-2367011.6841544,-4671006.74938092,3629162.23617,
    //           610.0,-2366764.25114462,-4671103.70808425,3629198.56891833,
    //           620.0,-2366516.81395411,-4671200.6585235,3629234.89524684,
    //           630.0,-2366269.37258329,-4671297.60069848,3629271.21515549,
    //           640.0,-2366021.9270326,-4671394.53460904,3629307.52864419,
    //           650.0,-2365774.47730247,-4671491.460255,3629343.8357129,
    //           660.0,-2365527.02339333,-4671588.37763618,3629380.13636155,
    //           670.0,-2365279.56530564,-4671685.28675242,3629416.43059006,
    //           680.0,-2365032.10303983,-4671782.18760355,3629452.71839837,
    //           690.0,-2364784.63659633,-4671879.0801894,3629488.99978644,
    //           7e2,-2364537.16597558,-4671975.96450979,3629525.27475418,
    //           710.0,-2364289.69117801,-4672072.84056456,3629561.54330154,
    //           720.0,-2364042.21220407,-4672169.70835353,3629597.80542845,
    //           730.0,-2363794.72905419,-4672266.56787654,3629634.06113485,
    //           740.0,-2363547.2417288,-4672363.41913342,3629670.31042068,
    //           750.0,-2363299.75022835,-4672460.26212398,3629706.55328587,
    //           760.0,-2363052.25455328,-4672557.09684808,3629742.78973036,
    //           770.0,-2362805.96213832,-4672658.44235501,3629772.46055,
    //           780.0,-2362566.28756432,-4672777.84646024,3629774.74120741,
    //           790.0,-2362330.01543718,-4672904.47715606,3629765.56158533,
    //           8e2,-2362093.73913086,-4673031.09958839,3629756.37554393,
    //           810.0,-2361857.4586458,-4673157.71375702,3629747.18308323,
    //           820.0,-2361621.17398239,-4673284.31966172,3629737.98420324,
    //           830.0,-2361379.13396171,-4673398.62592987,3629748.21496888,
    //           840.0,-2361130.58722369,-4673488.59963461,3629793.74986512,
    //           850.0,-2360881.58098042,-4673573.14384665,3629846.50583809,
    //           860.0,-2360632.51954154,-4673657.07225834,3629900.06533886,
    //           870.0,-2360383.45393477,-4673740.99239963,3629953.61841672,
    //           880.0,-2360134.38416057,-4673824.90427038,3630007.16507155,
    //           890.0,-2359885.31021938,-4673908.80787044,3630060.70530326,
    //           9e2,-2359636.23211162,-4673992.70319966,3630114.23911177,
    //           910.0,-2359387.14983775,-4674076.5902579,3630167.76649697,
    //           920.0,-2359138.06339821,-4674160.469045,3630221.28745878,
    //           930.0,-2358889.14548278,-4674246.80164025,3630271.54165003,
    //           940.0,-2358640.17887385,-4674332.39488805,3630322.75317441,
    //           950.0,-2358391.03374684,-4674415.32432296,3630377.46713032,
    //           960.0,-2358141.88445605,-4674498.24548602,3630432.17466229,
    //           970.0,-2357892.7310019,-4674581.15837706,3630486.87577026,
    //           980.0,-2357643.59031994,-4674664.39449658,3630541.13554932,
    //           990.0,-2357394.48770584,-4674748.44899573,3630594.30439711,
    //           1e3,-2357145.38092955,-4674832.4952226,3630647.46682079,
    //           1010.0,-2356896.26999152,-4674916.53317705,3630700.62282028,
    //           1020.0,-2356647.15489217,-4675000.56285892,3630753.77239547,
    //           1030.0,-2356398.03563196,-4675084.58426807,3630806.91554629,
    //           1040.0,-2356148.91221132,-4675168.59740435,3630860.05227262,
    //           1050.0,-2355899.78463069,-4675252.60226762,3630913.18257437,
    //           1060.0,-2355650.65289051,-4675336.59885772,3630966.30645147,
    //           1070.0,-2355401.51699122,-4675420.58717452,3631019.42390381,
    //           1080.0,-2355152.37693328,-4675504.56721785,3631072.5349313,
    //           1090.0,-2354903.2327171,-4675588.53898758,3631125.63953384,
    //           1.1e3,-2354654.08434313,-4675672.50248355,3631178.73771134,
    //           1110.0,-2354404.86337217,-4675754.50046618,3631234.37690825,
    //           1120.0,-2354155.84214723,-4675830.29554952,3631297.80148619,
    //           1130.0,-2353909.99308372,-4675880.61174319,3631391.75187422,
    //           1140.0,-2353667.55938687,-4675917.7532863,3631500.33400567,
    //           1150.0,-2353425.14548842,-4675954.80919402,3631608.99321685,
    //           1160.0,-2353182.7274392,-4675991.85682064,3631717.64599126,
    //           1170.0,-2352940.30523964,-4676028.89616608,3631826.29232871,
    //           1180.0,-2352697.87889015,-4676065.92723028,3631934.93222899,
    //           1190.0,-2352455.44839119,-4676102.95001317,3632043.56569193,
    //           1.2e3,-2352213.01374317,-4676139.9645147,3632152.19271733,
    //           1210.0,-2351970.57494653,-4676176.97073479,3632260.81330501,
    //           1220.0,-2351728.13200169,-4676213.96867339,3632369.42745476,
    //           1230.0,-2351485.68490907,-4676250.95833043,3632478.03516641,
    //           1240.0,-2351243.23366913,-4676287.93970586,3632586.63643975,
    //           1250.0,-2351000.77828228,-4676324.91279958,3632695.2312746,
    //           1260.0,-2350758.31874895,-4676361.87761156,3632803.81967077,
    //           1270.0,-2350515.85506957,-4676398.83414172,3632912.40162807,
    //           1280.0,-2350273.38724458,-4676435.78239001,3633020.9771463,
    //           1290.0,-2350029.47875804,-4676477.3914753,3633124.49944636,
    //           1.3e3,-2349785.42349382,-4676519.45587927,3633227.51421022,
    //           1310.0,-2349541.36408501,-4676561.51200187,3633330.52253589,
    //           1320.0,-2349297.30053206,-4676603.55984302,3633433.52442318,
    //           1330.0,-2349053.2328354,-4676645.59940266,3633536.51987191,
    //           1340.0,-2348809.16099546,-4676687.63068071,3633639.50888189,
    //           1350.0,-2348565.08501267,-4676729.65367709,3633742.49145297,
    //           1360.0,-2348321.00488746,-4676771.66839174,3633845.46758493,
    //           1370.0,-2348076.92062027,-4676813.67482458,3633948.43727762,
    //           1380.0,-2347832.83221153,-4676855.67297554,3634051.40053084,
    //           1390.0,-2347588.73966167,-4676897.66284454,3634154.35734442,
    //           1.4e3,-2347344.64297113,-4676939.64443151,3634257.30771818,
    //           1410.0,-2347101.04731466,-4676979.96034855,3634362.04616856,
    //           1420.0,-2346858.26575513,-4677017.5834931,3634469.6847769,
    //           1430.0,-2346614.99348312,-4677056.89461847,3634575.46081166,
    //           1440.0,-2346369.55744615,-4677103.7262244,3634672.99207759,
    //           1450.0,-2346124.8248997,-4677147.9423086,3634773.39569376,
    //           1460.0,-2345880.74403986,-4677189.73374292,3634876.46090671,
    //           1470.0,-2345636.65904236,-4677231.51689469,3634979.51967852,
    //           1480.0,-2345392.56990766,-4677273.29176384,3635082.57200902,
    //           1490.0,-2345148.47663614,-4677315.05835029,3635185.61789803,
    //           1.5e3,-2344904.37922829,-4677356.81665397,3635288.65734536
    //         ]
    //       }
    //     }
    //   ],

    //   [
    //     {
    //       "id":"document",
    //       "version":"1.0"
    //     },
    //     {
    //       "id":"Vehicle",
    //       "properties" : {
    //           "fuel_remaining" : {
    //               "epoch":"2012-08-04T16:00:00Z",
    //               "number": [
    //                   3000, 19.9
    //               ]
    //           }
    //       },
    //       "position":{
    //         "interpolationAlgorithm":"LAGRANGE",
    //         "interpolationDegree":1,
    //         "epoch":"2018-08-04T16:00:00Z",
    //         "cartesian":[
    //           1510.0,-2344660.2776845,-4677398.56667482,3635391.69035084,
    //           1520.0,-2344416.17200522,-4677440.30841274,3635494.71691428,
    //           1530.0,-2344172.06219089,-4677482.04186768,3635597.7370355,
    //           1540.0,-2343927.94824192,-4677523.76703957,3635700.75071434,
    //           1550.0,-2343683.83015876,-4677565.48392832,3635803.75795058,
    //           1560.0,-2343439.70794184,-4677607.19253388,3635906.75874406,
    //           1570.0,-2343195.58159159,-4677648.89285615,3636009.75309461,
    //           1580.0,-2342951.45110844,-4677690.58489508,3636112.74100204,
    //           1590.0,-2342707.31649283,-4677732.2686506,3636215.72246616,
    //           1.6e3,-2342463.17774519,-4677773.94412263,3636318.6974868,
    //           1610.0,-2342219.03486595,-4677815.61131108,3636421.66606378,
    //           1620.0,-2341974.88785554,-4677857.2702159,3636524.6281969,
    //           1630.0,-2341730.7367144,-4677898.92083702,3636627.583886,
    //           1640.0,-2341486.58144295,-4677940.56317435,3636730.5331309,
    //           1650.0,-2341242.42204163,-4677982.19722784,3636833.4759314,
    //           1660.0,-2340998.25851088,-4678023.8229974,3636936.41228734,
    //           1670.0,-2340754.09085112,-4678065.44048297,3637039.34219853,
    //           1680.0,-2340509.91906279,-4678107.04968447,3637142.26566479,
    //           1690.0,-2340265.74314632,-4678148.65060182,3637245.18268593,
    //           1.7e3,-2340021.56310214,-4678190.24323497,3637348.09326179,
    //           1710.0,-2339777.37893069,-4678231.82758383,3637450.99739218,
    //           1720.0,-2339533.1906324,-4678273.40364834,3637553.8950769,
    //           1730.0,-2339288.99820769,-4678314.97142841,3637656.7863158,
    //           1740.0,-2339044.80165702,-4678356.530924,3637759.67110868,
    //           1750.0,-2338800.60098079,-4678398.082135,3637862.54945536,
    //           1760.0,-2338554.70615885,-4678446.63979812,3637957.53985359,
    //           1770.0,-2338307.34044549,-4678501.27725608,3638045.68346556,
    //           1780.0,-2338059.970607,-4678555.90643107,3638133.82063425,
    //           1790.0,-2337812.5966438,-4678610.527323,3638221.9513595,
    //           1.8e3,-2337565.21855632,-4678665.13993177,3638310.07564116,
    //           1810.0,-2337317.836345,-4678719.74425728,3638398.19347906,
    //           1820.0,-2337070.45001029,-4678774.34029945,3638486.30487305,
    //           1830.0,-2336823.05955262,-4678828.92805817,3638574.40982299,
    //           1840.0,-2336575.66497242,-4678883.50753334,3638662.50832871,
    //           1850.0,-2336327.1545835,-4678945.50581105,3638741.82308353,
    //           1860.0,-2336079.08419082,-4679004.31007705,3638824.91716907,
    //           1870.0,-2335832.84388937,-4679053.5438294,3638919.0484984,
    //           1880.0,-2335586.22540763,-4679104.36395041,3639011.37515412,
    //           1890.0,-2335339.10405755,-4679157.40812923,3639101.16216049,
    //           1.9e3,-2335091.77487812,-4679211.48259624,3639189.74611699,
    //           1910.0,-2334844.32516034,-4679266.14231747,3639277.63977539,
    //           1920.0,-2334596.87132354,-4679320.79375442,3639365.52698836,
    //           1930.0,-2334349.41336814,-4679375.436907,3639453.40775576,
    //           1940.0,-2334101.95129458,-4679430.07177509,3639541.28207743,
    //           1950.0,-2333854.48510331,-4679484.69835863,3639629.14995324,
    //           1960.0,-2333607.01479475,-4679539.31665749,3639717.011383,
    //           1970.0,-2333359.54036938,-4679593.9266716,3639804.86636658,
    //           1980.0,-2333112.06182757,-4679648.52840084,3639892.71490381,
    //           1990.0,-2332864.57916982,-4679703.12184515,3639980.55699455,
    //           2e3,-2332617.09239653,-4679757.70700441,3640068.39263865,
    //           2010.0,-2332369.60150815,-4679812.28387853,3640156.22183593,
    //           2020.0,-2332122.10650513,-4679866.85246742,3640244.04458626,
    //           2030.0,-2331874.6073879,-4679921.41277097,3640331.86088948,
    //           2040.0,-2331627.10415689,-4679975.96478911,3640419.67074542,
    //           2050.0,-2331379.59681254,-4680030.50852172,3640507.47415395,
    //           2060.0,-2331132.08535529,-4680085.04396871,3640595.27111491,
    //           2070.0,-2330884.56978558,-4680139.57113,3640683.06162813,
    //           2080.0,-2330637.7285141,-4680190.9395453,3640774.43710409,
    //           2090.0,-2330396.40663506,-4680225.151778,3640884.18994119,
    //           2.1e3,-2330163.10529565,-4680238.35673454,3641015.64723137,
    //           2110.0,-2329932.54342047,-4680245.95830447,3641152.4979079,
    //           2120.0,-2329701.97743661,-4680253.55158212,3641289.34212236,
    //           2130.0,-2329471.40734447,-4680261.13656747,3641426.1798745,
    //           2140.0,-2329240.83314447,-4680268.71326052,3641563.01116407,
    //           2150.0,-2329010.25483703,-4680276.28166125,3641699.83599085,
    //           2160.0,-2328779.67242253,-4680283.84176964,3641836.65435457,
    //           2170.0,-2328549.08590139,-4680291.3935857,3641973.46625501,
    //           2180.0,-2328318.49527404,-4680298.9371094,3642110.27169193,
    //           2190.0,-2328087.90054086,-4680306.47234074,3642247.07066509,
    //           2.2e3,-2327857.30170227,-4680313.99927971,3642383.86317423,
    //           2210.0,-2327626.69875869,-4680321.51792628,3642520.64921913,
    //           2220.0,-2327396.09171053,-4680329.02828045,3642657.42879954,
    //           2230.0,-2327165.48055818,-4680336.53034222,3642794.20191522,
    //           2240.0,-2326934.86530206,-4680344.02411158,3642930.96856595,
    //           2250.0,-2326704.24594258,-4680351.50958849,3643067.72875145,
    //           2260.0,-2326473.62248015,-4680358.98677296,3643204.48247151,
    //           2270.0,-2326242.99491518,-4680366.45566498,3643341.22972587,
    //           2280.0,-2326012.36324808,-4680373.91626453,3643477.97051431,
    //           2290.0,-2325781.72747925,-4680381.36857161,3643614.70483658,
    //           2.3e3,-2325551.08760911,-4680388.8125862,3643751.43269243,
    //           2310.0,-2325320.44363806,-4680396.24830829,3643888.15408163,
    //           2320.0,-2325089.79556653,-4680403.67573787,3644024.86900394,
    //           2330.0,-2324859.14339491,-4680411.09487493,3644161.57745912,
    //           2340.0,-2324628.48712361,-4680418.50571946,3644298.27944692,
    //           2350.0,-2324397.82675305,-4680425.90827145,3644434.97496711,
    //           2360.0,-2324167.16228363,-4680433.30253088,3644571.66401943,
    //           2370.0,-2323936.49371575,-4680440.68849774,3644708.34660367,
    //           2380.0,-2323705.82104985,-4680448.06617203,3644845.02271957,
    //           2390.0,-2323469.56457492,-4680467.5014928,3644969.83533712,
    //           2.4e3,-2323221.0622471,-4680536.92026793,3645038.62868541,
    //           2410.0,-2322977.80807152,-4680647.84474283,3645051.13992706,
    //           2420.0,-2322736.38267079,-4680764.64879631,3645054.97445125,
    //           2430.0,-2322494.9531628,-4680881.44457147,3645058.80252916,
    //           2440.0,-2322246.73779559,-4680970.18567741,3645102.6916578,
    //           2450.0,-2322002.53536924,-4681011.67497706,3645204.29544116,
    //           2460.0,-2321760.17882828,-4681045.91276755,3645313.96140727,
    //           2470.0,-2321513.45780318,-4681097.83227119,3645403.81543108,
    //           2480.0,-2321264.12028187,-4681176.5278287,3645461.15182806,
    //           2490.0,-2321016.67956395,-4681275.07588805,3645491.94679701,
    //           2.5e3,-2320769.58665668,-4681375.58594799,3645519.99961511,
    //           2510.0,-2320522.489649,-4681476.08772649,3645548.04598517,
    //           2520.0,-2320275.38854134,-4681576.5812234,3645576.08590716,
    //           2530.0,-2320027.79132447,-4681674.92626117,3645607.16040563,
    //           2540.0,-2319780.10642819,-4681772.89945148,3645638.74505341,
    //           2550.0,-2319532.41743371,-4681870.86435933,3645670.32325269,
    //           2560.0,-2319284.72434146,-4681968.82098454,3645701.89500342,
    //           2570.0,-2319037.02715189,-4682066.76932694,3645733.46030553,
    //           2580.0,-2318789.32586542,-4682164.70938637,3645765.01915898,
    //           2590.0,-2318542.12778997,-4682264.83612099,3645793.45100625,
    //           2.6e3,-2318295.04606153,-4682365.47569326,3645821.1355313,
    //           2610.0,-2318047.960237,-4682466.10698239,3645848.81360781,
    //           2620.0,-2317814.2136072,-4682593.27748455,3645834.19098143,
    //           2630.0,-2317595.23970305,-4682740.17783799,3645785.0493345,
    //           2640.0,-2317367.51895524,-4682877.20966947,3645754.00173306,
    //           2650.0,-2317125.45200646,-4682991.24847734,3645761.32874791,
    //           2660.0,-2316877.25477931,-4683085.09280115,3645798.27256564,
    //           2670.0,-2316627.76750724,-4683171.42599527,3645845.59470414,
    //           2680.0,-2316378.41358519,-4683244.04371304,3645910.31301292,
    //           2690.0,-2316132.23045195,-4683290.83587254,3646005.96208532,
    //           2.7e3,-2315886.04323336,-4683337.61973972,3646101.60469867,
    //           2710.0,-2315639.85192986,-4683384.3953145,3646197.24085278,
    //           2720.0,-2315393.65654188,-4683431.1625968,3646292.8705475,
    //           2730.0,-2315147.45706986,-4683477.92158654,3646388.49378265,
    //           2740.0,-2314901.25351424,-4683524.67228364,3646484.11055807,
    //           2750.0,-2314655.04587545,-4683571.41468801,3646579.72087358,
    //           2760.0,-2314408.83415392,-4683618.14879957,3646675.32472902,
    //           2770.0,-2314160.70351457,-4683675.04338742,3646759.15642247,
    //           2780.0,-2313911.58484161,-4683762.87653752,3646804.12173857,
    //           2790.0,-2313665.46479966,-4683867.13714076,3646826.2202591,
    //           2.8e3,-2313419.44574948,-4683971.81359651,3646847.70500867,
    //           2810.0,-2313173.422611,-4684076.48176683,3646869.18330826,
    //           2820.0,-2312927.39538468,-4684181.14165156,3646890.65515782,
    //           2830.0,-2312681.36407094,-4684285.79325049,3646912.12055732,
    //           2840.0,-2312435.3286702,-4684390.43656345,3646933.57950672,
    //           2850.0,-2312188.68106177,-4684492.14732495,3646959.14603188,
    //           2860.0,-2311939.2573735,-4684576.69232926,3647008.34294359,
    //           2870.0,-2311690.53184969,-4684637.85664359,3647086.91208669,
    //           2880.0,-2311447.74208361,-4684672.93987918,3647195.00103929,
    //           2890.0,-2311210.79617263,-4684692.62730813,3647319.03447912,
    //           2.9e3,-2310974.46339778,-4684710.81501905,3647444.57574765,
    //           2910.0,-2310738.12654788,-4684728.99443131,3647570.11054652,
    //           2920.0,-2310501.78562334,-4684747.16554491,3647695.63887553,
    //           2930.0,-2310265.44062458,-4684765.3283598,3647821.16073445,
    //           2940.0,-2310029.09155203,-4684783.48287596,3647946.67612307,
    //           2950.0,-2309792.7384061,-4684801.62909336,3648072.18504115,
    //           2960.0,-2309556.38118721,-4684819.76701196,3648197.6874885,
    //           2970.0,-2309320.01989578,-4684837.89663174,3648323.18346488,
    //           2980.0,-2309083.65453223,-4684856.01795267,3648448.67297006,
    //           2990.0,-2308847.28509697,-4684874.13097471,3648574.15600382,
    //           3e3,-2308612.03960687,-4684889.78192809,3648702.05314508
    //         ]
    //       }
    //     }
    //   ],

    //   [
    //     {
    //       "id":"document",
    //       "version":"1.0"
    //     },
    //     {
    //       "id":"Vehicle",
    //       "properties" : {
    //           "fuel_remaining" : {
    //               "epoch":"2018-08-04T16:00:00Z",
    //               "number": [
    //                   4500, 18.6
    //               ]
    //           }
    //       },
    //       "position":{
    //         "interpolationAlgorithm":"LAGRANGE",
    //         "interpolationDegree":1,
    //         "epoch":"2012-08-04T16:00:00Z",
    //         "cartesian":[
    //           3010.0,-2308376.92124893,-4684905.13917681,3648830.22535859,
    //           3020.0,-2308141.79882057,-4684920.48812622,3648958.39109918,
    //           3030.0,-2307906.6723222,-4684935.82877629,3649086.55036665,
    //           3040.0,-2307671.54175424,-4684951.161127,3649214.70316074,
    //           3050.0,-2307436.40711711,-4684966.48517831,3649342.84948124,
    //           3060.0,-2307201.26841123,-4684981.80093021,3649470.98932793,
    //           3070.0,-2306966.87575715,-4684995.59988061,3649600.57521538,
    //           3080.0,-2306740.26452813,-4684994.89962227,3649743.74372413,
    //           3090.0,-2306534.08725296,-4684964.25689728,3649912.24261594,
    //           3.1e3,-2306334.50436505,-4684925.31923873,3650087.15846994,
    //           3110.0,-2306134.91740775,-4684886.37327513,3650262.06783161,
    //           3120.0,-2305935.32638143,-4684847.41900655,3650436.97070063,
    //           3130.0,-2305735.73128644,-4684808.45643306,3650611.86707671,
    //           3140.0,-2305536.13212312,-4684769.48555472,3650786.75695952,
    //           3150.0,-2305336.52889186,-4684730.50637162,3650961.64034877,
    //           3160.0,-2305136.92159298,-4684691.51888382,3651136.51724414,
    //           3170.0,-2304937.31022685,-4684652.5230914,3651311.38764532,
    //           3180.0,-2304737.69479383,-4684613.51899443,3651486.25155201,
    //           3190.0,-2304538.07529427,-4684574.50659297,3651661.1089639,
    //           3.2e3,-2304338.45172854,-4684535.48588711,3651835.95988067,
    //           3210.0,-2304138.82409697,-4684496.45687691,3652010.80430203,
    //           3220.0,-2303939.19239993,-4684457.41956245,3652185.64222766,
    //           3230.0,-2303739.55663778,-4684418.37394379,3652360.47365726,
    //           3240.0,-2303539.91681086,-4684379.32002102,3652535.29859051,
    //           3250.0,-2303340.27291955,-4684340.25779419,3652710.11702711,
    //           3260.0,-2303140.62496419,-4684301.18726339,3652884.92896676,
    //           3270.0,-2302940.97294513,-4684262.10842868,3653059.73440913,
    //           3280.0,-2302741.31686273,-4684223.02129014,3653234.53335393,
    //           3290.0,-2302541.65671735,-4684183.92584784,3653409.32580085,
    //           3.3e3,-2302341.99250935,-4684144.82210185,3653584.11174957,
    //           3310.0,-2302142.32423908,-4684105.71005224,3653758.8911998,
    //           3320.0,-2301942.65190688,-4684066.5896991,3653933.66415121,
    //           3330.0,-2301742.97551314,-4684027.46104248,3654108.43060351,
    //           3340.0,-2301543.29505819,-4683988.32408245,3654283.19055638,
    //           3350.0,-2301343.61054239,-4683949.1788191,3654457.94400952,
    //           3360.0,-2301143.6827542,-4683910.31378064,3654632.47326169,
    //           3370.0,-2300935.59009252,-4683881.78114292,3654798.93579703,
    //           3380.0,-2300718.00641879,-4683866.2483759,3654954.7652541,
    //           3390.0,-2300494.16379595,-4683860.19477673,3655102.42228967,
    //           3.4e3,-2300270.31711639,-4683854.13287765,3655250.07283467,
    //           3410.0,-2300043.34951879,-4683853.58162531,3655392.64057225,
    //           3420.0,-2299798.57046824,-4683898.20991075,3655488.81767963,
    //           3430.0,-2299550.24237985,-4683986.73183877,3655531.32743747,
    //           3440.0,-2299302.19677383,-4684083.86163291,3655562.68543478,
    //           3450.0,-2299054.1471058,-4684180.98314055,3655594.03696606,
    //           3460.0,-2298806.09337623,-4684278.0963615,3655625.38203125,
    //           3470.0,-2298558.03558554,-4684375.2012956,3655656.7206303,
    //           3480.0,-2298309.97373417,-4684472.29794267,3655688.05276314,
    //           3490.0,-2298061.90782256,-4684569.38630254,3655719.37842974,
    //           3.5e3,-2297812.62950649,-4684659.16576897,3655760.74476938,
    //           3510.0,-2297564.67551281,-4684714.88851845,3655844.61445788,
    //           3520.0,-2297325.87128825,-4684739.27586645,3655962.6382433,
    //           3530.0,-2297109.10378606,-4684723.02803401,3656118.60908182,
    //           3540.0,-2296920.05504158,-4684672.53835408,3656300.84320686,
    //           3550.0,-2296752.93245501,-4684599.85791996,3656497.61758286,
    //           3560.0,-2296586.9421969,-4684526.13410832,3656694.99365465,
    //           3570.0,-2296420.94788222,-4684452.40199052,3656892.36321221,
    //           3580.0,-2296254.94951125,-4684378.66156669,3657089.72625519,
    //           3590.0,-2296088.9470843,-4684304.91283696,3657287.08278322,
    //           3.6e3,-2295922.94060166,-4684231.15580147,3657484.43279599,
    //           3610.0,-2295756.93006363,-4684157.39046036,3657681.77629313,
    //           3620.0,-2295590.91547051,-4684083.61681375,3657879.11327429,
    //           3630.0,-2295424.89682259,-4684009.83486178,3658076.44373913,
    //           3640.0,-2295258.87412016,-4683936.04460459,3658273.7676873,
    //           3650.0,-2295092.84736354,-4683862.24604231,3658471.08511845,
    //           3660.0,-2294926.816553,-4683788.43917507,3658668.39603222,
    //           3670.0,-2294760.78168886,-4683714.62400301,3658865.70042829,
    //           3680.0,-2294594.74277139,-4683640.80052626,3659062.99830628,
    //           3690.0,-2294428.69980091,-4683566.96874495,3659260.28966586,
    //           3.7e3,-2294262.65277771,-4683493.12865923,3659457.57450667,
    //           3710.0,-2294096.43623008,-4683419.42772878,3659654.7684149,
    //           3720.0,-2293929.99691308,-4683345.91340302,3659851.84422781,
    //           3730.0,-2293763.5535443,-4683272.39077326,3660048.91352102,
    //           3740.0,-2293597.10612405,-4683198.85983962,3660245.97629416,
    //           3750.0,-2293430.65465261,-4683125.32060225,3660443.03254689,
    //           3760.0,-2293260.27703319,-4683055.37159052,3660637.95010862,
    //           3770.0,-2293061.03795256,-4683015.37278429,3660812.74893793,
    //           3780.0,-2292840.33611906,-4683005.33804065,3660962.80786551,
    //           3790.0,-2292608.06534954,-4683013.68106842,3661096.69339637,
    //           3.8e3,-2292375.79053761,-4683022.01579957,3661230.57243073,
    //           3810.0,-2292143.51168366,-4683030.3422341,3661364.44496835,
    //           3820.0,-2291911.22878812,-4683038.66037197,3661498.311009,
    //           3830.0,-2291675.19260926,-4683056.38281492,3661622.54366342,
    //           3840.0,-2291444.11976688,-4683176.79169794,3661613.21949622,
    //           3850.0,-2291484.73184242,-4683029.11180042,3661775.58481802,
    //           3860.0,-2291570.38402198,-4682848.00432402,3661952.40110212,
    //           3870.0,-2291504.75912943,-4682707.90868127,3662171.13586741,
    //           3880.0,-2291437.4576409,-4682568.41526623,3662390.12822003,
    //           3890.0,-2291370.1520906,-4682428.91355119,3662609.11403735,
    //           3894.996219574019,-2291336.52323822,-4682359.21232197,3662718.52171165
    //         ]
    //       }
    //     }
    //   ]
    // ],
    czmlTemporary: [],
    czmlTemporaryBz: [],
    czmlTemporaryBh: [],
    czmlTemporaryDth: [],
    czmlTemporaryModel: []
	},
	mutations: {

	},
	actions: {

	}
}

export default czml