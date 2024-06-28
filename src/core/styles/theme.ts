import { createTheme } from '@mui/material'
import './../font/fonts.css'
import type {} from '@mui/x-data-grid/themeAugmentation'
import { FontName } from 'core/enum'
import { useMemo } from 'react'
import { esES as coreEs } from '@mui/material/locale'
import { palette } from './palette'
import { breakpoints } from './breakpoints'
import { typography } from './typography'

export const useTheme = () => {
  const theme = useMemo(
    () =>
      createTheme(
        {
          palette,
          breakpoints,
          typography,
          components: {
            MuiCheckbox: {
              styleOverrides: {
                root: {
                  color: '#828282',
                },
              },
            },
            MuiButton: {
              styleOverrides: {
                root: ({ ownerState }) => ({
                  ...(ownerState.variant === 'contained' && {
                    color: '#fff',
                  }),
                  fontFamily: FontName.RobotoMedium,
                }),
              },
              defaultProps: {
                variant: 'contained',
                color: 'primary',
              },
            },
            MuiDataGrid: {
              styleOverrides: {
                columnHeader: {
                  sortIcon: {
                    color: '#fff',
                  },
                  backgroundColor: '#686868',
                  color: '#fff',
                },
                root: {
                  '& .MuiDataGrid-columnHeaderTitle': {
                    fontFamily: FontName.RobotoBold,
                  },
                  '& .MuiDataGrid-cellContent': {
                    color: '#828282',
                    fontFamily: FontName.RobotoRegular,
                  },
                  '& .MuiDataGrid-columnSeparator': { visibility: 'visible' },
                },
              },
            },
            MuiDrawer: {
              styleOverrides: {
                root: {
                  '*::-webkit-scrollbar': {
                    width: '2px',
                    height: '2px',
                  },
                  '*::-webkit-scrollbar-thumb': {
                    background: 'rgba(0,0,0,.3)',
                    borderRadius: '4px',
                  },
                },
              },
            },
            MuiPaper: {
              styleOverrides: {
                root: {
                  '&&::-webkit-scrollbar': { width: '4px' },
                  '&&::-webkit-scrollbar-thumb': {
                    background: 'rgba(0,0,0,.3)',
                    borderRadius: '3px',
                  },
                },
              },
            },
            MuiGrid: {
              styleOverrides: {
                root: {
                  '&&::-webkit-scrollbar': { width: '4px' },
                  '&&::-webkit-scrollbar-thumb': {
                    background: 'rgba(0,0,0,.3)',
                    borderRadius: '3px',
                  },
                },
              },
            },
          },
        },
        coreEs,
      ),
    [],
  )

  return theme
}
