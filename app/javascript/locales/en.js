const enLocales = {
  translation: {
    about: {
      pageHeader: 'Project Information',
      projectName: 'Runit',
      projectDescription: ` - environment for writing and executing source code, which we will actively use on all Hexlet platforms.`,
      analogueIs: 'The nearest analogue is the service',
      analogueName: 'repl.it',
      backendIsOn: 'The backend is developed on',
      firstBackendDevTool: 'NestJS',
      and: 'and',
      secondBackendDevTool: 'TypeScript',
      frontendIsOn: ', the frontend uses',
      frontendDevTool: 'React',
      footer: {
        hexlet: '© Hexlet Rus Ltd.',
        about: 'About',
        code: 'Исходный код',
        linkToSlack: 'Slack #hexlet-volunteers',
        help: 'Help',
        knowledgeBase: 'Knowledge Base',
        linkToHexletGuides: 'Hexlet Guides',
        more: 'Extra',
        linkToCodeBasics: 'Code Basics',
        linkToCodeBattles: 'Code Battles',
      },
    },
    signUp: {
      pageHeader: 'Registration',
      emailLabel: 'Email',
      usernameLabel: 'Login',
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Confirm password',
      registerButton: 'Sign up',
      signUpFailed: 'This user already exists',
      footer: {
        signInHeader: 'Already have an account? ',
        signIn: 'Sign in',
      },
      validation: {
        requiredField: 'Required field',
        correctUsername: 'Enter a valid login',
        correctEmail: 'Incorrect email',
        usernameLength: 'From 3 to 20 characters',
        passwordLength: 'from 8 to 30 characters',
        confirmPassword: 'Passwords must be the same',
      },
    },
    remindPass: {
      pageHeader: 'Forgot password?',
      emailLabel: 'Email',
      resetButton: 'Recover password',
      footer: {
        signUpHeader: 'No account? ',
        signUp: 'Create a free account',
        signInHeader: 'Already have an account? ',
        signIn: 'Sign in',
      },
      validation: {
        correctEmail: 'Incorrect email',
      },
    },
    signIn: {
      pageHeader: 'Enter',
      emailLabel: 'Email',
      passwordLabel: 'Password',
      loginButton: 'Log in',
      remindPass: `I can't remember the password`,
      signInFailed: 'Wrong password or email',
      footer: {
        signUpHeader: 'No account? ',
        signUp: 'Create a free account',
      },
    },
    profile: {
      replsHeader: 'Snippets',
      username: 'Username:',
      createdAt: 'Created:',
      userId: 'User id:',
      email: 'Email:',
      editProfileButton: 'Edit',
      copyProfileButton: 'Copy link',
      openReplButton: 'Open',
      shareReplButton: 'Share',
      renameReplButton: 'Rename',
      deleteReplButton: 'Delete',
      newReplButton: 'A new Snippet',
    },
    navbar: {
      mainLabel: 'Editor',
      menu: 'Menu',
      home: 'Home',
      myRepls: 'My Snippets',
      profile: 'Profile',
      about: 'About',
      logout: 'Log out',
      signIn: 'Sign in',
      signUp: 'Sign up',
    },
    footer: {
      hexlet: 'Hexlet',
      about: 'About',
      career: 'Careers at Hexlet',
      shop: 'Merch Shop',
      doc: 'Documents',
      conditions: 'Terms of Use',
      agreement: 'Privacy',
      offer: 'Public offer',
      promo: 'Promo',
      tel1: '8 800 100 22 47',
      tel1Href: 'tel:88001002247',
      rf: ' free call in Russia',
      tel2: '+7 495 085 28 38',
      tel2Href: 'tel:88001002247',
      moscow: ' free in Moscow',
      name: 'Hexlet Rus Ltd.',
      city: '432071 Ulyanovsk, Russian Federation',
      street: 'pr-t. Narimanova, d. 1g, 23',
      ogrn: 'ИНН 7325174845 ',
      study: 'Study',
      programs: 'Professions from scratch',
      courses: 'All courses',
      individually: 'Individual training',
      teams: 'Corporate training',
      read: 'Read',
      success: 'Success Stories',
      feedback: 'Student Reviews',
      blog: 'Blog',
      questions: 'Testimonials',
      recommended: 'Recommended books',
      subscribe: 'Subscribe',
      help: 'Help',
      info: 'Info',
      qna: 'Q&A',
      mail: 'support@hexlet.io',
      mailHref: 'mailto:support@hexlet.io',
      improve: 'Improve Hexlet',
      project: 'Projects',
      college: 'Hexlet College',
      codeBasics: 'Code Basics',
      codeBattle: 'Codebattle',
      guides: 'Hexlet Guides',
      cv: 'Хекслет CV',
      language: 'Language',
      en: 'English',
      ru: 'Русский',
    },
    embedFrame: {
      runButton: 'Run',
      logoOffer: 'Try on the',
      logo: 'Runit',
    },
    editor: {
      authBanner: 'Log in to edit',
      runButton: 'Run',
      shareButton: 'Share',
    },
    modals: {
      share: {
        header: 'Save to share.',
        copyLinkButton: 'Copy Link',
        linkTab: 'Link',
        copyEmbedButton: 'Copy Code',
        embedTab: 'Embed code',
        saveSnippetButton: 'Save',
        saveSnippetTab: 'Save Snippet',
        snippetNameLabel: 'Enter a name',
        snippetLinkLabel: 'Link to Snippet',
        snippetEmbedLabel: 'Snippet code for insertion',
      },
      newSnippetName: 'Snippet Name',
      signInButton: 'Sign in',
      signUpButton: 'Создать аккаунт',
      signInHeader: 'Sign in',
      signUpHeader: 'Sign up',
      editUserHeader: 'Edit',
      sendButton: 'Send',
      infoBody: 'Log in to save and share.',
      cancelButton: 'Cancel',
      goToReplButton: 'Go to this replay',
      validation: {
        snippetNameMaxLength: 'No more than 20 characters',
        required: `Can't be empty`,
        singleWord: 'Allowed latin letters, numders and sybmols"-_"',
      },
    },
    appRotes: {
      pageNotFound: 'Page not found',
    },
    errors: {
      unknown: 'Unknown error',
      network: 'Network error',
    },
    pageNotFound: {
      oops: 'Oops!',
      notFound: 'Page not found',
      noExist: 'The page you are looking for does not exist.',
      returnButton: 'Return to Home',
    },
    faq: {
      faq: 'FAQ',
      q0: 'What if an IDE?',
      a0: 'An integrated development environment (IDE) is a software application that allows developers to write, debug, and test code using one of several programming languages. Integrated development environments are popular among developers because they speed up and simplify the work of writing code. Just as writers use word processors and accountants use spreadsheets, software developers use IDEs to increase productivity.',
      q1: 'How do IDE tools help developers?',
      a11: 'Most IDEs include features beyond the usual code editor. It combines many different tools in a single application so that developers can quickly start programming new applications rather than having to manually integrate and configure different software. Here are a few important features of the IDE.',
      a12: 'Автоматизация редактирования кода',
      a13: ' • The IDE knows the rules for structuring statements in programming languages and automatically edits the source code',
      a14: 'Выделение синтаксиса',
      a15: ' • The IDE identifies the language in which the code is written and highlights functions, variables and operators in different colors. This helps you to quickly read the syntax visually',
      a16: 'Autofill',
      a17: ' • The IDE can suggest continuing a string based on the first characters entered. This allows you to enter function and library names faster, without making syntax errors',
      a18: 'Поддержка рефакторинга',
      a19: ' • IDEs can use auto refactoring to make the source code more efficient and readable without changing its core functionality',
      a110: 'Local assembly automation',
      a111: ' • IDEs increase programmer productivity by performing repetitive development tasks, which are usually part of every code change',
      a112: 'Compilation',
      a113: ' • The IDE compiles or converts the code written by the developer into a language that the operating system understands',
      a114: 'Тестирование',
      a115: ' • The IDE allows developers to automate unit tests locally before the software is integrated with other developers code and more complex integration tests are run',
      a116: 'Debugging',
      a117: ' • Helps you eliminate bugs in the code and tells you how to fix them.',
      q2: 'What kind of IDEs are there?',
      a2: 'Integrated development environments (IDEs) can be divided into several different categories, depending on what kind of application development they support and how they work.',
      a21: 'Cloud IDEs',
      a22: ' • They are used to write, edit, and compile code directly in the browser, eliminating the need to download software to local machines. Cloud IDEs have a standardized development environment, can work from any machine, and use computing resources from the cloud, which frees up local machine resources.',
      a23: 'Local IDEs',
      a24: ' • Installed and run directly on local machines. Require additional libraries to be downloaded and installed depending on project requirements and development language. Installation of local IDEs can be time consuming and complex, and configuration differences between the local machine and the production environment can lead to software bugs.',
      q3: 'What are the features of the Runit IDE?',
      a3: 'Runit is a cloud-based integrated development environment (IDE) where you can create and run JavaScript code and debug it directly in your browser. Runit can be run on any device, with any operating system.',
      a31: 'In the future, expanding the set of features: support for other popular programming languages, collaborative work with other participants, as well as ready-made templates with code for more convenient and faster work.',
    },
  },
};

export default enLocales;
