import {
  BallotTwoTone,
  BarChartTwoTone,
  DashboardTwoTone,
  PaymentsTwoTone,
  CorporateFareTwoTone,
  HomeTwoTone,
} from '@mui/icons-material';

export interface MenuItem {
  link?: string;
  icon?: any;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Início',
        link: '/dashboard',
        icon: HomeTwoTone,
      },
      {
        name: 'Dados',
        link: '/dashboard/informacoes',
        icon: CorporateFareTwoTone,
      },
      {
        name: 'Clientes',
        link: '/dashboard/clientes',
        icon: BarChartTwoTone,
      },
      {
        name: 'Produtos',
        link: '/dashboard/produtos',
        icon: DashboardTwoTone,
      },
      {
        name: 'Orçamentos',
        link: '/dashboard/orcamento',
        icon: PaymentsTwoTone,
      },
    ],
  },
  {
    heading: 'Controle de estoque',
    items: [
      {
        name: 'Movimentações',
        link: '/dashboard/movimentacoes',
        icon: BallotTwoTone,
      },
    ],
  },
];

export default menuItems;
