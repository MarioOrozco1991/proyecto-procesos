import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Procesos',
    icon: 'settings-2-outline',
    link: '/pages/dashboard',
    home: true,
    children: [
        {
          title: 'Crear',
          link: '/pages/crear',
        },
      ],
  },
  {
    title: 'Aprobación',
    icon: 'checkmark-circle-2-outline',
    link: '/pages/aprobacion',
  },
  {
    title: 'Reportes',
    icon: 'file-text-outline',
    link: '/pages/reportes',
  },
  {
    title: 'Rol',
    icon: 'person-outline',
    children: [
        {
          title: 'Crear',
          link: '/pages/rol',
        },
      ],
  },

//   {
//     title: 'Auth',
//     icon: 'lock-outline',
//     children: [
//       {
//         title: 'Login',
//         link: '/auth/login',
//       },
//       {
//         title: 'Register',
//         link: '/auth/register',
//       },
//       {
//         title: 'Request Password',
//         link: '/auth/request-password',
//       },
//       {
//         title: 'Reset Password',
//         link: '/auth/reset-password',
//       },
//     ],
//   },
];
