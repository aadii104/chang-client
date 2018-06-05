import { RouteInfo } from "./sidebar.metadata";
// Sidebar menu Routes and data
export function GenerateRoutes(companyId: string, ownerId: string) {
  const ROUTES: RouteInfo[] = [
    {
      path: `/${ownerId}/${companyId}/dashboard`,
      title: "Dashboard",
      icon: "ft-monitor",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: ""
    },
    {
      path: "/gateway",
      title: "Gateway",
      icon: "ft-home",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: ""
    },
    {
      path: `/${ownerId}/${companyId}/form/contra`,
      title: "Contra",
      icon: "ft-edit",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: "(alt + R)"
    },
    {
      path: `/${ownerId}/${companyId}/form/journal`,
      title: "Journal Entry",
      icon: "ft-edit",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: "(alt + J)"
    },
    {
      path: `/${ownerId}/${companyId}/form/ledger`,
      title: "Ledger",
      icon: "ft-edit",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: "(alt + L)"
    },
    {
      path: `/${ownerId}/${companyId}/form/payment`,
      title: "Payment",
      icon: "ft-edit",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: "(alt + O)"
    },
    {
      path: `/${ownerId}/${companyId}/form/productservice`,
      title: "Product & services",
      icon: "ft-edit",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: "(alt + T)"
    },
    {
      path: `/${ownerId}/${companyId}/form/purchase`,
      title: "Purchase",
      icon: "ft-edit",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: "(alt + P)"
    },
    {
      path: `/${ownerId}/${companyId}/form/purchasereturn`,
      title: "Purchase return",
      icon: "ft-edit",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: "(alt + C)"
    },
    {
      path: `/${ownerId}/${companyId}/form/receipt`,
      title: "Receipt",
      icon: "ft-edit",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: "(alt + I)"
    },
    {
      path: `/${ownerId}/${companyId}/form/sales`,
      title: "Sales",
      icon: "ft-edit",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: "(alt + S)"
    },
    {
      path: `/${ownerId}/${companyId}/form/salesreturn`,
      title: "Sales Return",
      icon: "ft-edit",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: "(alt + D)"
    },
    {
      path: `/${ownerId}/${companyId}/form/undergroup`,
      title: "Undergoroup",
      icon: "ft-edit",
      class: "",
      badge: "",
      badgeClass: "",
      isExternalLink: false,
      submenu: [],
      navInfo: "(alt + G)"
    },
    {
      path: "",
      title: "Report",
      icon: "ft-home",
      class: "has-sub",
      badge: "11",
      badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
      isExternalLink: false,
      submenu: [
        {
          path: `/${ownerId}/${companyId}/report/contra`,
          title: "Contra",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        },
        {
          path: `/${ownerId}/${companyId}/report/journal`,
          title: "Journal Entry",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        },
        {
          path: `/${ownerId}/${companyId}/report/ledger`,
          title: "Ledger",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        },
        {
          path: `/${ownerId}/${companyId}/report/payment`,
          title: "Payment",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        },
        {
          path: `/${ownerId}/${companyId}/report/productservice`,
          title: "Product & services",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        },
        {
          path: `/${ownerId}/${companyId}/report/purchase`,
          title: "Purchase",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        },
        {
          path: `/${ownerId}/${companyId}/report/purchasereturn`,
          title: "Purchase return",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        },
        {
          path: `/${ownerId}/${companyId}/report/receipt`,
          title: "Receipt",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        },
        {
          path: `/${ownerId}/${companyId}/report/sales`,
          title: "Sales",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        },
        {
          path: `/${ownerId}/${companyId}/report/salesreturn`,
          title: "Sales Return",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        },
        {
          path: `/${ownerId}/${companyId}/report/undergroup`,
          title: "Undergoroup",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        }
      ],
      navInfo: ""
    },
    {
      path: "",
      title: "Company Settings",
      icon: "ft-home",
      class: "has-sub",
      badge: "2",
      badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
      isExternalLink: false,
      submenu: [
        {
          path: `/${ownerId}/${companyId}/dashboard/settings`,
          title: "Collaborators",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        },
        {
          path: `/${ownerId}/${companyId}/dashboard/delete`,
          title: "Delete",
          icon: "",
          class: "",
          badge: "",
          badgeClass: "",
          isExternalLink: false,
          submenu: [],
          navInfo: ""
        }
      ],
      navInfo: ""
    }
  ];

  return ROUTES;
}
