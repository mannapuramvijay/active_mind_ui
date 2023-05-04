import {
  BriefcaseIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  PaperAirplaneIcon,
  ClipboardDocumentCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'Services', nested: [
      { name: 'IT Support Staffing', href: '/services/support', icon: WrenchScrewdriverIcon },
      { name: 'IT Consulting', href: '/services/consulting', icon: ChatBubbleLeftRightIcon },
      { name: 'Recruitment Solution', href: '/services/recruitment', icon: MagnifyingGlassIcon },
      { name: 'Overseas Education', href: '/services/overseas', icon: PaperAirplaneIcon },
      { name: 'University Assignment & Exams', href: '/services/assignment', icon: ClipboardDocumentCheckIcon },
      { name: 'HR & Immigration', href: '/services/immigration', icon: GlobeAltIcon }
    ]
  },
  {
    name: 'Technologies', href: '/technologies'
  },
  {
    name: 'Company', nested: [
      { name: 'About Us', href: '/company/about-us', icon: UserGroupIcon },
      { name: 'Our Mission & Vision', href: '/company/mission-vision', icon: RocketLaunchIcon },
      { name: 'Career', href: '/company/career', icon: BriefcaseIcon }
    ]
  },
  {
    name: 'Contact Us', href: '/contact'
  },
]
export default navigation;






