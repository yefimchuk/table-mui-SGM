import { createSlice } from "@reduxjs/toolkit";

export const tableSlice: any = createSlice({
  name: "tableSlice",
  initialState: {
    textData: {
      Kyivska: {
        G: {
          2017: {
            XX: {
              value: 150000,
              dateRelease: "2017-12-31",
            },
            YY: {
              value: 100000,
              dateRelease: "2017-12-31",
            },
            ZZ: {
              value: 77,
              dateRelease: "2017-12-31",
            },
          },
          2018: {
            XX: {
              value: 160000,
              dateRelease: "2018-12-31",
            },
            YY: {
              value: 110000,
              dateRelease: "2018-12-31",
            },
            ZZ: {
              value: 72,
              dateRelease: "2018-12-31",
            },
          },
          2019: {
            XX: {
              value: 130000,
              dateRelease: "2019-12-31",
            },
            YY: {
              value: 85000,
              dateRelease: "2019-12-31",
            },
            ZZ: {
              value: 72,
              dateRelease: "2019-12-31",
            },
          },
        },
      },
      Odeska: {
        G: {
          2017: {
            XX: {
              value: 10000,
              dateRelease: "2017-12-31",
            },
            YY: {
              value: 5000,
              dateRelease: "2017-12-31",
            },
            ZZ: {
              value: 45,
              dateRelease: "2017-12-31",
            },
          },
          2019: {
            XX: {
              value: 15000,
              dateRelease: "2019-12-01",
            },
            YY: {
              value: 0,
              dateRelease: "2022-02-18",
            },
            ZZ: {
              value: 0,
              dateRelease: "2022-02-18",
            },
          },
        },
      },
      Lvivska: {
        G: {
          2017: {
            XX: {
              value: 640000,
              dateRelease: "2017-12-31",
            },
            YY: {
              value: 510000,
              dateRelease: "2017-08-01",
            },
            ZZ: {
              value: 67,
              dateRelease: "2017-08-01",
            },
          },
          2018: {
            XX: {
              value: 740000,
              dateRelease: "2018-12-31",
            },
            YY: {
              value: 530000,
              dateRelease: "2018-08-01",
            },
            ZZ: {
              value: 61,
              dateRelease: "2018-08-01",
            },
          },
        },
      },
    },
    isOpen: false,
  } as any,
  reducers: {
    HandleIsOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
  extraReducers: {},
});

export let { HandleIsOpen }: any = tableSlice.actions;
