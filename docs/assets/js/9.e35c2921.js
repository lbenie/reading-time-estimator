(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{532:function(t,a,s){"use strict";s.r(a);var e=s(34),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Reading Time Estimator a été créé pour fournir une estimation de la durée de\nlecture d'un article ou d'un blog comme vu sur "),s("a",{attrs:{href:"https://medium.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("medium"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"comment-ca-fonctionne"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comment-ca-fonctionne"}},[t._v("#")]),t._v(" Comment ça fonctionne")]),t._v(" "),s("h3",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("Avec NPM")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" reading-time-estimator\n")])])]),s("p",[t._v("ou Yarn")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" reading-time-estimator\n")])])]),s("h3",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("L'api est assez simple. Voici la définition des types pour ce module.")]),t._v(" "),s("p",[t._v("Il s'agit d'une fonction simple qui prend les données comme argument requis avec les mots par minute et les paramètres régionaux comme arguments facultatifs.")]),t._v(" "),s("p",[t._v("Par défaut, les paramètres régionaux sont définis en anglais "),s("code",[t._v("en")]),t._v(".")]),t._v(" "),s("p",[t._v("Par défaut, le mot par minute a comme valeur "),s("code",[t._v("300")]),t._v(".")]),t._v(" "),s("p",[t._v("Pour le moment, il n'y a que 4 paramètres régionaux prises en charge: "),s("code",[t._v("en")]),t._v(","),s("code",[t._v("fr")]),t._v(", "),s("code",[t._v("es")]),t._v(" et"),s("code",[t._v("cn")]),t._v(". Si un\nparamètre régionale n'existe pas, il sera traiter comme la valeur "),s("code",[t._v("en")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" readingTime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reading-time-estimator'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default options")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readingTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\noutput"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  minutes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  words"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("4 min read")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// with french locale")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readingTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fr'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\noutput"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  minutes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  words"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("4 min de lecture")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"todos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#todos"}},[t._v("#")]),t._v(" TODOs")]),t._v(" "),s("ul",[s("li",[t._v("Ajouter d'autres langues")])]),t._v(" "),s("h2",{attrs:{id:"pourquoi-pas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pourquoi-pas"}},[t._v("#")]),t._v(" Pourquoi pas ...?")]),t._v(" "),s("h3",{attrs:{id:"reading-time"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-time"}},[t._v("#")]),t._v(" reading-time")]),t._v(" "),s("p",[t._v("Ce "),s("a",{attrs:{href:"https://www.npmjs.com/package/reading-time",target:"_blank",rel:"noopener noreferrer"}},[t._v("package"),s("OutboundLink")],1),t._v(" n'offre pas la\npossibilité à l'internationalisation qui était un requis pour moi.")])])}),[],!1,null,null,null);a.default=n.exports}}]);