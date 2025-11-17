## [2.0.0](https://github.com/lbenie/reading-time-estimator/compare/v1.14.0...v2.0.0) (2025-11-17)

### ⚠ BREAKING CHANGES

* Enable per-locale exports for better tree-shaking. Remove global translation map and supportedLanguages
types from main bundle. Update tests and build config to support new i18n structure. Remove `CN` language alias

* (docs): update README to clarify API usage and options

* ci: fix ci not working

* chore: Add ESLint disable for readonly parameter types in functions

### :sparkles: Features

* lazy load languages ([#2091](https://github.com/lbenie/reading-time-estimator/issues/2091)) ([f1312fe](https://github.com/lbenie/reading-time-estimator/commit/f1312feb34dfe00200995020825097ee5d6d39a6))

### :white_check_mark: Chores

* [skip ci] upgrade to yarn latest ([#2044](https://github.com/lbenie/reading-time-estimator/issues/2044)) ([26415d0](https://github.com/lbenie/reading-time-estimator/commit/26415d0912a5395a7086280759c17bcfbf3450bb))
* **deps:** update actions/checkout action to v5 ([#2001](https://github.com/lbenie/reading-time-estimator/issues/2001)) ([7bdff98](https://github.com/lbenie/reading-time-estimator/commit/7bdff98981e47770e6bc1157b25b053e22848bcd))
* **deps:** update actions/setup-node action to v5 ([#2028](https://github.com/lbenie/reading-time-estimator/issues/2028)) ([cff751f](https://github.com/lbenie/reading-time-estimator/commit/cff751f9d31f5066f0bf611fbd1417b9e2a3f132))
* **deps:** update actions/setup-node action to v6 ([#2056](https://github.com/lbenie/reading-time-estimator/issues/2056)) ([1a45e03](https://github.com/lbenie/reading-time-estimator/commit/1a45e033c6989fec73c958d62197437ec5545811))
* **deps:** update dependency @lbenie/linting to v1.8.121 ([#1873](https://github.com/lbenie/reading-time-estimator/issues/1873)) ([018c609](https://github.com/lbenie/reading-time-estimator/commit/018c609abd6102cc63af2cf7fdd15fa4f58a9a9c))
* **deps:** update dependency @lbenie/linting to v1.8.123 ([#1875](https://github.com/lbenie/reading-time-estimator/issues/1875)) ([2c64667](https://github.com/lbenie/reading-time-estimator/commit/2c6466758a7d2d18f6e3db2baad5f453b8436a12))
* **deps:** update dependency @lbenie/linting to v1.8.125 ([#1876](https://github.com/lbenie/reading-time-estimator/issues/1876)) ([61cafc4](https://github.com/lbenie/reading-time-estimator/commit/61cafc42513dae4fd10ca9b172618a1fe03abac5))
* **deps:** update dependency @lbenie/linting to v1.8.127 ([#1880](https://github.com/lbenie/reading-time-estimator/issues/1880)) ([4f0e067](https://github.com/lbenie/reading-time-estimator/commit/4f0e0672df60b8c1a40444d28886cdc2bfb08eef))
* **deps:** update dependency @lbenie/linting to v1.8.128 ([#1884](https://github.com/lbenie/reading-time-estimator/issues/1884)) ([94bd28e](https://github.com/lbenie/reading-time-estimator/commit/94bd28ec345b25c7ac04578049466528b5d107b2))
* **deps:** update dependency @lbenie/linting to v1.8.129 ([#1886](https://github.com/lbenie/reading-time-estimator/issues/1886)) ([b05082a](https://github.com/lbenie/reading-time-estimator/commit/b05082add91d51e8157860bdbd679f01045fa3dd))
* **deps:** update dependency @lbenie/linting to v1.8.130 ([#1887](https://github.com/lbenie/reading-time-estimator/issues/1887)) ([8eb2a9e](https://github.com/lbenie/reading-time-estimator/commit/8eb2a9e8e5011a436a141ca277978b4d167f7a94))
* **deps:** update dependency @lbenie/linting to v1.8.132 ([#1889](https://github.com/lbenie/reading-time-estimator/issues/1889)) ([28b1132](https://github.com/lbenie/reading-time-estimator/commit/28b1132b530be1e5a7e41f72a463996a09f95e85))
* **deps:** update dependency @lbenie/linting to v1.8.133 ([#1895](https://github.com/lbenie/reading-time-estimator/issues/1895)) ([783ec6e](https://github.com/lbenie/reading-time-estimator/commit/783ec6ee57254a79b38c353a6ca4adcc2e591d2f))
* **deps:** update dependency @lbenie/linting to v1.8.134 ([#1897](https://github.com/lbenie/reading-time-estimator/issues/1897)) ([f654a31](https://github.com/lbenie/reading-time-estimator/commit/f654a31c8acaf06c47cc77fac632dc9d47115b39))
* **deps:** update dependency @lbenie/linting to v1.8.135 ([#1898](https://github.com/lbenie/reading-time-estimator/issues/1898)) ([4eb3e18](https://github.com/lbenie/reading-time-estimator/commit/4eb3e18ec3317921f92121da77ebba536a1532e5))
* **deps:** update dependency @lbenie/linting to v1.8.136 ([#1901](https://github.com/lbenie/reading-time-estimator/issues/1901)) ([687f617](https://github.com/lbenie/reading-time-estimator/commit/687f617f67c6ec22b445d337c45a6f99f54c8ad0))
* **deps:** update dependency @lbenie/linting to v1.8.137 ([#1903](https://github.com/lbenie/reading-time-estimator/issues/1903)) ([9e7568b](https://github.com/lbenie/reading-time-estimator/commit/9e7568bc2860ac79d4d94b358aac8c10ee3b0df2))
* **deps:** update dependency @lbenie/linting to v1.8.138 ([#1911](https://github.com/lbenie/reading-time-estimator/issues/1911)) ([120e3df](https://github.com/lbenie/reading-time-estimator/commit/120e3df8a6255020728554455feef09a7229328d))
* **deps:** update dependency @lbenie/linting to v1.8.139 ([#1914](https://github.com/lbenie/reading-time-estimator/issues/1914)) ([dad7ed2](https://github.com/lbenie/reading-time-estimator/commit/dad7ed200103c18b39a8875c4f6c94c948a3e7ca))
* **deps:** update dependency @lbenie/linting to v1.8.140 ([#1916](https://github.com/lbenie/reading-time-estimator/issues/1916)) ([0336561](https://github.com/lbenie/reading-time-estimator/commit/0336561e8378fc12cd04b0d28baa09016f88e696))
* **deps:** update dependency @lbenie/linting to v1.8.142 ([#1918](https://github.com/lbenie/reading-time-estimator/issues/1918)) ([0afe2cc](https://github.com/lbenie/reading-time-estimator/commit/0afe2cc6e3d004e737e23977bfbef25e324078a5))
* **deps:** update dependency @lbenie/linting to v1.8.143 ([#1922](https://github.com/lbenie/reading-time-estimator/issues/1922)) ([9846d8c](https://github.com/lbenie/reading-time-estimator/commit/9846d8cb1efe4537615457559543d1517ceb8550))
* **deps:** update dependency @lbenie/linting to v1.8.144 ([#1924](https://github.com/lbenie/reading-time-estimator/issues/1924)) ([14a1c1c](https://github.com/lbenie/reading-time-estimator/commit/14a1c1c07aa6fcb97783f7ab44e76aa3bbb1f591))
* **deps:** update dependency @lbenie/linting to v1.8.145 ([#1926](https://github.com/lbenie/reading-time-estimator/issues/1926)) ([f5f93c6](https://github.com/lbenie/reading-time-estimator/commit/f5f93c6affd7ba945b0997f68e86f83deee82a87))
* **deps:** update dependency @lbenie/linting to v1.8.146 ([#1927](https://github.com/lbenie/reading-time-estimator/issues/1927)) ([a50904d](https://github.com/lbenie/reading-time-estimator/commit/a50904dd2944c243c05eee61f610de120725af17))
* **deps:** update dependency @lbenie/linting to v1.8.147 ([#1930](https://github.com/lbenie/reading-time-estimator/issues/1930)) ([8d02cc2](https://github.com/lbenie/reading-time-estimator/commit/8d02cc2755f6953bf7c9e180324e6d1f3979a1de))
* **deps:** update dependency @lbenie/linting to v1.8.149 ([#1934](https://github.com/lbenie/reading-time-estimator/issues/1934)) ([30de96b](https://github.com/lbenie/reading-time-estimator/commit/30de96b10e6bfb2e06d8be846a03caca3d1f52d1))
* **deps:** update dependency @lbenie/linting to v1.8.150 ([#1935](https://github.com/lbenie/reading-time-estimator/issues/1935)) ([8d9d203](https://github.com/lbenie/reading-time-estimator/commit/8d9d203dd73ad1e2ec9193fef0b72e74fa92fefd))
* **deps:** update dependency @lbenie/linting to v1.8.152 ([#1938](https://github.com/lbenie/reading-time-estimator/issues/1938)) ([9303268](https://github.com/lbenie/reading-time-estimator/commit/9303268ee01c692353c5fc95fec23650e4e82ffd))
* **deps:** update dependency @lbenie/linting to v1.8.153 ([#1940](https://github.com/lbenie/reading-time-estimator/issues/1940)) ([272b1a5](https://github.com/lbenie/reading-time-estimator/commit/272b1a5aa955536c60a8df7eebd430fa503bfe1c))
* **deps:** update dependency @lbenie/linting to v1.8.154 ([#1942](https://github.com/lbenie/reading-time-estimator/issues/1942)) ([bcd6b00](https://github.com/lbenie/reading-time-estimator/commit/bcd6b0005d8480812b0f0b5fcd02b893b5950c05))
* **deps:** update dependency @lbenie/linting to v1.8.155 ([#1944](https://github.com/lbenie/reading-time-estimator/issues/1944)) ([3038015](https://github.com/lbenie/reading-time-estimator/commit/3038015e779572e7a76d92fbc11d33a7800b89ec))
* **deps:** update dependency @lbenie/linting to v1.8.156 ([#1945](https://github.com/lbenie/reading-time-estimator/issues/1945)) ([f48a624](https://github.com/lbenie/reading-time-estimator/commit/f48a6243407e3b3f313726ff3def80a17976a7b1))
* **deps:** update dependency @lbenie/linting to v1.8.158 ([#1948](https://github.com/lbenie/reading-time-estimator/issues/1948)) ([168f824](https://github.com/lbenie/reading-time-estimator/commit/168f824b2fc896562b26f5efee49f37b55471c55))
* **deps:** update dependency @lbenie/linting to v1.8.159 ([#1950](https://github.com/lbenie/reading-time-estimator/issues/1950)) ([cca28f4](https://github.com/lbenie/reading-time-estimator/commit/cca28f458b874bc43e419aae3f30cbefb5a09099))
* **deps:** update dependency @lbenie/linting to v1.8.160 ([#1952](https://github.com/lbenie/reading-time-estimator/issues/1952)) ([214c366](https://github.com/lbenie/reading-time-estimator/commit/214c366a3d7154644068371585fdb2a0013b8e3e))
* **deps:** update dependency @lbenie/linting to v1.8.161 ([#1958](https://github.com/lbenie/reading-time-estimator/issues/1958)) ([c404aa3](https://github.com/lbenie/reading-time-estimator/commit/c404aa3cc07ec05825d99d8561746fbbebdf64d1))
* **deps:** update dependency @lbenie/linting to v1.8.163 ([#1960](https://github.com/lbenie/reading-time-estimator/issues/1960)) ([cbc8d63](https://github.com/lbenie/reading-time-estimator/commit/cbc8d63df718bc53ee06ce049c928bfab23feb5c))
* **deps:** update dependency @lbenie/linting to v1.8.164 ([#1962](https://github.com/lbenie/reading-time-estimator/issues/1962)) ([78ee4df](https://github.com/lbenie/reading-time-estimator/commit/78ee4dff8fa8bc8e02329834a8b5c3ac8cc44aee))
* **deps:** update dependency @lbenie/linting to v1.8.165 ([#1965](https://github.com/lbenie/reading-time-estimator/issues/1965)) ([eb1d2c3](https://github.com/lbenie/reading-time-estimator/commit/eb1d2c35c214baa29de9e5507d297a88ad0cce56))
* **deps:** update dependency @lbenie/linting to v1.8.166 ([#1972](https://github.com/lbenie/reading-time-estimator/issues/1972)) ([c48cdc9](https://github.com/lbenie/reading-time-estimator/commit/c48cdc92063e04123997c61bca33f4a877604c35))
* **deps:** update dependency @lbenie/linting to v1.8.167 ([#1974](https://github.com/lbenie/reading-time-estimator/issues/1974)) ([7187b46](https://github.com/lbenie/reading-time-estimator/commit/7187b46da88c5d03f0a751105b72574445b90fc6))
* **deps:** update dependency @lbenie/linting to v1.8.168 ([#1978](https://github.com/lbenie/reading-time-estimator/issues/1978)) ([dd4e3a8](https://github.com/lbenie/reading-time-estimator/commit/dd4e3a8472b6d7379f7c48a1ee98bda8edc948e5))
* **deps:** update dependency @lbenie/linting to v1.8.169 ([#1979](https://github.com/lbenie/reading-time-estimator/issues/1979)) ([c599d04](https://github.com/lbenie/reading-time-estimator/commit/c599d04b1e40d813f3c6ec024eec16541e4aabc7))
* **deps:** update dependency @lbenie/linting to v1.8.170 ([#1981](https://github.com/lbenie/reading-time-estimator/issues/1981)) ([47efa9c](https://github.com/lbenie/reading-time-estimator/commit/47efa9c06ecb596401e5a4facd33a24139360288))
* **deps:** update dependency @lbenie/linting to v1.8.171 ([#1984](https://github.com/lbenie/reading-time-estimator/issues/1984)) ([ff17726](https://github.com/lbenie/reading-time-estimator/commit/ff177260972484e54dfd4a0ed895639f08a373a8))
* **deps:** update dependency @lbenie/linting to v1.8.172 ([#1989](https://github.com/lbenie/reading-time-estimator/issues/1989)) ([0f62608](https://github.com/lbenie/reading-time-estimator/commit/0f626087cc8fc05c3d30562a441374bdcb0ee681))
* **deps:** update dependency @lbenie/linting to v1.8.173 ([#1992](https://github.com/lbenie/reading-time-estimator/issues/1992)) ([7b6c3a7](https://github.com/lbenie/reading-time-estimator/commit/7b6c3a7fda46a53a0a43ab8b34358999d96a3bd7))
* **deps:** update dependency @lbenie/linting to v1.8.174 ([#1994](https://github.com/lbenie/reading-time-estimator/issues/1994)) ([c52a4b3](https://github.com/lbenie/reading-time-estimator/commit/c52a4b3abc234a519f8ff5917a6e59828ed4c87a))
* **deps:** update dependency @lbenie/linting to v1.8.175 ([#1996](https://github.com/lbenie/reading-time-estimator/issues/1996)) ([072cc38](https://github.com/lbenie/reading-time-estimator/commit/072cc386b97e5a7cc02f73b2ab8effe003fa0d97))
* **deps:** update dependency @lbenie/linting to v1.8.176 ([#1999](https://github.com/lbenie/reading-time-estimator/issues/1999)) ([50f7b9c](https://github.com/lbenie/reading-time-estimator/commit/50f7b9caf8d5051d9be537ab3d0e8058e0144b35))
* **deps:** update dependency @lbenie/linting to v1.8.177 ([#2002](https://github.com/lbenie/reading-time-estimator/issues/2002)) ([75cc175](https://github.com/lbenie/reading-time-estimator/commit/75cc17577b844fc8055984e12e96239d0eefba80))
* **deps:** update dependency @lbenie/linting to v1.8.178 ([#2006](https://github.com/lbenie/reading-time-estimator/issues/2006)) ([0b8eba9](https://github.com/lbenie/reading-time-estimator/commit/0b8eba9ae0e37bb99ea83e97c05a648737869f3d))
* **deps:** update dependency @lbenie/linting to v1.8.179 ([#2010](https://github.com/lbenie/reading-time-estimator/issues/2010)) ([61d8d4e](https://github.com/lbenie/reading-time-estimator/commit/61d8d4e2460b72d931af0028e83dca943d8b0d2f))
* **deps:** update dependency @lbenie/linting to v1.8.180 ([#2014](https://github.com/lbenie/reading-time-estimator/issues/2014)) ([f270b56](https://github.com/lbenie/reading-time-estimator/commit/f270b5681f6775a0e09a535a6a03e6bde94392b9))
* **deps:** update dependency @lbenie/linting to v1.8.186 ([#2020](https://github.com/lbenie/reading-time-estimator/issues/2020)) ([98ad9c1](https://github.com/lbenie/reading-time-estimator/commit/98ad9c1bd2f8d81c1ffdee8a27637180d1e9655c))
* **deps:** update dependency @lbenie/linting to v1.8.187 ([#2023](https://github.com/lbenie/reading-time-estimator/issues/2023)) ([2a3b830](https://github.com/lbenie/reading-time-estimator/commit/2a3b830786927bc336d833593113448ad8d9e4a6))
* **deps:** update dependency @lbenie/linting to v1.8.188 ([#2031](https://github.com/lbenie/reading-time-estimator/issues/2031)) ([d847f02](https://github.com/lbenie/reading-time-estimator/commit/d847f02bb02f73c68018cee88deeb19b125608d5))
* **deps:** update dependency @lbenie/linting to v1.8.189 ([#2036](https://github.com/lbenie/reading-time-estimator/issues/2036)) ([4ef7e1f](https://github.com/lbenie/reading-time-estimator/commit/4ef7e1f02cd5bb2508f09f87c569a2bf2a8b6326))
* **deps:** update dependency @lbenie/linting to v1.8.190 ([#2043](https://github.com/lbenie/reading-time-estimator/issues/2043)) ([66c4a41](https://github.com/lbenie/reading-time-estimator/commit/66c4a413d61c4587b29a409effb81a1b369038e5))
* **deps:** update dependency @lbenie/linting to v1.8.191 ([#2046](https://github.com/lbenie/reading-time-estimator/issues/2046)) ([b85917c](https://github.com/lbenie/reading-time-estimator/commit/b85917c5fdd10a32d1c2562457dfd01698ebb1ed))
* **deps:** update dependency @lbenie/linting to v1.8.192 ([#2050](https://github.com/lbenie/reading-time-estimator/issues/2050)) ([26d53b5](https://github.com/lbenie/reading-time-estimator/commit/26d53b55234a4fbf04133c857a51d2f4feebbebb))
* **deps:** update dependency @lbenie/linting to v1.8.193 ([#2055](https://github.com/lbenie/reading-time-estimator/issues/2055)) ([1dc966f](https://github.com/lbenie/reading-time-estimator/commit/1dc966fb6d17be41789c63b350eca661729d310d))
* **deps:** update dependency @lbenie/linting to v1.8.194 ([#2062](https://github.com/lbenie/reading-time-estimator/issues/2062)) ([3363eb1](https://github.com/lbenie/reading-time-estimator/commit/3363eb13c621a5aa92805c80dece50e4139e46d1))
* **deps:** update dependency @lbenie/linting to v1.8.195 ([#2068](https://github.com/lbenie/reading-time-estimator/issues/2068)) ([9b4514e](https://github.com/lbenie/reading-time-estimator/commit/9b4514e9391cda4fc21dab563ad8b7e37dbd1219))
* **deps:** update dependency @lbenie/linting to v1.8.196 ([#2074](https://github.com/lbenie/reading-time-estimator/issues/2074)) ([c7bcafc](https://github.com/lbenie/reading-time-estimator/commit/c7bcafcf49b6fbec8897e9f427995f1c14fc50c0))
* **deps:** update dependency @lbenie/linting to v1.8.197 ([#2077](https://github.com/lbenie/reading-time-estimator/issues/2077)) ([0460837](https://github.com/lbenie/reading-time-estimator/commit/046083743f76a57ac988fdc12d3ef198f98841e7))
* **deps:** update dependency @lbenie/linting to v1.8.198 ([#2078](https://github.com/lbenie/reading-time-estimator/issues/2078)) ([2d52c77](https://github.com/lbenie/reading-time-estimator/commit/2d52c772b445bc0c6c961cab5a61765c0d17c4d6))
* **deps:** update dependency @lbenie/linting to v1.8.200 ([#2080](https://github.com/lbenie/reading-time-estimator/issues/2080)) ([c435eab](https://github.com/lbenie/reading-time-estimator/commit/c435eabe614542c3f27fb2c2df372dddc4c5ca97))
* **deps:** update dependency @lbenie/linting to v1.8.201 ([#2081](https://github.com/lbenie/reading-time-estimator/issues/2081)) ([8d3068a](https://github.com/lbenie/reading-time-estimator/commit/8d3068a7379a9c4f0c8db6785f996eff0bb8f0e0))
* **deps:** update dependency @lbenie/linting to v1.8.202 ([#2089](https://github.com/lbenie/reading-time-estimator/issues/2089)) ([cdd3f44](https://github.com/lbenie/reading-time-estimator/commit/cdd3f448d4a920959c076daad55c0ecaaec28eb1))
* **deps:** update dependency @rollup/plugin-typescript to v12.1.3 ([#1939](https://github.com/lbenie/reading-time-estimator/issues/1939)) ([ccb19fd](https://github.com/lbenie/reading-time-estimator/commit/ccb19fdf83bd4917819a3b0d2da9127af57ee09c))
* **deps:** update dependency @rollup/plugin-typescript to v12.1.4 ([#1954](https://github.com/lbenie/reading-time-estimator/issues/1954)) ([cc65cfb](https://github.com/lbenie/reading-time-estimator/commit/cc65cfba9bca8481536a28c078cda3ebd15bb6c8))
* **deps:** update dependency @rollup/plugin-typescript to v12.2.0 ([#2069](https://github.com/lbenie/reading-time-estimator/issues/2069)) ([c1d4698](https://github.com/lbenie/reading-time-estimator/commit/c1d4698a036eceb4f58c996b36209281ac3c6fcc))
* **deps:** update dependency @rollup/plugin-typescript to v12.3.0 ([#2073](https://github.com/lbenie/reading-time-estimator/issues/2073)) ([6ce75f9](https://github.com/lbenie/reading-time-estimator/commit/6ce75f9e864218267b75ac2d1d0286888968191d))
* **deps:** update dependency @semantic-release/github to v11.0.2 ([#1881](https://github.com/lbenie/reading-time-estimator/issues/1881)) ([e5ab340](https://github.com/lbenie/reading-time-estimator/commit/e5ab3408357b26736939042f1a7ced1800166164))
* **deps:** update dependency @semantic-release/github to v11.0.3 ([#1910](https://github.com/lbenie/reading-time-estimator/issues/1910)) ([19c1adf](https://github.com/lbenie/reading-time-estimator/commit/19c1adf268dfc14146ab6a9bc75cc09329cce305))
* **deps:** update dependency @semantic-release/github to v11.0.4 ([#2000](https://github.com/lbenie/reading-time-estimator/issues/2000)) ([e59b57f](https://github.com/lbenie/reading-time-estimator/commit/e59b57f5817d85065c6f354ec3a9b5c41b9b84ae))
* **deps:** update dependency @semantic-release/github to v11.0.5 ([#2017](https://github.com/lbenie/reading-time-estimator/issues/2017)) ([098570a](https://github.com/lbenie/reading-time-estimator/commit/098570a0325ad47e87cea81adf28db4104cc5950))
* **deps:** update dependency @semantic-release/github to v11.0.6 ([#2021](https://github.com/lbenie/reading-time-estimator/issues/2021)) ([d2e60a5](https://github.com/lbenie/reading-time-estimator/commit/d2e60a526cbb9787836b03d2af11f20d7bc83ab3))
* **deps:** update dependency @semantic-release/github to v12 ([#2058](https://github.com/lbenie/reading-time-estimator/issues/2058)) ([84ac3c1](https://github.com/lbenie/reading-time-estimator/commit/84ac3c1b81a99374e42e41ecf832d1ddc89eb54a))
* **deps:** update dependency @semantic-release/github to v12.0.1 ([#2076](https://github.com/lbenie/reading-time-estimator/issues/2076)) ([9fa3a64](https://github.com/lbenie/reading-time-estimator/commit/9fa3a64805176a8370405e0d447042bed0653b3a))
* **deps:** update dependency @semantic-release/github to v12.0.2 ([#2087](https://github.com/lbenie/reading-time-estimator/issues/2087)) ([749ff39](https://github.com/lbenie/reading-time-estimator/commit/749ff39d4cc98105d13edc019f45e218d7e15b94))
* **deps:** update dependency @semantic-release/release-notes-generator to v14.1.0 ([#2025](https://github.com/lbenie/reading-time-estimator/issues/2025)) ([77d6648](https://github.com/lbenie/reading-time-estimator/commit/77d6648c2e0c715aeff6ae20dee7800ea73b644a))
* **deps:** update dependency @types/node to v22.15.0 ([#1878](https://github.com/lbenie/reading-time-estimator/issues/1878)) ([0aad05c](https://github.com/lbenie/reading-time-estimator/commit/0aad05cb8fcd74d35e2f5d6ab90ec1234ef12d5d))
* **deps:** update dependency @types/node to v22.15.12 ([#1890](https://github.com/lbenie/reading-time-estimator/issues/1890)) ([8428d35](https://github.com/lbenie/reading-time-estimator/commit/8428d3568969343a7369b0e51a9c45f5cbc435d8))
* **deps:** update dependency @types/node to v22.15.14 ([#1894](https://github.com/lbenie/reading-time-estimator/issues/1894)) ([44b97a0](https://github.com/lbenie/reading-time-estimator/commit/44b97a0c2f1435d6f628750d9b4dfc06de08de62))
* **deps:** update dependency @types/node to v22.15.17 ([#1896](https://github.com/lbenie/reading-time-estimator/issues/1896)) ([e149635](https://github.com/lbenie/reading-time-estimator/commit/e1496352caab3b85fd805f0da8d2755ba653a95e))
* **deps:** update dependency @types/node to v22.15.18 ([#1899](https://github.com/lbenie/reading-time-estimator/issues/1899)) ([ef11598](https://github.com/lbenie/reading-time-estimator/commit/ef115981ecebb2353fd6c3692f86484ca97ff822))
* **deps:** update dependency @types/node to v22.15.19 ([#1905](https://github.com/lbenie/reading-time-estimator/issues/1905)) ([a094c7e](https://github.com/lbenie/reading-time-estimator/commit/a094c7e4f49635cac18315a53d6a029d109d97e6))
* **deps:** update dependency @types/node to v22.15.2 ([#1879](https://github.com/lbenie/reading-time-estimator/issues/1879)) ([5067112](https://github.com/lbenie/reading-time-estimator/commit/5067112ed923056c7d747c89586b6a0b6308c98a))
* **deps:** update dependency @types/node to v22.15.21 ([#1907](https://github.com/lbenie/reading-time-estimator/issues/1907)) ([143848c](https://github.com/lbenie/reading-time-estimator/commit/143848c4070a0d8beaeb04c0c55b4478fe4575d0))
* **deps:** update dependency @types/node to v22.15.23 ([#1913](https://github.com/lbenie/reading-time-estimator/issues/1913)) ([3f61367](https://github.com/lbenie/reading-time-estimator/commit/3f61367e80c5bd2544cad0049dadfec526fa6f84))
* **deps:** update dependency @types/node to v22.15.24 ([#1915](https://github.com/lbenie/reading-time-estimator/issues/1915)) ([f095f06](https://github.com/lbenie/reading-time-estimator/commit/f095f06aac1edd58499c13da36df3a2ea5a26ba7))
* **deps:** update dependency @types/node to v22.15.26 ([#1917](https://github.com/lbenie/reading-time-estimator/issues/1917)) ([25b2a23](https://github.com/lbenie/reading-time-estimator/commit/25b2a23b4dc260491c1f93a59eac30bb49955df0))
* **deps:** update dependency @types/node to v22.15.27 ([#1919](https://github.com/lbenie/reading-time-estimator/issues/1919)) ([d16e01d](https://github.com/lbenie/reading-time-estimator/commit/d16e01d24e6987a5183e76343d9c0aab9d2f3b73))
* **deps:** update dependency @types/node to v22.15.28 ([#1920](https://github.com/lbenie/reading-time-estimator/issues/1920)) ([03f2d1b](https://github.com/lbenie/reading-time-estimator/commit/03f2d1bb9b8efe46a97eeeefa68864ca2efa22f9))
* **deps:** update dependency @types/node to v22.15.29 ([#1921](https://github.com/lbenie/reading-time-estimator/issues/1921)) ([c54bab5](https://github.com/lbenie/reading-time-estimator/commit/c54bab5ad3eeece21b121b0756a3f46992a61cab))
* **deps:** update dependency @types/node to v22.15.3 ([#1882](https://github.com/lbenie/reading-time-estimator/issues/1882)) ([33e0151](https://github.com/lbenie/reading-time-estimator/commit/33e01519eba0bde0a118cf32729c04f51720a36e))
* **deps:** update dependency @types/node to v22.15.30 ([#1923](https://github.com/lbenie/reading-time-estimator/issues/1923)) ([1855fa9](https://github.com/lbenie/reading-time-estimator/commit/1855fa92c8d8383fb90443ae8a75db2011fccba2))
* **deps:** update dependency @types/node to v22.15.31 ([#1928](https://github.com/lbenie/reading-time-estimator/issues/1928)) ([df9e67c](https://github.com/lbenie/reading-time-estimator/commit/df9e67c5830c6b059a239209630f970f69c95a55))
* **deps:** update dependency @types/node to v24 ([#1929](https://github.com/lbenie/reading-time-estimator/issues/1929)) ([ae900a3](https://github.com/lbenie/reading-time-estimator/commit/ae900a3d2a9309774acaeccadb2139322c8582a3))
* **deps:** update dependency @types/node to v24.0.1 ([#1933](https://github.com/lbenie/reading-time-estimator/issues/1933)) ([53f6808](https://github.com/lbenie/reading-time-estimator/commit/53f6808048e54843dab3b5f71c1ea08147ec0a65))
* **deps:** update dependency @types/node to v24.0.10 ([#1959](https://github.com/lbenie/reading-time-estimator/issues/1959)) ([a61d913](https://github.com/lbenie/reading-time-estimator/commit/a61d913ff59dbdfab83f30b6a19053991a26d2fd))
* **deps:** update dependency @types/node to v24.0.12 ([#1967](https://github.com/lbenie/reading-time-estimator/issues/1967)) ([543f7a2](https://github.com/lbenie/reading-time-estimator/commit/543f7a26f29142451e4e9db19b037b23c777409b))
* **deps:** update dependency @types/node to v24.0.13 ([#1970](https://github.com/lbenie/reading-time-estimator/issues/1970)) ([5b9c752](https://github.com/lbenie/reading-time-estimator/commit/5b9c75226a41e1e766ffaaac0ce2f6c4790efafb))
* **deps:** update dependency @types/node to v24.0.14 ([#1975](https://github.com/lbenie/reading-time-estimator/issues/1975)) ([d5b4a33](https://github.com/lbenie/reading-time-estimator/commit/d5b4a33bad1d2a2f3a3338112f9948f687f453d5))
* **deps:** update dependency @types/node to v24.0.15 ([#1980](https://github.com/lbenie/reading-time-estimator/issues/1980)) ([5842d2f](https://github.com/lbenie/reading-time-estimator/commit/5842d2f5b08c00548c4fd964e5750560dc6cccc9))
* **deps:** update dependency @types/node to v24.0.2 ([#1936](https://github.com/lbenie/reading-time-estimator/issues/1936)) ([63ce09f](https://github.com/lbenie/reading-time-estimator/commit/63ce09ffccd7a6b3e2c6f7b0eb84134036b356f2))
* **deps:** update dependency @types/node to v24.0.3 ([#1937](https://github.com/lbenie/reading-time-estimator/issues/1937)) ([8c2fcbb](https://github.com/lbenie/reading-time-estimator/commit/8c2fcbbbe6f4adf4794776fbde67dc0352ebd029))
* **deps:** update dependency @types/node to v24.0.4 ([#1947](https://github.com/lbenie/reading-time-estimator/issues/1947)) ([de7d538](https://github.com/lbenie/reading-time-estimator/commit/de7d538d570040388dd913f661a23c5ec109e0e3))
* **deps:** update dependency @types/node to v24.0.6 ([#1951](https://github.com/lbenie/reading-time-estimator/issues/1951)) ([5c371b7](https://github.com/lbenie/reading-time-estimator/commit/5c371b7d4ed85d3b5fbbd7ade8632afd90c27f77))
* **deps:** update dependency @types/node to v24.0.7 ([#1953](https://github.com/lbenie/reading-time-estimator/issues/1953)) ([71ed852](https://github.com/lbenie/reading-time-estimator/commit/71ed852b8e5925a0edcac7834f7668de904a0d7e))
* **deps:** update dependency @types/node to v24.0.8 ([#1957](https://github.com/lbenie/reading-time-estimator/issues/1957)) ([a539799](https://github.com/lbenie/reading-time-estimator/commit/a53979967b3ec452b15aba6efed720ff55260644))
* **deps:** update dependency @types/node to v24.1.0 ([#1982](https://github.com/lbenie/reading-time-estimator/issues/1982)) ([86ba1ce](https://github.com/lbenie/reading-time-estimator/commit/86ba1ce0318e83e3b03e792a7659fffc55302ce4))
* **deps:** update dependency @types/node to v24.10.0 ([#2079](https://github.com/lbenie/reading-time-estimator/issues/2079)) ([7751c91](https://github.com/lbenie/reading-time-estimator/commit/7751c9188f5d418de6e73d3a38378d29dfb74646))
* **deps:** update dependency @types/node to v24.10.1 ([#2090](https://github.com/lbenie/reading-time-estimator/issues/2090)) ([31440af](https://github.com/lbenie/reading-time-estimator/commit/31440afc4bd13f6f943752944061175d2b176944))
* **deps:** update dependency @types/node to v24.2.0 ([#1991](https://github.com/lbenie/reading-time-estimator/issues/1991)) ([de40ceb](https://github.com/lbenie/reading-time-estimator/commit/de40ceb8c4da8c5b23c95a1cce26d5685dc22a47))
* **deps:** update dependency @types/node to v24.2.1 ([#1998](https://github.com/lbenie/reading-time-estimator/issues/1998)) ([92dc0c2](https://github.com/lbenie/reading-time-estimator/commit/92dc0c2652c487f8d77f923191dbe0359cb1fd24))
* **deps:** update dependency @types/node to v24.3.0 ([#2004](https://github.com/lbenie/reading-time-estimator/issues/2004)) ([51d6e7a](https://github.com/lbenie/reading-time-estimator/commit/51d6e7af26ff400137a10dbfdb9521bc558e7da7))
* **deps:** update dependency @types/node to v24.5.2 ([#2026](https://github.com/lbenie/reading-time-estimator/issues/2026)) ([be8321a](https://github.com/lbenie/reading-time-estimator/commit/be8321aeaf6ce5f3b6303924764ef9d4d2682b13))
* **deps:** update dependency @types/node to v24.6.0 ([#2035](https://github.com/lbenie/reading-time-estimator/issues/2035)) ([81e0f7e](https://github.com/lbenie/reading-time-estimator/commit/81e0f7e8cacf0dfe1521a80d5e9f13c151958529))
* **deps:** update dependency @types/node to v24.6.1 ([#2038](https://github.com/lbenie/reading-time-estimator/issues/2038)) ([2d68f1d](https://github.com/lbenie/reading-time-estimator/commit/2d68f1d47412fbcc25c866c2cae3673305b770a2))
* **deps:** update dependency @types/node to v24.6.2 ([#2039](https://github.com/lbenie/reading-time-estimator/issues/2039)) ([2554cd7](https://github.com/lbenie/reading-time-estimator/commit/2554cd739b10d4a1d9006532502e01833bd651a8))
* **deps:** update dependency @types/node to v24.7.0 ([#2048](https://github.com/lbenie/reading-time-estimator/issues/2048)) ([24c5c74](https://github.com/lbenie/reading-time-estimator/commit/24c5c7442dd1b801baadfd5679368c7d3020a7a6))
* **deps:** update dependency @types/node to v24.7.1 ([#2052](https://github.com/lbenie/reading-time-estimator/issues/2052)) ([93e53f6](https://github.com/lbenie/reading-time-estimator/commit/93e53f69418688de1675afc6fc0cbfe0fc19ac71))
* **deps:** update dependency @types/node to v24.7.2 ([#2053](https://github.com/lbenie/reading-time-estimator/issues/2053)) ([ae70946](https://github.com/lbenie/reading-time-estimator/commit/ae70946265e3c9bbc393ae06da4577d63b13549c))
* **deps:** update dependency @types/node to v24.8.0 ([#2060](https://github.com/lbenie/reading-time-estimator/issues/2060)) ([14175a5](https://github.com/lbenie/reading-time-estimator/commit/14175a5456fbf35e7dfef3aa5ad8fe9bd9e26d77))
* **deps:** update dependency @types/node to v24.8.1 ([#2061](https://github.com/lbenie/reading-time-estimator/issues/2061)) ([dfdcd99](https://github.com/lbenie/reading-time-estimator/commit/dfdcd99c03283fb4fc567885ca9db3a4d962fa4d))
* **deps:** update dependency @types/node to v24.9.0 ([#2066](https://github.com/lbenie/reading-time-estimator/issues/2066)) ([f45c5ad](https://github.com/lbenie/reading-time-estimator/commit/f45c5ad4471d1670365cd5a7b600e6e39c15524e))
* **deps:** update dependency @types/node to v24.9.1 ([#2067](https://github.com/lbenie/reading-time-estimator/issues/2067)) ([bbc6f1c](https://github.com/lbenie/reading-time-estimator/commit/bbc6f1c398d4bad218e40003e34f3457db81615a))
* **deps:** update dependency @types/node to v24.9.2 ([#2075](https://github.com/lbenie/reading-time-estimator/issues/2075)) ([96fbb16](https://github.com/lbenie/reading-time-estimator/commit/96fbb16d1a946eba2ceced29eee43b175df93e3a))
* **deps:** update dependency @types/sanitize-html to v2.16.0 ([#1891](https://github.com/lbenie/reading-time-estimator/issues/1891)) ([4ae4382](https://github.com/lbenie/reading-time-estimator/commit/4ae43820a2c7ea6cdfb059a06235e1fa7cedac65))
* **deps:** update dependency concurrently to v9.2.0 ([#1943](https://github.com/lbenie/reading-time-estimator/issues/1943)) ([d22c933](https://github.com/lbenie/reading-time-estimator/commit/d22c933c4cb118c57454f1b82c40ad3078572955))
* **deps:** update dependency concurrently to v9.2.1 ([#2013](https://github.com/lbenie/reading-time-estimator/issues/2013)) ([e2874f0](https://github.com/lbenie/reading-time-estimator/commit/e2874f02fbca0daf597c6b43750f96dae1f72620))
* **deps:** update dependency conventional-changelog-conventionalcommits to v9 ([#1906](https://github.com/lbenie/reading-time-estimator/issues/1906)) ([91f422b](https://github.com/lbenie/reading-time-estimator/commit/91f422b5518eb48033b3f534db02739b0eb2ad71))
* **deps:** update dependency conventional-changelog-conventionalcommits to v9.1.0 ([#1969](https://github.com/lbenie/reading-time-estimator/issues/1969)) ([55f5bfd](https://github.com/lbenie/reading-time-estimator/commit/55f5bfdd012c2df1bc34c7fb928dbddf6ea3fea0))
* **deps:** update dependency rollup to v4.40.1 ([#1883](https://github.com/lbenie/reading-time-estimator/issues/1883)) ([5b4bac8](https://github.com/lbenie/reading-time-estimator/commit/5b4bac859bde2dbc3ec6e90b5bf729f084cb2884))
* **deps:** update dependency rollup to v4.40.2 ([#1892](https://github.com/lbenie/reading-time-estimator/issues/1892)) ([b1bbfef](https://github.com/lbenie/reading-time-estimator/commit/b1bbfefc8f2f0494c7e98390ca4d20b8ee7de2e6))
* **deps:** update dependency rollup to v4.41.0 ([#1904](https://github.com/lbenie/reading-time-estimator/issues/1904)) ([48666e6](https://github.com/lbenie/reading-time-estimator/commit/48666e635fcead849c4a6fa83aa9672ed7812e57))
* **deps:** update dependency rollup to v4.41.1 ([#1909](https://github.com/lbenie/reading-time-estimator/issues/1909)) ([cb3c94b](https://github.com/lbenie/reading-time-estimator/commit/cb3c94ba6b984e97ecce2b87c5e93990f712a2a8))
* **deps:** update dependency rollup to v4.42.0 ([#1925](https://github.com/lbenie/reading-time-estimator/issues/1925)) ([e0936bb](https://github.com/lbenie/reading-time-estimator/commit/e0936bbc40eee3199769f4ada8c3dd8735e25c06))
* **deps:** update dependency rollup to v4.43.0 ([#1932](https://github.com/lbenie/reading-time-estimator/issues/1932)) ([cda0be4](https://github.com/lbenie/reading-time-estimator/commit/cda0be4da0078e68f5d3029769d2a758059c4a66))
* **deps:** update dependency rollup to v4.44.0 ([#1941](https://github.com/lbenie/reading-time-estimator/issues/1941)) ([13c9ff0](https://github.com/lbenie/reading-time-estimator/commit/13c9ff0772f807e3e231cc918973a90f7bb85124))
* **deps:** update dependency rollup to v4.44.1 ([#1949](https://github.com/lbenie/reading-time-estimator/issues/1949)) ([4b55d29](https://github.com/lbenie/reading-time-estimator/commit/4b55d29b46ff19ce880d4d5da07295cd5b62fc90))
* **deps:** update dependency rollup to v4.44.2 ([#1964](https://github.com/lbenie/reading-time-estimator/issues/1964)) ([fb5e93a](https://github.com/lbenie/reading-time-estimator/commit/fb5e93a77ac8e07df3703b918a10d89dff794f4e))
* **deps:** update dependency rollup to v4.45.0 ([#1973](https://github.com/lbenie/reading-time-estimator/issues/1973)) ([6525c64](https://github.com/lbenie/reading-time-estimator/commit/6525c640d65ba068e1632030e52ac0c70f7790a5))
* **deps:** update dependency rollup to v4.45.1 ([#1976](https://github.com/lbenie/reading-time-estimator/issues/1976)) ([19cfd01](https://github.com/lbenie/reading-time-estimator/commit/19cfd016d84e7031e85d1add19d056ea35840e62))
* **deps:** update dependency rollup to v4.45.3 ([#1985](https://github.com/lbenie/reading-time-estimator/issues/1985)) ([f62cce7](https://github.com/lbenie/reading-time-estimator/commit/f62cce734ab65bc1b1bb9b166744ca12a35836f8))
* **deps:** update dependency rollup to v4.46.0 ([#1986](https://github.com/lbenie/reading-time-estimator/issues/1986)) ([3806aa2](https://github.com/lbenie/reading-time-estimator/commit/3806aa2d23a81fb35196e2aa08df0f0fb60ba6f1))
* **deps:** update dependency rollup to v4.46.1 ([#1987](https://github.com/lbenie/reading-time-estimator/issues/1987)) ([f012c72](https://github.com/lbenie/reading-time-estimator/commit/f012c727bc216fa727031008b36d6784414f821e))
* **deps:** update dependency rollup to v4.46.2 ([#1988](https://github.com/lbenie/reading-time-estimator/issues/1988)) ([353326a](https://github.com/lbenie/reading-time-estimator/commit/353326a2226d3399c37ae191caadd5cb869ed352))
* **deps:** update dependency rollup to v4.46.3 ([#2005](https://github.com/lbenie/reading-time-estimator/issues/2005)) ([6d98296](https://github.com/lbenie/reading-time-estimator/commit/6d9829623d69d363175b7a985c60490bb33ca685))
* **deps:** update dependency rollup to v4.46.4 ([#2008](https://github.com/lbenie/reading-time-estimator/issues/2008)) ([ea6d661](https://github.com/lbenie/reading-time-estimator/commit/ea6d661d2607ef16e9d569ce8c31c3f7788fbea6))
* **deps:** update dependency rollup to v4.47.1 ([#2009](https://github.com/lbenie/reading-time-estimator/issues/2009)) ([8dafdd4](https://github.com/lbenie/reading-time-estimator/commit/8dafdd4b39b7876c34fbc096d3a1bbae29509936))
* **deps:** update dependency rollup to v4.48.0 ([#2011](https://github.com/lbenie/reading-time-estimator/issues/2011)) ([3dab866](https://github.com/lbenie/reading-time-estimator/commit/3dab866a1d6eb2647cb7afacfa868adad5e0d956))
* **deps:** update dependency rollup to v4.48.1 ([#2012](https://github.com/lbenie/reading-time-estimator/issues/2012)) ([8629025](https://github.com/lbenie/reading-time-estimator/commit/86290253c44cbe66929152bc04b96e61caae3853))
* **deps:** update dependency rollup to v4.49.0 ([#2015](https://github.com/lbenie/reading-time-estimator/issues/2015)) ([ba9d2f8](https://github.com/lbenie/reading-time-estimator/commit/ba9d2f8ac0883338b5cb76b1c792353bfa09151a))
* **deps:** update dependency rollup to v4.50.0 ([#2018](https://github.com/lbenie/reading-time-estimator/issues/2018)) ([1661c14](https://github.com/lbenie/reading-time-estimator/commit/1661c1452505f2113b5fa8a5511f3028b2d7658d))
* **deps:** update dependency rollup to v4.52.0 ([#2027](https://github.com/lbenie/reading-time-estimator/issues/2027)) ([addc19e](https://github.com/lbenie/reading-time-estimator/commit/addc19ec71809959a7c8f5bf3ef5e7ffa2134e88))
* **deps:** update dependency rollup to v4.52.2 ([#2032](https://github.com/lbenie/reading-time-estimator/issues/2032)) ([3df717c](https://github.com/lbenie/reading-time-estimator/commit/3df717c0325f92fc25b17e22d1639765e555380c))
* **deps:** update dependency rollup to v4.52.3 ([#2034](https://github.com/lbenie/reading-time-estimator/issues/2034)) ([fd8a0ac](https://github.com/lbenie/reading-time-estimator/commit/fd8a0ac6d69d34da8a56c83d60bab9d9ebf3beae))
* **deps:** update dependency rollup to v4.52.4 ([#2042](https://github.com/lbenie/reading-time-estimator/issues/2042)) ([0cf6b60](https://github.com/lbenie/reading-time-estimator/commit/0cf6b601b33073926e4303d6043244e5ee444810))
* **deps:** update dependency rollup to v4.52.5 ([#2063](https://github.com/lbenie/reading-time-estimator/issues/2063)) ([b595c31](https://github.com/lbenie/reading-time-estimator/commit/b595c315bb7fec3a8eb5ef01a8d04a59eb70acdf))
* **deps:** update dependency rollup to v4.53.1 ([#2085](https://github.com/lbenie/reading-time-estimator/issues/2085)) ([1d55ac7](https://github.com/lbenie/reading-time-estimator/commit/1d55ac73e133ecebccfbd406309cdef84bb9aedc))
* **deps:** update dependency rollup to v4.53.2 ([#2088](https://github.com/lbenie/reading-time-estimator/issues/2088)) ([527e528](https://github.com/lbenie/reading-time-estimator/commit/527e5284c8eaf06f60923f2381888bf5820d2210))
* **deps:** update dependency sanitize-html to v2.16.0 ([#1870](https://github.com/lbenie/reading-time-estimator/issues/1870)) ([1fbf6ff](https://github.com/lbenie/reading-time-estimator/commit/1fbf6ff0610462494c42e54b8b17ec1b521a4e5e))
* **deps:** update dependency sanitize-html to v2.17.0 ([#1900](https://github.com/lbenie/reading-time-estimator/issues/1900)) ([db017ae](https://github.com/lbenie/reading-time-estimator/commit/db017aecc71deb3ec71f85778b24272c192a6d49))
* **deps:** update dependency semantic-release to v24.2.4 ([#1902](https://github.com/lbenie/reading-time-estimator/issues/1902)) ([abadc40](https://github.com/lbenie/reading-time-estimator/commit/abadc408ab4f334e61a311a291fbfddfd42dae9d))
* **deps:** update dependency semantic-release to v24.2.5 ([#1908](https://github.com/lbenie/reading-time-estimator/issues/1908)) ([da5a55b](https://github.com/lbenie/reading-time-estimator/commit/da5a55b828568290dd280cb954bc3928853cd518))
* **deps:** update dependency semantic-release to v24.2.6 ([#1955](https://github.com/lbenie/reading-time-estimator/issues/1955)) ([c620b49](https://github.com/lbenie/reading-time-estimator/commit/c620b49f5425ad5c2382c64a0611c7b18b30fdf7))
* **deps:** update dependency semantic-release to v24.2.7 ([#1971](https://github.com/lbenie/reading-time-estimator/issues/1971)) ([03b134e](https://github.com/lbenie/reading-time-estimator/commit/03b134ea0aa4c86fce01dd7babb887a6d785455b))
* **deps:** update dependency semantic-release to v24.2.9 ([#2022](https://github.com/lbenie/reading-time-estimator/issues/2022)) ([1e8c3f0](https://github.com/lbenie/reading-time-estimator/commit/1e8c3f0a6f44e2c35c53e1fc93dd95051b574fae))
* **deps:** update dependency semantic-release to v25 ([#2059](https://github.com/lbenie/reading-time-estimator/issues/2059)) ([d035f12](https://github.com/lbenie/reading-time-estimator/commit/d035f12840dd0e3b890adf3d2b5997747c4b5120))
* **deps:** update dependency semantic-release to v25.0.1 ([#2064](https://github.com/lbenie/reading-time-estimator/issues/2064)) ([66b233e](https://github.com/lbenie/reading-time-estimator/commit/66b233e91545c08b29d8cdacbec8686fdc6d514b))
* **deps:** update dependency semantic-release to v25.0.2 ([#2086](https://github.com/lbenie/reading-time-estimator/issues/2086)) ([a1d8fe5](https://github.com/lbenie/reading-time-estimator/commit/a1d8fe5a9c0875d149d63919de69e8625c815057))
* **deps:** update dependency typescript to v5.9.2 ([#1990](https://github.com/lbenie/reading-time-estimator/issues/1990)) ([49c2d83](https://github.com/lbenie/reading-time-estimator/commit/49c2d83d6a774030feb1f68f04afdb2e3ae97e0a))
* **deps:** update dependency typescript to v5.9.3 ([#2037](https://github.com/lbenie/reading-time-estimator/issues/2037)) ([13137d8](https://github.com/lbenie/reading-time-estimator/commit/13137d85eecd5942c286db97a3f175865202c6b3))
* **deps:** update dependency unplugin-auto-import to v19.2.0 ([#1893](https://github.com/lbenie/reading-time-estimator/issues/1893)) ([6d8a72f](https://github.com/lbenie/reading-time-estimator/commit/6d8a72f50ecfe6669d3c6972ceab4cb0be5adc03))
* **deps:** update dependency unplugin-auto-import to v19.3.0 ([#1912](https://github.com/lbenie/reading-time-estimator/issues/1912)) ([e6caf61](https://github.com/lbenie/reading-time-estimator/commit/e6caf61c3c0a1f17e0be2fbae1e0f3962af86904))
* **deps:** update dependency unplugin-auto-import to v20 ([#1993](https://github.com/lbenie/reading-time-estimator/issues/1993)) ([7b1cf3e](https://github.com/lbenie/reading-time-estimator/commit/7b1cf3e3df4cce74bb97a9f63e64dbde10db4741))
* **deps:** update dependency unplugin-auto-import to v20.1.0 ([#2016](https://github.com/lbenie/reading-time-estimator/issues/2016)) ([fb22352](https://github.com/lbenie/reading-time-estimator/commit/fb22352f4dd5f793e7dd0683bf4179ef7dbae6e5))
* **deps:** update dependency unplugin-auto-import to v20.2.0 ([#2033](https://github.com/lbenie/reading-time-estimator/issues/2033)) ([dd4ede1](https://github.com/lbenie/reading-time-estimator/commit/dd4ede1d21bef930449135e168da6e369d7ce821))
* **deps:** update dependency vite to v6.3.1 ([#1871](https://github.com/lbenie/reading-time-estimator/issues/1871)) ([2036144](https://github.com/lbenie/reading-time-estimator/commit/20361442f1c4570956508b6256c53bfae9aea14a))
* **deps:** update dependency vite to v6.3.2 ([#1872](https://github.com/lbenie/reading-time-estimator/issues/1872)) ([aa5685e](https://github.com/lbenie/reading-time-estimator/commit/aa5685ebfd4d921fb02baf3583c6cf120b1037d9))
* **deps:** update dependency vite to v6.3.3 ([#1877](https://github.com/lbenie/reading-time-estimator/issues/1877)) ([6effd14](https://github.com/lbenie/reading-time-estimator/commit/6effd14997ac97154f7bbcdb3f67d4f2988ca263))
* **deps:** update dependency vite to v6.3.4 ([#1885](https://github.com/lbenie/reading-time-estimator/issues/1885)) ([09a1e68](https://github.com/lbenie/reading-time-estimator/commit/09a1e680754950eabe2a43f3bc881b6ae7ef00fb))
* **deps:** update dependency vite to v6.3.5 ([#1888](https://github.com/lbenie/reading-time-estimator/issues/1888)) ([a1f2bf1](https://github.com/lbenie/reading-time-estimator/commit/a1f2bf19481268b9d28c4cc511c6dcefb2f30d96))
* **deps:** update dependency vite to v7 ([#1946](https://github.com/lbenie/reading-time-estimator/issues/1946)) ([1376a35](https://github.com/lbenie/reading-time-estimator/commit/1376a35644e48bc3a615e2bd8c50e9bba0282c5e))
* **deps:** update dependency vite to v7.0.1 ([#1961](https://github.com/lbenie/reading-time-estimator/issues/1961)) ([a0e16da](https://github.com/lbenie/reading-time-estimator/commit/a0e16da44caf7d878a8bf437eb83ed9e3d628885))
* **deps:** update dependency vite to v7.0.2 ([#1963](https://github.com/lbenie/reading-time-estimator/issues/1963)) ([15d79eb](https://github.com/lbenie/reading-time-estimator/commit/15d79ebb0dd5c89264457bf6ceb812c4466b99d0))
* **deps:** update dependency vite to v7.0.3 ([#1966](https://github.com/lbenie/reading-time-estimator/issues/1966)) ([819bd0c](https://github.com/lbenie/reading-time-estimator/commit/819bd0c0a4a538e3e8894e46f90dd3d4cf215422))
* **deps:** update dependency vite to v7.0.4 ([#1968](https://github.com/lbenie/reading-time-estimator/issues/1968)) ([38f1451](https://github.com/lbenie/reading-time-estimator/commit/38f1451b86c6f8fb3dfbfa165cfb2861434fe895))
* **deps:** update dependency vite to v7.0.5 ([#1977](https://github.com/lbenie/reading-time-estimator/issues/1977)) ([86df190](https://github.com/lbenie/reading-time-estimator/commit/86df190375eea6988a23bb7d28c3f33f5f283cfb))
* **deps:** update dependency vite to v7.0.6 ([#1983](https://github.com/lbenie/reading-time-estimator/issues/1983)) ([052bbc3](https://github.com/lbenie/reading-time-estimator/commit/052bbc3093f2e94f8006bf77306e014a24aeaaee))
* **deps:** update dependency vite to v7.1.0 ([#1995](https://github.com/lbenie/reading-time-estimator/issues/1995)) ([f9b2e04](https://github.com/lbenie/reading-time-estimator/commit/f9b2e04767e36c84d68293d6381b60e91e766fd9))
* **deps:** update dependency vite to v7.1.1 ([#1997](https://github.com/lbenie/reading-time-estimator/issues/1997)) ([b6d7207](https://github.com/lbenie/reading-time-estimator/commit/b6d720745671fb650dbc1c5728fbf894a8ef12b6))
* **deps:** update dependency vite to v7.1.10 ([#2057](https://github.com/lbenie/reading-time-estimator/issues/2057)) ([7eb5e7b](https://github.com/lbenie/reading-time-estimator/commit/7eb5e7b0d44081ec784692897f06162b9056e88f))
* **deps:** update dependency vite to v7.1.11 ([#2065](https://github.com/lbenie/reading-time-estimator/issues/2065)) ([5dadac1](https://github.com/lbenie/reading-time-estimator/commit/5dadac1533dc5ed01af457416a59eccd9022aa77))
* **deps:** update dependency vite to v7.1.12 ([#2072](https://github.com/lbenie/reading-time-estimator/issues/2072)) ([f42f1ab](https://github.com/lbenie/reading-time-estimator/commit/f42f1ab154a050f3f7dc12b417105ccade7b24b3))
* **deps:** update dependency vite to v7.1.2 ([#2003](https://github.com/lbenie/reading-time-estimator/issues/2003)) ([7747a55](https://github.com/lbenie/reading-time-estimator/commit/7747a5512234a134007373d1c49e0fe964560bea))
* **deps:** update dependency vite to v7.1.3 ([#2007](https://github.com/lbenie/reading-time-estimator/issues/2007)) ([ea05bfb](https://github.com/lbenie/reading-time-estimator/commit/ea05bfb87caf7fe8e1e92d5949050f61019d0757))
* **deps:** update dependency vite to v7.1.5 [security] ([#2019](https://github.com/lbenie/reading-time-estimator/issues/2019)) ([064fe11](https://github.com/lbenie/reading-time-estimator/commit/064fe11513a0b59ee87d038301e6c41829125a38))
* **deps:** update dependency vite to v7.1.6 ([#2024](https://github.com/lbenie/reading-time-estimator/issues/2024)) ([c764e66](https://github.com/lbenie/reading-time-estimator/commit/c764e669ec9efb276f066489a071e632427e9c81))
* **deps:** update dependency vite to v7.1.7 ([#2029](https://github.com/lbenie/reading-time-estimator/issues/2029)) ([56aec2e](https://github.com/lbenie/reading-time-estimator/commit/56aec2e849e0e9fe03249f1a46fe56f85723fec4))
* **deps:** update dependency vite to v7.1.8 ([#2040](https://github.com/lbenie/reading-time-estimator/issues/2040)) ([ee5f455](https://github.com/lbenie/reading-time-estimator/commit/ee5f455fc417590dbd9b6ed3f25818cacf50b67f))
* **deps:** update dependency vite to v7.1.9 ([#2041](https://github.com/lbenie/reading-time-estimator/issues/2041)) ([cca6b81](https://github.com/lbenie/reading-time-estimator/commit/cca6b81c157c0aa604560a81cdd7c12773353102))
* **deps:** update dependency vite to v7.2.0 ([#2082](https://github.com/lbenie/reading-time-estimator/issues/2082)) ([51acbf8](https://github.com/lbenie/reading-time-estimator/commit/51acbf8f834fd0b1cf921a079cb03250bee7c01e))
* **deps:** update dependency vite to v7.2.1 ([#2083](https://github.com/lbenie/reading-time-estimator/issues/2083)) ([09ee6c3](https://github.com/lbenie/reading-time-estimator/commit/09ee6c38967b19f8eed5f6a240c41868c1ed055a))
* **deps:** update dependency vite to v7.2.2 ([#2084](https://github.com/lbenie/reading-time-estimator/issues/2084)) ([6756b03](https://github.com/lbenie/reading-time-estimator/commit/6756b03953cde66a50689ac547b5836e310f0f18))
* **deps:** update dependency vitest to v3 ([#2047](https://github.com/lbenie/reading-time-estimator/issues/2047)) ([ed92960](https://github.com/lbenie/reading-time-estimator/commit/ed929609eff6df4cb98c6a5003fb93add7923b11))
* **deps:** update github/codeql-action action to v4 ([#2051](https://github.com/lbenie/reading-time-estimator/issues/2051)) ([0671c56](https://github.com/lbenie/reading-time-estimator/commit/0671c56fd745593dafe332b2ae7613f12143e3d7))
* **deps:** update stefanzweifel/git-auto-commit-action action to v5.2.0 ([#1874](https://github.com/lbenie/reading-time-estimator/issues/1874)) ([a744dde](https://github.com/lbenie/reading-time-estimator/commit/a744dde9ab21720572f75df8e92ba81cae9c4e10))
* **deps:** update stefanzweifel/git-auto-commit-action action to v6 ([#1931](https://github.com/lbenie/reading-time-estimator/issues/1931)) ([dbc91a9](https://github.com/lbenie/reading-time-estimator/commit/dbc91a90a2d026bf54a8cfaa1a168cc48af80df8))
* **deps:** update stefanzweifel/git-auto-commit-action action to v7 ([#2054](https://github.com/lbenie/reading-time-estimator/issues/2054)) ([df22335](https://github.com/lbenie/reading-time-estimator/commit/df223352eb4a874c1a8bd864d8beaea0053992bd))

## [1.14.0](https://github.com/lbenie/reading-time-estimator/compare/v1.13.0...v1.14.0) (2025-04-16)

### :sparkles: Features

* add russian, vietnamese, italian and indonesian languages ([#1860](https://github.com/lbenie/reading-time-estimator/issues/1860)) ([1a150df](https://github.com/lbenie/reading-time-estimator/commit/1a150dfa1c3304d088299cfcea23518a04e00b54))

### :memo: Documenation

* add FocussedFlyer3 as a contributor for code ([#1869](https://github.com/lbenie/reading-time-estimator/issues/1869)) ([9409914](https://github.com/lbenie/reading-time-estimator/commit/9409914ac159669a21b85a0e4ea044183a2f5332))

### :white_check_mark: Chores

* **deps:** update dependency vite to v6.3.0 ([#1868](https://github.com/lbenie/reading-time-estimator/issues/1868)) ([ed1df3a](https://github.com/lbenie/reading-time-estimator/commit/ed1df3afd8b77e6e675e7ee0b76eecea7679b9f2))

## [1.13.0](https://github.com/lbenie/reading-time-estimator/compare/v1.12.0...v1.13.0) (2025-04-15)

### :sparkles: Features

* zh-tw support ([#1863](https://github.com/lbenie/reading-time-estimator/issues/1863)) ([cf73523](https://github.com/lbenie/reading-time-estimator/commit/cf73523634645ac4d0719d4227b3e7a4c2aa8978))

### :memo: Documenation

* add Qnurye as a contributor for code ([#1866](https://github.com/lbenie/reading-time-estimator/issues/1866)) ([9c0574d](https://github.com/lbenie/reading-time-estimator/commit/9c0574dfd0dd7c877d738a0ded9d79155b281f99))

### :white_check_mark: Chores

* **deps:** update dependency @lbenie/linting to v1.8.109 ([#1836](https://github.com/lbenie/reading-time-estimator/issues/1836)) ([122bc00](https://github.com/lbenie/reading-time-estimator/commit/122bc009b865a9bc2df5d1a4cd29cfcd5cf79d08))
* **deps:** update dependency @lbenie/linting to v1.8.110 ([#1839](https://github.com/lbenie/reading-time-estimator/issues/1839)) ([8e9cf35](https://github.com/lbenie/reading-time-estimator/commit/8e9cf35d709ee6739d77045f75fda489be5a5605))
* **deps:** update dependency @lbenie/linting to v1.8.111 ([#1840](https://github.com/lbenie/reading-time-estimator/issues/1840)) ([db17e6b](https://github.com/lbenie/reading-time-estimator/commit/db17e6b5ba10cc15a74b7c306471ebc9bacc7a39))
* **deps:** update dependency @lbenie/linting to v1.8.112 ([#1841](https://github.com/lbenie/reading-time-estimator/issues/1841)) ([4a1ecf5](https://github.com/lbenie/reading-time-estimator/commit/4a1ecf504a586632a18a7b9499bc870f0fd64f2a))
* **deps:** update dependency @lbenie/linting to v1.8.113 ([#1843](https://github.com/lbenie/reading-time-estimator/issues/1843)) ([b2be7c6](https://github.com/lbenie/reading-time-estimator/commit/b2be7c62644649b4725e430b33ddee96f3b1329b))
* **deps:** update dependency @lbenie/linting to v1.8.114 ([#1849](https://github.com/lbenie/reading-time-estimator/issues/1849)) ([9cab409](https://github.com/lbenie/reading-time-estimator/commit/9cab4096f9af5942e08b24f8af550073e1847c05))
* **deps:** update dependency @lbenie/linting to v1.8.115 ([#1853](https://github.com/lbenie/reading-time-estimator/issues/1853)) ([086af3e](https://github.com/lbenie/reading-time-estimator/commit/086af3e7e48e56794918e9c32ddc04ff5a648341))
* **deps:** update dependency @lbenie/linting to v1.8.116 ([#1854](https://github.com/lbenie/reading-time-estimator/issues/1854)) ([d420e77](https://github.com/lbenie/reading-time-estimator/commit/d420e77fef35c6b47f21b7a04c7d1639045f0247))
* **deps:** update dependency @lbenie/linting to v1.8.117 ([#1855](https://github.com/lbenie/reading-time-estimator/issues/1855)) ([0d2ff7d](https://github.com/lbenie/reading-time-estimator/commit/0d2ff7dfc805c2560f9d93bd615b0d5c5a57872f))
* **deps:** update dependency @lbenie/linting to v1.8.118 ([#1858](https://github.com/lbenie/reading-time-estimator/issues/1858)) ([2cc1990](https://github.com/lbenie/reading-time-estimator/commit/2cc199065120c81fee6a3c0ec17f443c8752e77e))
* **deps:** update dependency @lbenie/linting to v1.8.119 ([#1859](https://github.com/lbenie/reading-time-estimator/issues/1859)) ([1358f05](https://github.com/lbenie/reading-time-estimator/commit/1358f05753b227bb37ba3ab697abadd31e2e4214))
* **deps:** update dependency @lbenie/linting to v1.8.120 ([#1867](https://github.com/lbenie/reading-time-estimator/issues/1867)) ([cd03e28](https://github.com/lbenie/reading-time-estimator/commit/cd03e28135ecf44e2d434716e7b12f09bc7f20cc))
* **deps:** update dependency @types/node to v22.13.13 ([#1837](https://github.com/lbenie/reading-time-estimator/issues/1837)) ([b96bd05](https://github.com/lbenie/reading-time-estimator/commit/b96bd05b56217aab7e220704f294e9e0cf846497))
* **deps:** update dependency @types/node to v22.13.14 ([#1844](https://github.com/lbenie/reading-time-estimator/issues/1844)) ([3a2d35d](https://github.com/lbenie/reading-time-estimator/commit/3a2d35d41728192a7fc3bb5f98d17cf4ff4ec5ca))
* **deps:** update dependency @types/node to v22.13.17 ([#1850](https://github.com/lbenie/reading-time-estimator/issues/1850)) ([9f70126](https://github.com/lbenie/reading-time-estimator/commit/9f701260b323fe19ca4aacddd99faf04b01dccb7))
* **deps:** update dependency @types/node to v22.14.0 ([#1852](https://github.com/lbenie/reading-time-estimator/issues/1852)) ([c2e41fb](https://github.com/lbenie/reading-time-estimator/commit/c2e41fbbf37dfd6ae09cad05a41201c43e44b086))
* **deps:** update dependency @types/node to v22.14.1 ([#1862](https://github.com/lbenie/reading-time-estimator/issues/1862)) ([055a522](https://github.com/lbenie/reading-time-estimator/commit/055a522634f8b33279e2dfe22d0e10f8830a8181))
* **deps:** update dependency @types/sanitize-html to v2.15.0 ([#1845](https://github.com/lbenie/reading-time-estimator/issues/1845)) ([cf3b00d](https://github.com/lbenie/reading-time-estimator/commit/cf3b00d001535e1ef4d74621d2dd6bc782b9dbc4))
* **deps:** update dependency rollup to v4.38.0 ([#1846](https://github.com/lbenie/reading-time-estimator/issues/1846)) ([904824e](https://github.com/lbenie/reading-time-estimator/commit/904824eb853743ad8c5b8a46889eadb0b55dabc2))
* **deps:** update dependency rollup to v4.39.0 ([#1851](https://github.com/lbenie/reading-time-estimator/issues/1851)) ([2d09346](https://github.com/lbenie/reading-time-estimator/commit/2d0934629e20c4bf99b654122b7f23f098119345))
* **deps:** update dependency rollup to v4.40.0 ([#1864](https://github.com/lbenie/reading-time-estimator/issues/1864)) ([1003cb2](https://github.com/lbenie/reading-time-estimator/commit/1003cb2792fb9b0c36627b68281a304705a89b64))
* **deps:** update dependency typescript to v5.8.3 ([#1856](https://github.com/lbenie/reading-time-estimator/issues/1856)) ([147b758](https://github.com/lbenie/reading-time-estimator/commit/147b7586ff3ee512edef89345133563ba7f13d57))
* **deps:** update dependency unplugin-auto-import to v19.1.2 ([#1842](https://github.com/lbenie/reading-time-estimator/issues/1842)) ([fbc925f](https://github.com/lbenie/reading-time-estimator/commit/fbc925f1d08f70d4a9910ebd320cd89076cafacd))
* **deps:** update dependency vite to v6.2.3 ([#1838](https://github.com/lbenie/reading-time-estimator/issues/1838)) ([09e38b0](https://github.com/lbenie/reading-time-estimator/commit/09e38b0f84b17f72354093104225af54aa4d66c9))
* **deps:** update dependency vite to v6.2.4 [security] ([#1848](https://github.com/lbenie/reading-time-estimator/issues/1848)) ([1a5e704](https://github.com/lbenie/reading-time-estimator/commit/1a5e70473c73ea5d0cfbf77bd07cbf8ad7be5fc6))
* **deps:** update dependency vite to v6.2.5 ([#1847](https://github.com/lbenie/reading-time-estimator/issues/1847)) ([c7d443f](https://github.com/lbenie/reading-time-estimator/commit/c7d443f060a7f6141814a1f5c255e656ca7a0ce7))
* **deps:** update dependency vite to v6.2.6 ([#1861](https://github.com/lbenie/reading-time-estimator/issues/1861)) ([beed0f7](https://github.com/lbenie/reading-time-estimator/commit/beed0f7e22c938523f392114f64064f7fd4a9cdf))

## [1.12.0](https://github.com/lbenie/reading-time-estimator/compare/v1.11.0...v1.12.0) (2025-03-23)

### :sparkles: Features

* strips HTML content from input ([#1835](https://github.com/lbenie/reading-time-estimator/issues/1835)) ([18763d1](https://github.com/lbenie/reading-time-estimator/commit/18763d15063fb33866c0378d624f7c3bdc3fc4b1))

### :white_check_mark: Chores

* fix unnecessary import and lint ([0e3a62d](https://github.com/lbenie/reading-time-estimator/commit/0e3a62dbe91c47b957affdee7956ddfe03283be1))
* latest node version codeql [skip ci] ([840b513](https://github.com/lbenie/reading-time-estimator/commit/840b513774ca35d89285230d0ac6a423a21badcb))
* **deps:** update dependency @lbenie/linting to v1.7.10 ([0d7088b](https://github.com/lbenie/reading-time-estimator/commit/0d7088bb00c33da1e4ba78757ec98fc2ccb6b7b2))
* **deps:** update dependency @lbenie/linting to v1.7.11 ([212ecc3](https://github.com/lbenie/reading-time-estimator/commit/212ecc3ac25ba05f74532d28c541cda73e622f25))
* **deps:** update dependency @lbenie/linting to v1.7.13 ([096169e](https://github.com/lbenie/reading-time-estimator/commit/096169e33b37580550c6d92e7dcfede229eee1de))
* **deps:** update dependency @lbenie/linting to v1.7.14 ([833f185](https://github.com/lbenie/reading-time-estimator/commit/833f185d8a46b3d638683b54f3c7d30a67a5a02b))
* **deps:** update dependency @lbenie/linting to v1.7.15 ([9d25424](https://github.com/lbenie/reading-time-estimator/commit/9d254245425a83b55a684bbbfed02d2104114764))
* **deps:** update dependency @lbenie/linting to v1.7.16 ([1065c2d](https://github.com/lbenie/reading-time-estimator/commit/1065c2d00d50f9339a6d202af71cc1217fcff108))
* **deps:** update dependency @lbenie/linting to v1.7.17 ([182af05](https://github.com/lbenie/reading-time-estimator/commit/182af05aa08faa8776216190e4bf9c382cbe19b6))
* **deps:** update dependency @lbenie/linting to v1.7.18 ([971394d](https://github.com/lbenie/reading-time-estimator/commit/971394df6e3c3fd698709c91b940fc6898fe9afe))
* **deps:** update dependency @lbenie/linting to v1.7.19 ([e8165f3](https://github.com/lbenie/reading-time-estimator/commit/e8165f34e35b7e679356402f55c19f85fc58bffc))
* **deps:** update dependency @lbenie/linting to v1.7.20 ([fe65de3](https://github.com/lbenie/reading-time-estimator/commit/fe65de3345310fd8b2ecd5042e91693b4e92195e))
* **deps:** update dependency @lbenie/linting to v1.7.21 ([94acbf6](https://github.com/lbenie/reading-time-estimator/commit/94acbf60c56ce917fbb40df47dd670c21735f3bb))
* **deps:** update dependency @lbenie/linting to v1.7.22 ([7f59326](https://github.com/lbenie/reading-time-estimator/commit/7f593262c01de0ee7124e5e0d3042bcab1e4908b))
* **deps:** update dependency @lbenie/linting to v1.7.23 ([e192563](https://github.com/lbenie/reading-time-estimator/commit/e1925632ac0f111388ac2353ff1f5fd330f55eef))
* **deps:** update dependency @lbenie/linting to v1.7.24 ([e0f22d0](https://github.com/lbenie/reading-time-estimator/commit/e0f22d013ccde25aa95ae4ea383315f552333f7e))
* **deps:** update dependency @lbenie/linting to v1.7.25 ([333c15f](https://github.com/lbenie/reading-time-estimator/commit/333c15fb8c97322e15cac5a1ba659438cbb0d3fb))
* **deps:** update dependency @lbenie/linting to v1.7.26 ([ccf69f6](https://github.com/lbenie/reading-time-estimator/commit/ccf69f6a349015e8ea0b361ee246365d1fe0a2bd))
* **deps:** update dependency @lbenie/linting to v1.7.27 ([d32abf3](https://github.com/lbenie/reading-time-estimator/commit/d32abf3ca2f138e5ed54a463724fcaf9f3f34418))
* **deps:** update dependency @lbenie/linting to v1.7.28 ([de175e2](https://github.com/lbenie/reading-time-estimator/commit/de175e2b1998b9ebc7c3fa7f3cea952315bff56a))
* **deps:** update dependency @lbenie/linting to v1.7.29 ([4bb2622](https://github.com/lbenie/reading-time-estimator/commit/4bb26221e0b0e95cf8d3e4b419255b953ced0a64))
* **deps:** update dependency @lbenie/linting to v1.7.30 ([790590f](https://github.com/lbenie/reading-time-estimator/commit/790590f747191b5e8d133ff7620cadcbc103e3db))
* **deps:** update dependency @lbenie/linting to v1.7.31 ([5ad3c62](https://github.com/lbenie/reading-time-estimator/commit/5ad3c6240ceffce31ffa48cae8dcda5bce82d993))
* **deps:** update dependency @lbenie/linting to v1.7.32 ([eddd72c](https://github.com/lbenie/reading-time-estimator/commit/eddd72cf4432855957167944892eb7c3e54924c3))
* **deps:** update dependency @lbenie/linting to v1.7.33 ([3fc2e5b](https://github.com/lbenie/reading-time-estimator/commit/3fc2e5b5065086c0d1a81871449303664819e4a9))
* **deps:** update dependency @lbenie/linting to v1.7.34 ([8ee65e2](https://github.com/lbenie/reading-time-estimator/commit/8ee65e2d11dc4eba5ed1f73ac044edaabe99b148))
* **deps:** update dependency @lbenie/linting to v1.7.35 ([ee43407](https://github.com/lbenie/reading-time-estimator/commit/ee43407401a83e20135b6942b21f288e1e56b0f8))
* **deps:** update dependency @lbenie/linting to v1.7.37 ([787f808](https://github.com/lbenie/reading-time-estimator/commit/787f808638c60623d88c7c95ce5e332b06cb6780))
* **deps:** update dependency @lbenie/linting to v1.7.38 ([658671e](https://github.com/lbenie/reading-time-estimator/commit/658671e5ac550ecca5063a238190750a3962bf5c))
* **deps:** update dependency @lbenie/linting to v1.7.39 ([ad43f0a](https://github.com/lbenie/reading-time-estimator/commit/ad43f0a0b1882eab2739d0944a3893e78c618944))
* **deps:** update dependency @lbenie/linting to v1.7.40 ([c993c43](https://github.com/lbenie/reading-time-estimator/commit/c993c439e133ddd385bc523950badd54a6ad8f31))
* **deps:** update dependency @lbenie/linting to v1.7.42 ([96c1f1b](https://github.com/lbenie/reading-time-estimator/commit/96c1f1bbba5885583b83a2c3958e5438adb70a4c))
* **deps:** update dependency @lbenie/linting to v1.7.43 ([338f59e](https://github.com/lbenie/reading-time-estimator/commit/338f59eaeaf28421bf7d72908870aa05b597ba99))
* **deps:** update dependency @lbenie/linting to v1.7.44 ([a58199e](https://github.com/lbenie/reading-time-estimator/commit/a58199ef14e246ab0201b37f4152d3e51b752638))
* **deps:** update dependency @lbenie/linting to v1.7.45 ([74cb2be](https://github.com/lbenie/reading-time-estimator/commit/74cb2be4e046116b176ec698202a88406d2d0a17))
* **deps:** update dependency @lbenie/linting to v1.7.47 ([2815f1e](https://github.com/lbenie/reading-time-estimator/commit/2815f1e0308c6496a649b785f079d64354de03cf))
* **deps:** update dependency @lbenie/linting to v1.7.48 ([483f42f](https://github.com/lbenie/reading-time-estimator/commit/483f42fe0742a1f37cb62454b53492c38c39f29e))
* **deps:** update dependency @lbenie/linting to v1.7.49 ([b661ea8](https://github.com/lbenie/reading-time-estimator/commit/b661ea839288d7a149d385053dfec040b7b62264))
* **deps:** update dependency @lbenie/linting to v1.7.50 ([9a48978](https://github.com/lbenie/reading-time-estimator/commit/9a48978f513b728f90c6da43aae76de022718e6a))
* **deps:** update dependency @lbenie/linting to v1.7.51 ([0fa3942](https://github.com/lbenie/reading-time-estimator/commit/0fa39429b2da926835ab7527b386d9e0dfc7bf48))
* **deps:** update dependency @lbenie/linting to v1.7.52 ([1fe8af0](https://github.com/lbenie/reading-time-estimator/commit/1fe8af097cfccabc652f510da1f3601f81ea2a96))
* **deps:** update dependency @lbenie/linting to v1.7.54 ([e1e2eef](https://github.com/lbenie/reading-time-estimator/commit/e1e2eef224e5c900d700b11205a58c78fd797dac))
* **deps:** update dependency @lbenie/linting to v1.7.56 ([f537d6f](https://github.com/lbenie/reading-time-estimator/commit/f537d6fd715b5018dfdc7bce1c91d17ef3202768))
* **deps:** update dependency @lbenie/linting to v1.7.57 ([1d82d54](https://github.com/lbenie/reading-time-estimator/commit/1d82d545a47dcf2261fc85200b5fd206978d3e4c))
* **deps:** update dependency @lbenie/linting to v1.7.58 ([45dc91a](https://github.com/lbenie/reading-time-estimator/commit/45dc91a2827d12e0ad8b97cf71e1e49f3b0174c9))
* **deps:** update dependency @lbenie/linting to v1.7.59 ([d6bfe97](https://github.com/lbenie/reading-time-estimator/commit/d6bfe9732d13c85e5447588fb85b5aa15880816d))
* **deps:** update dependency @lbenie/linting to v1.7.60 ([42ac92c](https://github.com/lbenie/reading-time-estimator/commit/42ac92c318348ea905a95d13201c376e80139547))
* **deps:** update dependency @lbenie/linting to v1.7.61 ([e2e457d](https://github.com/lbenie/reading-time-estimator/commit/e2e457d74d8264310d82a955deee81515d7f091d))
* **deps:** update dependency @lbenie/linting to v1.7.62 ([42f541c](https://github.com/lbenie/reading-time-estimator/commit/42f541cb7ac23d16c0f63f12a8ce08f5ec1b4343))
* **deps:** update dependency @lbenie/linting to v1.7.63 ([6522310](https://github.com/lbenie/reading-time-estimator/commit/65223108a9173029623d92993cb2238a9ef7d624))
* **deps:** update dependency @lbenie/linting to v1.7.64 ([c760735](https://github.com/lbenie/reading-time-estimator/commit/c760735cd6b07da518c930dee3a269ff21ac1525))
* **deps:** update dependency @lbenie/linting to v1.7.65 ([0785302](https://github.com/lbenie/reading-time-estimator/commit/07853022c5335fa11ab35a11019aad383a945e9c))
* **deps:** update dependency @lbenie/linting to v1.7.66 ([be771d9](https://github.com/lbenie/reading-time-estimator/commit/be771d9b1c0374c1c6eca40bcb19c051dc5b757c))
* **deps:** update dependency @lbenie/linting to v1.7.68 ([efdfd1c](https://github.com/lbenie/reading-time-estimator/commit/efdfd1cc083cab6da3b0e4d396b0aac418732514))
* **deps:** update dependency @lbenie/linting to v1.7.69 ([5a76ae7](https://github.com/lbenie/reading-time-estimator/commit/5a76ae784fe78ef6249b77afe8177323a9d54074))
* **deps:** update dependency @lbenie/linting to v1.7.7 ([5027572](https://github.com/lbenie/reading-time-estimator/commit/5027572ccf496ab9a564030d3fbb002dfd961597))
* **deps:** update dependency @lbenie/linting to v1.7.8 ([478a379](https://github.com/lbenie/reading-time-estimator/commit/478a3791eff81185a07e3e294e028950c776b993))
* **deps:** update dependency @lbenie/linting to v1.7.9 ([c962b0c](https://github.com/lbenie/reading-time-estimator/commit/c962b0cfd0e9c4ee0afdef29795aca7a71a1ce32))
* **deps:** update dependency @lbenie/linting to v1.8.100 ([#1818](https://github.com/lbenie/reading-time-estimator/issues/1818)) ([31b0d08](https://github.com/lbenie/reading-time-estimator/commit/31b0d088d762cd0976884640690cd1ba13bb269e))
* **deps:** update dependency @lbenie/linting to v1.8.101 ([#1820](https://github.com/lbenie/reading-time-estimator/issues/1820)) ([66b6ca9](https://github.com/lbenie/reading-time-estimator/commit/66b6ca941373e0c0f0dab9596bb21fc16d154d54))
* **deps:** update dependency @lbenie/linting to v1.8.102 ([#1822](https://github.com/lbenie/reading-time-estimator/issues/1822)) ([fbce0d8](https://github.com/lbenie/reading-time-estimator/commit/fbce0d86ce759fb9beb9e3130e0008c6ca6a9b8c))
* **deps:** update dependency @lbenie/linting to v1.8.103 ([#1825](https://github.com/lbenie/reading-time-estimator/issues/1825)) ([61047dd](https://github.com/lbenie/reading-time-estimator/commit/61047ddff5b71be04f83d677f0a4ad842db2cca1))
* **deps:** update dependency @lbenie/linting to v1.8.104 ([#1826](https://github.com/lbenie/reading-time-estimator/issues/1826)) ([5d9bb2d](https://github.com/lbenie/reading-time-estimator/commit/5d9bb2d15111867d4e46b924824018d682b353ab))
* **deps:** update dependency @lbenie/linting to v1.8.105 ([#1828](https://github.com/lbenie/reading-time-estimator/issues/1828)) ([85f99a2](https://github.com/lbenie/reading-time-estimator/commit/85f99a209483d8c4aeabe73564a6b5322a905a3e))
* **deps:** update dependency @lbenie/linting to v1.8.106 ([#1830](https://github.com/lbenie/reading-time-estimator/issues/1830)) ([77777d7](https://github.com/lbenie/reading-time-estimator/commit/77777d7df5df408d11ba23c2cf12f8828a33da1b))
* **deps:** update dependency @lbenie/linting to v1.8.107 ([#1831](https://github.com/lbenie/reading-time-estimator/issues/1831)) ([ef447a5](https://github.com/lbenie/reading-time-estimator/commit/ef447a582b1f7a994f5cf0c0df17dd1baa33b99d))
* **deps:** update dependency @lbenie/linting to v1.8.108 ([#1833](https://github.com/lbenie/reading-time-estimator/issues/1833)) ([58f4d78](https://github.com/lbenie/reading-time-estimator/commit/58f4d78a20bab6dece9373d9eea2c0a3831e39e5))
* **deps:** update dependency @lbenie/linting to v1.8.11 ([a3dcead](https://github.com/lbenie/reading-time-estimator/commit/a3dcead319c1fd0b079b6ef09658bd259ab03f3b))
* **deps:** update dependency @lbenie/linting to v1.8.12 ([b97adee](https://github.com/lbenie/reading-time-estimator/commit/b97adee91f949557f8a8c0bcb2c0623aceaf3bde))
* **deps:** update dependency @lbenie/linting to v1.8.13 ([0ec18d9](https://github.com/lbenie/reading-time-estimator/commit/0ec18d9a835798addeb384a6eb4b1722170876de))
* **deps:** update dependency @lbenie/linting to v1.8.14 ([2920c38](https://github.com/lbenie/reading-time-estimator/commit/2920c38ac46213041702ed2df811d19da89a4307))
* **deps:** update dependency @lbenie/linting to v1.8.15 ([52a41fe](https://github.com/lbenie/reading-time-estimator/commit/52a41feb8e415420527f265ad806c71313deb686))
* **deps:** update dependency @lbenie/linting to v1.8.16 ([24bb668](https://github.com/lbenie/reading-time-estimator/commit/24bb668994eccbde5a4f22ecc31ccb237b7c34b6))
* **deps:** update dependency @lbenie/linting to v1.8.17 ([ab6160f](https://github.com/lbenie/reading-time-estimator/commit/ab6160fa91c32426ec794b1d806298e92a482fa1))
* **deps:** update dependency @lbenie/linting to v1.8.18 ([bc6388d](https://github.com/lbenie/reading-time-estimator/commit/bc6388d3d6fa239398434ec203c50e7c66c8a87c))
* **deps:** update dependency @lbenie/linting to v1.8.19 ([3514b7b](https://github.com/lbenie/reading-time-estimator/commit/3514b7b5d540a7f578b0372863545dacdfc781b4))
* **deps:** update dependency @lbenie/linting to v1.8.20 ([cba1151](https://github.com/lbenie/reading-time-estimator/commit/cba115114a9c47f82900bc39eb1ef873595a97b1))
* **deps:** update dependency @lbenie/linting to v1.8.21 ([38a1ce7](https://github.com/lbenie/reading-time-estimator/commit/38a1ce79a182e4bc879aee5e8dfd944ff3e1d82d))
* **deps:** update dependency @lbenie/linting to v1.8.22 ([4b8f01d](https://github.com/lbenie/reading-time-estimator/commit/4b8f01dbc1d04f3516dc022cc39c7afe4f4bc955))
* **deps:** update dependency @lbenie/linting to v1.8.23 ([c97763f](https://github.com/lbenie/reading-time-estimator/commit/c97763f5a8f5be6822ea8127031ca1f4ccefd61d))
* **deps:** update dependency @lbenie/linting to v1.8.24 ([d7b62ef](https://github.com/lbenie/reading-time-estimator/commit/d7b62efddec84a73cc36a1bb9645566cf7363220))
* **deps:** update dependency @lbenie/linting to v1.8.25 ([78591b8](https://github.com/lbenie/reading-time-estimator/commit/78591b83b89f79f07251fe407ec6c3daa5f5d75e))
* **deps:** update dependency @lbenie/linting to v1.8.27 ([eb66122](https://github.com/lbenie/reading-time-estimator/commit/eb661225321b820d16528eeed89c9a7bd9cd25fc))
* **deps:** update dependency @lbenie/linting to v1.8.28 ([ac29f53](https://github.com/lbenie/reading-time-estimator/commit/ac29f53a7d62ca63a00bd0727c98c8728638ac69))
* **deps:** update dependency @lbenie/linting to v1.8.29 ([be6d9fa](https://github.com/lbenie/reading-time-estimator/commit/be6d9fa98b22ceefe6a8f637dbcf7c9443fbbb67))
* **deps:** update dependency @lbenie/linting to v1.8.30 ([04a0476](https://github.com/lbenie/reading-time-estimator/commit/04a0476e687228e979d2c0994884a7d0924c0c8a))
* **deps:** update dependency @lbenie/linting to v1.8.31 ([b4c30a1](https://github.com/lbenie/reading-time-estimator/commit/b4c30a1d9de0ccde9ca2c49b24bc2af5894ce6c7))
* **deps:** update dependency @lbenie/linting to v1.8.33 ([b8eea26](https://github.com/lbenie/reading-time-estimator/commit/b8eea264801ce860ea935ee0906244c58e073318))
* **deps:** update dependency @lbenie/linting to v1.8.34 ([3083270](https://github.com/lbenie/reading-time-estimator/commit/308327060a456cf7427fc3254dba29c466d375b1))
* **deps:** update dependency @lbenie/linting to v1.8.36 ([2084dbc](https://github.com/lbenie/reading-time-estimator/commit/2084dbc41e65321dbb870e625291683151a88889))
* **deps:** update dependency @lbenie/linting to v1.8.37 ([2d82fd7](https://github.com/lbenie/reading-time-estimator/commit/2d82fd7b5ce2edb672f8c37c99e1b420bbffa998))
* **deps:** update dependency @lbenie/linting to v1.8.38 ([c392848](https://github.com/lbenie/reading-time-estimator/commit/c392848ecb116b45598868c8fbdeb47b9895e741))
* **deps:** update dependency @lbenie/linting to v1.8.39 ([a49c91c](https://github.com/lbenie/reading-time-estimator/commit/a49c91cc85bf0c01cf247cf64fce3c9bb30dfe85))
* **deps:** update dependency @lbenie/linting to v1.8.40 ([cffcd33](https://github.com/lbenie/reading-time-estimator/commit/cffcd339bdc03cd3e80b296f007e099d9c444f01))
* **deps:** update dependency @lbenie/linting to v1.8.41 ([4b888ef](https://github.com/lbenie/reading-time-estimator/commit/4b888efb654a401409653473ed686258c1b338bc))
* **deps:** update dependency @lbenie/linting to v1.8.43 ([c06f734](https://github.com/lbenie/reading-time-estimator/commit/c06f734121710df6f7915ce925b507048b18457a))
* **deps:** update dependency @lbenie/linting to v1.8.44 ([bd88ebe](https://github.com/lbenie/reading-time-estimator/commit/bd88ebebb132fa06997ea04255694c98f034e04a))
* **deps:** update dependency @lbenie/linting to v1.8.45 ([#1689](https://github.com/lbenie/reading-time-estimator/issues/1689)) ([b4da39c](https://github.com/lbenie/reading-time-estimator/commit/b4da39c3cd7cf6aa6f685a660e34282518268e8a))
* **deps:** update dependency @lbenie/linting to v1.8.46 ([#1691](https://github.com/lbenie/reading-time-estimator/issues/1691)) ([5edacda](https://github.com/lbenie/reading-time-estimator/commit/5edacdadf5b1a9783a8215a85a3b5f58ad149181))
* **deps:** update dependency @lbenie/linting to v1.8.47 ([#1692](https://github.com/lbenie/reading-time-estimator/issues/1692)) ([9c6bea6](https://github.com/lbenie/reading-time-estimator/commit/9c6bea684c46ad85db5e0f5309e99dba0e642c6a))
* **deps:** update dependency @lbenie/linting to v1.8.48 ([#1693](https://github.com/lbenie/reading-time-estimator/issues/1693)) ([b8bbdf9](https://github.com/lbenie/reading-time-estimator/commit/b8bbdf9f6e0d7618b7115a1b35a7dff42b8a4daa))
* **deps:** update dependency @lbenie/linting to v1.8.49 ([#1699](https://github.com/lbenie/reading-time-estimator/issues/1699)) ([61e4f11](https://github.com/lbenie/reading-time-estimator/commit/61e4f11fc3fdb06a0d5e2545c2994883836b2ee6))
* **deps:** update dependency @lbenie/linting to v1.8.50 ([#1707](https://github.com/lbenie/reading-time-estimator/issues/1707)) ([69d7715](https://github.com/lbenie/reading-time-estimator/commit/69d77158543708c27fa7a92b10ad9f5a8d496a6d))
* **deps:** update dependency @lbenie/linting to v1.8.51 ([#1709](https://github.com/lbenie/reading-time-estimator/issues/1709)) ([a1fa652](https://github.com/lbenie/reading-time-estimator/commit/a1fa6520a97debc80ef0b504510eff7961035dc5))
* **deps:** update dependency @lbenie/linting to v1.8.53 ([#1711](https://github.com/lbenie/reading-time-estimator/issues/1711)) ([a1b00b4](https://github.com/lbenie/reading-time-estimator/commit/a1b00b4acbfd272488a5e37b20e12972e005fb83))
* **deps:** update dependency @lbenie/linting to v1.8.54 ([#1715](https://github.com/lbenie/reading-time-estimator/issues/1715)) ([d11a201](https://github.com/lbenie/reading-time-estimator/commit/d11a201e16de62803aaea21d23efbf12ca2df19c))
* **deps:** update dependency @lbenie/linting to v1.8.55 ([#1717](https://github.com/lbenie/reading-time-estimator/issues/1717)) ([3431601](https://github.com/lbenie/reading-time-estimator/commit/343160139c3fce57d3383539c1970e8789cbf92b))
* **deps:** update dependency @lbenie/linting to v1.8.56 ([#1719](https://github.com/lbenie/reading-time-estimator/issues/1719)) ([428c3c2](https://github.com/lbenie/reading-time-estimator/commit/428c3c22c98c50c26aa670826370d29c8de5bc40))
* **deps:** update dependency @lbenie/linting to v1.8.57 ([#1720](https://github.com/lbenie/reading-time-estimator/issues/1720)) ([ea60ff1](https://github.com/lbenie/reading-time-estimator/commit/ea60ff1459275ca02245255bbe393090ae8b01c4))
* **deps:** update dependency @lbenie/linting to v1.8.58 ([#1723](https://github.com/lbenie/reading-time-estimator/issues/1723)) ([81ace48](https://github.com/lbenie/reading-time-estimator/commit/81ace48653fd2b186b2af53a0e493e92acbd7a5c))
* **deps:** update dependency @lbenie/linting to v1.8.59 ([#1724](https://github.com/lbenie/reading-time-estimator/issues/1724)) ([0da88a7](https://github.com/lbenie/reading-time-estimator/commit/0da88a74703486c7fe7744f472d2e7efa2b75966))
* **deps:** update dependency @lbenie/linting to v1.8.60 ([#1727](https://github.com/lbenie/reading-time-estimator/issues/1727)) ([5a420fc](https://github.com/lbenie/reading-time-estimator/commit/5a420fccee6ceb8ff08399536300ae842f1af422))
* **deps:** update dependency @lbenie/linting to v1.8.61 ([#1728](https://github.com/lbenie/reading-time-estimator/issues/1728)) ([9ec2cac](https://github.com/lbenie/reading-time-estimator/commit/9ec2cac0a2397691d2f79dce7e6c28b9a39211ba))
* **deps:** update dependency @lbenie/linting to v1.8.62 ([#1731](https://github.com/lbenie/reading-time-estimator/issues/1731)) ([f5c6dc9](https://github.com/lbenie/reading-time-estimator/commit/f5c6dc9ef2461f1fde9d99bc497a232f93588ebe))
* **deps:** update dependency @lbenie/linting to v1.8.63 ([#1732](https://github.com/lbenie/reading-time-estimator/issues/1732)) ([191f58a](https://github.com/lbenie/reading-time-estimator/commit/191f58ac44194afd0c84c79e617121ec640cc70f))
* **deps:** update dependency @lbenie/linting to v1.8.64 ([#1733](https://github.com/lbenie/reading-time-estimator/issues/1733)) ([95038ac](https://github.com/lbenie/reading-time-estimator/commit/95038ac0772a89e79a5ce6990beee4bd88385ad7))
* **deps:** update dependency @lbenie/linting to v1.8.65 ([#1738](https://github.com/lbenie/reading-time-estimator/issues/1738)) ([c6ecd5b](https://github.com/lbenie/reading-time-estimator/commit/c6ecd5bde2938ac37ac5489c21ae5b6a035c3285))
* **deps:** update dependency @lbenie/linting to v1.8.66 ([#1741](https://github.com/lbenie/reading-time-estimator/issues/1741)) ([239e72f](https://github.com/lbenie/reading-time-estimator/commit/239e72fbe943a4e863d89bca017453b5a38a7227))
* **deps:** update dependency @lbenie/linting to v1.8.67 ([#1751](https://github.com/lbenie/reading-time-estimator/issues/1751)) ([f99c8d2](https://github.com/lbenie/reading-time-estimator/commit/f99c8d238f638898e8b998b7fbbc0b4192fa60da))
* **deps:** update dependency @lbenie/linting to v1.8.68 ([#1754](https://github.com/lbenie/reading-time-estimator/issues/1754)) ([f7f9709](https://github.com/lbenie/reading-time-estimator/commit/f7f97090d2bbb5252d8a9f3d4bf8cbdf7b5d1518))
* **deps:** update dependency @lbenie/linting to v1.8.69 ([#1756](https://github.com/lbenie/reading-time-estimator/issues/1756)) ([f0d37ff](https://github.com/lbenie/reading-time-estimator/commit/f0d37ffc28b31e7d6d878518f3349369b69e93e9))
* **deps:** update dependency @lbenie/linting to v1.8.70 ([#1758](https://github.com/lbenie/reading-time-estimator/issues/1758)) ([5e38cd3](https://github.com/lbenie/reading-time-estimator/commit/5e38cd3389c49ec4e5812fbef4163be066d88f09))
* **deps:** update dependency @lbenie/linting to v1.8.76 ([#1759](https://github.com/lbenie/reading-time-estimator/issues/1759)) ([fe69fe6](https://github.com/lbenie/reading-time-estimator/commit/fe69fe6d09a1775331097df8bf081940df8eb109))
* **deps:** update dependency @lbenie/linting to v1.8.77 ([#1762](https://github.com/lbenie/reading-time-estimator/issues/1762)) ([d2e8f80](https://github.com/lbenie/reading-time-estimator/commit/d2e8f8022d6dbd11addd409bcf3948f3b5bb96f7))
* **deps:** update dependency @lbenie/linting to v1.8.78 ([#1766](https://github.com/lbenie/reading-time-estimator/issues/1766)) ([a500879](https://github.com/lbenie/reading-time-estimator/commit/a500879fa76312ef763cd4615912b1b45ab3f7b6))
* **deps:** update dependency @lbenie/linting to v1.8.79 ([#1767](https://github.com/lbenie/reading-time-estimator/issues/1767)) ([93a1591](https://github.com/lbenie/reading-time-estimator/commit/93a1591905e473d158fd8fd4cc29bb2409ac4a12))
* **deps:** update dependency @lbenie/linting to v1.8.80 ([#1771](https://github.com/lbenie/reading-time-estimator/issues/1771)) ([b2621a5](https://github.com/lbenie/reading-time-estimator/commit/b2621a570419ed99601fa2eff26b6249f31b9d02))
* **deps:** update dependency @lbenie/linting to v1.8.81 ([#1775](https://github.com/lbenie/reading-time-estimator/issues/1775)) ([328725f](https://github.com/lbenie/reading-time-estimator/commit/328725fade1f2e9d8d8ceb6298fba258228bd734))
* **deps:** update dependency @lbenie/linting to v1.8.83 ([#1777](https://github.com/lbenie/reading-time-estimator/issues/1777)) ([3412d69](https://github.com/lbenie/reading-time-estimator/commit/3412d69f07675c8311410068a6a7d418e8ddb919))
* **deps:** update dependency @lbenie/linting to v1.8.85 ([#1778](https://github.com/lbenie/reading-time-estimator/issues/1778)) ([aeb84e7](https://github.com/lbenie/reading-time-estimator/commit/aeb84e7572d81aa1376850811abcde87046039fe))
* **deps:** update dependency @lbenie/linting to v1.8.86 ([#1784](https://github.com/lbenie/reading-time-estimator/issues/1784)) ([872cc7e](https://github.com/lbenie/reading-time-estimator/commit/872cc7ecbfe6ae9176d07f0e069903e6ed1dea1e))
* **deps:** update dependency @lbenie/linting to v1.8.87 ([#1792](https://github.com/lbenie/reading-time-estimator/issues/1792)) ([2ef81c8](https://github.com/lbenie/reading-time-estimator/commit/2ef81c8d4c21bb249fcb297cf3f23d1e215a276f))
* **deps:** update dependency @lbenie/linting to v1.8.89 ([#1794](https://github.com/lbenie/reading-time-estimator/issues/1794)) ([f3dd411](https://github.com/lbenie/reading-time-estimator/commit/f3dd411d49d9580197977948e5d8706e63b5fabf))
* **deps:** update dependency @lbenie/linting to v1.8.91 ([#1795](https://github.com/lbenie/reading-time-estimator/issues/1795)) ([258aa84](https://github.com/lbenie/reading-time-estimator/commit/258aa8420d3cb3362c49d7310b90562ff497a221))
* **deps:** update dependency @lbenie/linting to v1.8.92 ([#1796](https://github.com/lbenie/reading-time-estimator/issues/1796)) ([51542dc](https://github.com/lbenie/reading-time-estimator/commit/51542dc130cd56fb71b13a628756b2ddbcb64b3d))
* **deps:** update dependency @lbenie/linting to v1.8.93 ([#1798](https://github.com/lbenie/reading-time-estimator/issues/1798)) ([4ce2f91](https://github.com/lbenie/reading-time-estimator/commit/4ce2f912f45119f1cb7f9af0acff58ce055d54ad))
* **deps:** update dependency @lbenie/linting to v1.8.94 ([#1804](https://github.com/lbenie/reading-time-estimator/issues/1804)) ([8453e64](https://github.com/lbenie/reading-time-estimator/commit/8453e64e80161064301be63bab97c228c4261ab6))
* **deps:** update dependency @lbenie/linting to v1.8.95 ([#1806](https://github.com/lbenie/reading-time-estimator/issues/1806)) ([10faad2](https://github.com/lbenie/reading-time-estimator/commit/10faad20efeae74c72fabe8cf3ae1cf50727b05d))
* **deps:** update dependency @lbenie/linting to v1.8.96 ([#1808](https://github.com/lbenie/reading-time-estimator/issues/1808)) ([b5b5828](https://github.com/lbenie/reading-time-estimator/commit/b5b5828d4fd4262ba952d17614913e292ce6ffb2))
* **deps:** update dependency @lbenie/linting to v1.8.97 ([#1809](https://github.com/lbenie/reading-time-estimator/issues/1809)) ([beef8c0](https://github.com/lbenie/reading-time-estimator/commit/beef8c04769d44520823cef474967e3cf9952511))
* **deps:** update dependency @lbenie/linting to v1.8.98 ([#1810](https://github.com/lbenie/reading-time-estimator/issues/1810)) ([3f585af](https://github.com/lbenie/reading-time-estimator/commit/3f585afcbbd19a91c45a31c5ccb41a1de75de8cf))
* **deps:** update dependency @lbenie/linting to v1.8.99 ([#1815](https://github.com/lbenie/reading-time-estimator/issues/1815)) ([6509d4f](https://github.com/lbenie/reading-time-estimator/commit/6509d4f5ca888336ff70fdfd60eeff4563270a05))
* **deps:** update dependency @rollup/plugin-typescript to v12.1.1 ([71789b9](https://github.com/lbenie/reading-time-estimator/commit/71789b90c08c1dd265cc7daa7d13a016a96788d3))
* **deps:** update dependency @rollup/plugin-typescript to v12.1.2 ([#1729](https://github.com/lbenie/reading-time-estimator/issues/1729)) ([89f1959](https://github.com/lbenie/reading-time-estimator/commit/89f19597282f912c2256e5f73504d5fdf4ca53e4))
* **deps:** update dependency @rollup/plugin-typescript to v12 ([1477124](https://github.com/lbenie/reading-time-estimator/commit/1477124041b9e20f8bf5194bb5b4c95f3414f367))
* **deps:** update dependency @semantic-release/github to v10.0.3 ([4e16a70](https://github.com/lbenie/reading-time-estimator/commit/4e16a706da821b63ca2e87b20730c0657220d097))
* **deps:** update dependency @semantic-release/github to v10.0.4 ([842af00](https://github.com/lbenie/reading-time-estimator/commit/842af00b18bb23147cfbfbf81b8ae635e879b5b4))
* **deps:** update dependency @semantic-release/github to v10.0.5 ([a5ce60a](https://github.com/lbenie/reading-time-estimator/commit/a5ce60a31ff3d2b6b18d828121f197a069193bc2))
* **deps:** update dependency @semantic-release/github to v10.0.6 ([09a17ab](https://github.com/lbenie/reading-time-estimator/commit/09a17ab91fd7ba7146f207bb10534341a51dba4c))
* **deps:** update dependency @semantic-release/github to v10.0.7 ([8bd53dd](https://github.com/lbenie/reading-time-estimator/commit/8bd53dda09588dc8fb65891c15cb374ea4e82649))
* **deps:** update dependency @semantic-release/github to v10.1.0 ([8c4c3f3](https://github.com/lbenie/reading-time-estimator/commit/8c4c3f34d8b4d13bac7e6892bf85c7af0ade96d1))
* **deps:** update dependency @semantic-release/github to v10.1.1 ([e65b4ca](https://github.com/lbenie/reading-time-estimator/commit/e65b4caa16e29bb497025d5f9dec76b12820ed49))
* **deps:** update dependency @semantic-release/github to v10.1.2 ([522bd96](https://github.com/lbenie/reading-time-estimator/commit/522bd96d774b9904f369e92a9885a780a22243ca))
* **deps:** update dependency @semantic-release/github to v10.1.3 ([581cbe6](https://github.com/lbenie/reading-time-estimator/commit/581cbe63a5d6e4a11442a007379600d4274ece90))
* **deps:** update dependency @semantic-release/github to v10.1.4 ([2a0c7ba](https://github.com/lbenie/reading-time-estimator/commit/2a0c7ba369b2b79393b10d5881f7ae4e0b329ca3))
* **deps:** update dependency @semantic-release/github to v10.1.5 ([7db5be6](https://github.com/lbenie/reading-time-estimator/commit/7db5be61bc0886afca99e9caa1cb1386986162e0))
* **deps:** update dependency @semantic-release/github to v10.1.6 ([ece5106](https://github.com/lbenie/reading-time-estimator/commit/ece510632add0561a140004d30baf70c3aa07da1))
* **deps:** update dependency @semantic-release/github to v10.1.7 ([8badd66](https://github.com/lbenie/reading-time-estimator/commit/8badd66b43bf5077da608790bd084758c6a10ef1))
* **deps:** update dependency @semantic-release/github to v10.3.0 ([0b43b91](https://github.com/lbenie/reading-time-estimator/commit/0b43b9172cae12e7cc819aa79a285826710b70ef))
* **deps:** update dependency @semantic-release/github to v10.3.1 ([1899bf4](https://github.com/lbenie/reading-time-estimator/commit/1899bf4259f590e406cbb32b34c224bf97847675))
* **deps:** update dependency @semantic-release/github to v10.3.2 ([142629c](https://github.com/lbenie/reading-time-estimator/commit/142629c91d56e213c2a99ca80232abe9add9134e))
* **deps:** update dependency @semantic-release/github to v10.3.3 ([35ac5e1](https://github.com/lbenie/reading-time-estimator/commit/35ac5e11a01bfca72aa5fd52e7eff65e9168dfe6))
* **deps:** update dependency @semantic-release/github to v10.3.4 ([e25f2f9](https://github.com/lbenie/reading-time-estimator/commit/e25f2f951eaa0c1f6376aa75dd67f1cbf1922914))
* **deps:** update dependency @semantic-release/github to v10.3.5 ([a7b64b7](https://github.com/lbenie/reading-time-estimator/commit/a7b64b79b5bd304001f3698f8846278e49bce431))
* **deps:** update dependency @semantic-release/github to v11.0.1 ([63befb5](https://github.com/lbenie/reading-time-estimator/commit/63befb590b04a55dea31931e7e68ae5f298f7404))
* **deps:** update dependency @semantic-release/github to v11 ([6255e4d](https://github.com/lbenie/reading-time-estimator/commit/6255e4db970572c6490a6e941eeb8a084f484966))
* **deps:** update dependency @semantic-release/release-notes-generator to v14.0.1 ([e62d3d1](https://github.com/lbenie/reading-time-estimator/commit/e62d3d17c6b25a8bdabacd22b4a06986a2749a58))
* **deps:** update dependency @semantic-release/release-notes-generator to v14.0.2 ([#1730](https://github.com/lbenie/reading-time-estimator/issues/1730)) ([2634782](https://github.com/lbenie/reading-time-estimator/commit/263478293b0762190994edb98d9c7a7df8e4cc4f))
* **deps:** update dependency @semantic-release/release-notes-generator to v14.0.3 ([#1746](https://github.com/lbenie/reading-time-estimator/issues/1746)) ([8b79976](https://github.com/lbenie/reading-time-estimator/commit/8b79976bee656142083a4ca35939766a2f29bf03))
* **deps:** update dependency @semantic-release/release-notes-generator to v14 ([63aaef4](https://github.com/lbenie/reading-time-estimator/commit/63aaef450df0c2239b979ccea7f864da5f810c53))
* **deps:** update dependency @types/node to v20.12.10 ([b7d9b45](https://github.com/lbenie/reading-time-estimator/commit/b7d9b456a6cec24767eccd2a9bf228a4adcd3c28))
* **deps:** update dependency @types/node to v20.12.11 ([94ccee9](https://github.com/lbenie/reading-time-estimator/commit/94ccee9ebffeb6184886998bab824441ca66491c))
* **deps:** update dependency @types/node to v20.12.12 ([6f78fa6](https://github.com/lbenie/reading-time-estimator/commit/6f78fa6735f21f9e730ea535aec1de4bd8b364ac))
* **deps:** update dependency @types/node to v20.12.13 ([491433d](https://github.com/lbenie/reading-time-estimator/commit/491433db1d2270a95b6091bf8fc63c7f829ddb3a))
* **deps:** update dependency @types/node to v20.12.3 ([18e5418](https://github.com/lbenie/reading-time-estimator/commit/18e5418cb1460bd8b6bb45a5b17dec664ee8a460))
* **deps:** update dependency @types/node to v20.12.4 ([cf5539d](https://github.com/lbenie/reading-time-estimator/commit/cf5539d6c74fe7e974588b30dd8ee42d82bb8e0f))
* **deps:** update dependency @types/node to v20.12.5 ([d409697](https://github.com/lbenie/reading-time-estimator/commit/d409697c4d0eaf19b9d52de1afa096b23b325d19))
* **deps:** update dependency @types/node to v20.12.6 ([9403a05](https://github.com/lbenie/reading-time-estimator/commit/9403a0507674c92a250cb49b37bd6090b27593ae))
* **deps:** update dependency @types/node to v20.12.7 ([0b28184](https://github.com/lbenie/reading-time-estimator/commit/0b28184e460528bee85a5f90fb0e9d66194e08a5))
* **deps:** update dependency @types/node to v20.12.8 ([1d18f8a](https://github.com/lbenie/reading-time-estimator/commit/1d18f8a0dde3c1464438f6e02f93be0a04970ae3))
* **deps:** update dependency @types/node to v20.13.0 ([b42ad4b](https://github.com/lbenie/reading-time-estimator/commit/b42ad4be5292b5a2fd553575a43778c45d8b9cee))
* **deps:** update dependency @types/node to v20.14.0 ([578eaf6](https://github.com/lbenie/reading-time-estimator/commit/578eaf645133b1c6d4d19018ff2eab22e7ea68d6))
* **deps:** update dependency @types/node to v20.14.10 ([93b2f08](https://github.com/lbenie/reading-time-estimator/commit/93b2f08bf7ffff1a5590f1a7c671f4ba6dba1b0e))
* **deps:** update dependency @types/node to v20.14.11 ([12da0a0](https://github.com/lbenie/reading-time-estimator/commit/12da0a0d4812ce8e76aa3a25af9db765cafb423c))
* **deps:** update dependency @types/node to v20.14.12 ([56d51e5](https://github.com/lbenie/reading-time-estimator/commit/56d51e53366ce64024ee59425b9e892f1470df36))
* **deps:** update dependency @types/node to v20.14.13 ([1ee8e27](https://github.com/lbenie/reading-time-estimator/commit/1ee8e2774d763a42b585c7bd4241f4263b8f1f66))
* **deps:** update dependency @types/node to v20.14.1 ([14523df](https://github.com/lbenie/reading-time-estimator/commit/14523df6cf819b017403e44d93041682452c294e))
* **deps:** update dependency @types/node to v20.14.2 ([5f31ec0](https://github.com/lbenie/reading-time-estimator/commit/5f31ec009ddc5096a8ceadc9c3b72d1af7e7b979))
* **deps:** update dependency @types/node to v20.14.4 ([c31a0d9](https://github.com/lbenie/reading-time-estimator/commit/c31a0d9c2f00d2e0e548f1577b14447a0395d528))
* **deps:** update dependency @types/node to v20.14.5 ([cce8b93](https://github.com/lbenie/reading-time-estimator/commit/cce8b93e1a9df4fe6c1c950248d3fe82fb2bc66c))
* **deps:** update dependency @types/node to v20.14.6 ([46111c3](https://github.com/lbenie/reading-time-estimator/commit/46111c3f029e4543496fe1541d301919efd75094))
* **deps:** update dependency @types/node to v20.14.7 ([2a6daaa](https://github.com/lbenie/reading-time-estimator/commit/2a6daaafff235d9ba0155bc1a0d60ecd558b19f0))
* **deps:** update dependency @types/node to v20.14.8 ([c580a06](https://github.com/lbenie/reading-time-estimator/commit/c580a0687b040978d3b8b07f209da8fb10d631f9))
* **deps:** update dependency @types/node to v20.14.9 ([0212e7a](https://github.com/lbenie/reading-time-estimator/commit/0212e7a031a04d502a26b6a1efa7550b39b922bf))
* **deps:** update dependency @types/node to v22.0.2 ([db620da](https://github.com/lbenie/reading-time-estimator/commit/db620da25794975b60087932c10d583f176aaecf))
* **deps:** update dependency @types/node to v22.1.0 ([d3a19a4](https://github.com/lbenie/reading-time-estimator/commit/d3a19a426ba732c8735f5734d7065e7a4c0f6b2e))
* **deps:** update dependency @types/node to v22.10.0 ([#1708](https://github.com/lbenie/reading-time-estimator/issues/1708)) ([07be568](https://github.com/lbenie/reading-time-estimator/commit/07be5680b3e9cd61a8669de4e5ed29a4e267e068))
* **deps:** update dependency @types/node to v22.10.1 ([#1714](https://github.com/lbenie/reading-time-estimator/issues/1714)) ([4d256f5](https://github.com/lbenie/reading-time-estimator/commit/4d256f514331cf783dae12e37200143ed1daab1f))
* **deps:** update dependency @types/node to v22.10.10 ([#1774](https://github.com/lbenie/reading-time-estimator/issues/1774)) ([dd3020e](https://github.com/lbenie/reading-time-estimator/commit/dd3020e045087c34e9998a52ec4821ebc41de261))
* **deps:** update dependency @types/node to v22.10.2 ([#1725](https://github.com/lbenie/reading-time-estimator/issues/1725)) ([8533c34](https://github.com/lbenie/reading-time-estimator/commit/8533c346576a8d2de207fad29050322f17da5cee))
* **deps:** update dependency @types/node to v22.10.3 ([#1743](https://github.com/lbenie/reading-time-estimator/issues/1743)) ([55fc878](https://github.com/lbenie/reading-time-estimator/commit/55fc878eb976d4776d167b0e7536510897040d36))
* **deps:** update dependency @types/node to v22.10.4 ([#1744](https://github.com/lbenie/reading-time-estimator/issues/1744)) ([cb07ed9](https://github.com/lbenie/reading-time-estimator/commit/cb07ed9e470b15e34c0f1cf4ec38f660a38bf116))
* **deps:** update dependency @types/node to v22.10.5 ([#1748](https://github.com/lbenie/reading-time-estimator/issues/1748)) ([9a39bff](https://github.com/lbenie/reading-time-estimator/commit/9a39bffba433e4b211cdf54873655afe7d4ee84f))
* **deps:** update dependency @types/node to v22.10.6 ([#1760](https://github.com/lbenie/reading-time-estimator/issues/1760)) ([992f08e](https://github.com/lbenie/reading-time-estimator/commit/992f08e73967cbbfd7e6480a14f980eb4298e0b7))
* **deps:** update dependency @types/node to v22.10.7 ([#1763](https://github.com/lbenie/reading-time-estimator/issues/1763)) ([fd0311b](https://github.com/lbenie/reading-time-estimator/commit/fd0311b9f8af8effcbabb5acdd54ed255ebac40c))
* **deps:** update dependency @types/node to v22.10.9 ([#1773](https://github.com/lbenie/reading-time-estimator/issues/1773)) ([f8aa492](https://github.com/lbenie/reading-time-estimator/commit/f8aa49274bd6c23ad1c86aa729b121caf292a2e3))
* **deps:** update dependency @types/node to v22.12.0 ([#1779](https://github.com/lbenie/reading-time-estimator/issues/1779)) ([1cb4653](https://github.com/lbenie/reading-time-estimator/commit/1cb4653527789a4cc5440c0faff4a320cda2ef9f))
* **deps:** update dependency @types/node to v22.13.0 ([#1781](https://github.com/lbenie/reading-time-estimator/issues/1781)) ([d481d16](https://github.com/lbenie/reading-time-estimator/commit/d481d1654d6aea3d01a17e72ab28b72864c46212))
* **deps:** update dependency @types/node to v22.13.1 ([#1785](https://github.com/lbenie/reading-time-estimator/issues/1785)) ([604fb7a](https://github.com/lbenie/reading-time-estimator/commit/604fb7aa457774aeac8dc0d60ac55379768544f7))
* **deps:** update dependency @types/node to v22.13.10 ([#1823](https://github.com/lbenie/reading-time-estimator/issues/1823)) ([927436b](https://github.com/lbenie/reading-time-estimator/commit/927436bdc592b68fd3c6a5ec19e6278eed00eeca))
* **deps:** update dependency @types/node to v22.13.11 ([#1832](https://github.com/lbenie/reading-time-estimator/issues/1832)) ([e95161b](https://github.com/lbenie/reading-time-estimator/commit/e95161b6aaabc45fcf952fc9789ba9097bb75051))
* **deps:** update dependency @types/node to v22.13.2 ([#1797](https://github.com/lbenie/reading-time-estimator/issues/1797)) ([f377572](https://github.com/lbenie/reading-time-estimator/commit/f37757233fb20758267a9ba869cfad3288556b8e))
* **deps:** update dependency @types/node to v22.13.4 ([#1799](https://github.com/lbenie/reading-time-estimator/issues/1799)) ([5095575](https://github.com/lbenie/reading-time-estimator/commit/509557544074bedffa166ad2b66f562691f5fbac))
* **deps:** update dependency @types/node to v22.13.5 ([#1807](https://github.com/lbenie/reading-time-estimator/issues/1807)) ([5108871](https://github.com/lbenie/reading-time-estimator/commit/5108871c38f4d5949b4941ac094580d15f1d65fe))
* **deps:** update dependency @types/node to v22.13.7 ([#1814](https://github.com/lbenie/reading-time-estimator/issues/1814)) ([3f1c3b2](https://github.com/lbenie/reading-time-estimator/commit/3f1c3b2b2152cdf1e57338dd3bb7db18838bf010))
* **deps:** update dependency @types/node to v22.13.8 ([#1816](https://github.com/lbenie/reading-time-estimator/issues/1816)) ([1eab84f](https://github.com/lbenie/reading-time-estimator/commit/1eab84f442ef40c466418a59804b5c9def980083))
* **deps:** update dependency @types/node to v22.13.9 ([#1819](https://github.com/lbenie/reading-time-estimator/issues/1819)) ([c16a80b](https://github.com/lbenie/reading-time-estimator/commit/c16a80bc0f0ff2f81ec2a609638a17ebab6c5cdf))
* **deps:** update dependency @types/node to v22.2.0 ([11024f5](https://github.com/lbenie/reading-time-estimator/commit/11024f5686c34f8389853d8b371a04509c9c663d))
* **deps:** update dependency @types/node to v22.3.0 ([8624c40](https://github.com/lbenie/reading-time-estimator/commit/8624c409c155a0cf1ae16ae0a7c22a6b2cf11f8f))
* **deps:** update dependency @types/node to v22.4.0 ([3482873](https://github.com/lbenie/reading-time-estimator/commit/34828738cf8a8c27b2fadfd454b8895d1ec9a0a0))
* **deps:** update dependency @types/node to v22.4.1 ([09823c0](https://github.com/lbenie/reading-time-estimator/commit/09823c0a6365dbc3c90dc735b334bcea85e2c882))
* **deps:** update dependency @types/node to v22.5.0 ([50bded2](https://github.com/lbenie/reading-time-estimator/commit/50bded2609047a3ca19d07218b7589cc6808f046))
* **deps:** update dependency @types/node to v22.5.1 ([b1e2732](https://github.com/lbenie/reading-time-estimator/commit/b1e273277f9bae51f98457e5c7133712cff6e933))
* **deps:** update dependency @types/node to v22.5.2 ([e37b028](https://github.com/lbenie/reading-time-estimator/commit/e37b0286ed4dd097de85e0e7831bf67e5966a9d7))
* **deps:** update dependency @types/node to v22.5.3 ([666f327](https://github.com/lbenie/reading-time-estimator/commit/666f327c0172f6487549c5e74299f332d2822560))
* **deps:** update dependency @types/node to v22.5.4 ([671cc87](https://github.com/lbenie/reading-time-estimator/commit/671cc87f6988275dc899055a3e821c546cc8977b))
* **deps:** update dependency @types/node to v22.5.5 ([2fdaecd](https://github.com/lbenie/reading-time-estimator/commit/2fdaecd173f5d5033212b8b540442ac7b2ca34bd))
* **deps:** update dependency @types/node to v22.6.1 ([0949948](https://github.com/lbenie/reading-time-estimator/commit/09499484cbd3b218182196efa6ff211617e7671c))
* **deps:** update dependency @types/node to v22.7.0 ([454ca83](https://github.com/lbenie/reading-time-estimator/commit/454ca83723ec0c115eca37b8b6f1280d79338049))
* **deps:** update dependency @types/node to v22.7.2 ([3d3470a](https://github.com/lbenie/reading-time-estimator/commit/3d3470a6755055cbfea562d586c67363aea235b3))
* **deps:** update dependency @types/node to v22.7.3 ([2850fb9](https://github.com/lbenie/reading-time-estimator/commit/2850fb97509b4cbecab66ce96dae00fbab9e0afa))
* **deps:** update dependency @types/node to v22.7.4 ([aadcccf](https://github.com/lbenie/reading-time-estimator/commit/aadcccfd73be8eb59c2f1f7ae1f97c60a9b97984))
* **deps:** update dependency @types/node to v22.7.5 ([25c966c](https://github.com/lbenie/reading-time-estimator/commit/25c966c99ccde5cb20d720bfb7efb927fd1cf3fb))
* **deps:** update dependency @types/node to v22.7.6 ([d418fcb](https://github.com/lbenie/reading-time-estimator/commit/d418fcb46d250a2bbbf8eebf30b3b729a8567144))
* **deps:** update dependency @types/node to v22.7.7 ([ec1b11e](https://github.com/lbenie/reading-time-estimator/commit/ec1b11ef50f3f3258e41820371c4faf4c652ea8c))
* **deps:** update dependency @types/node to v22.7.8 ([ab1e87d](https://github.com/lbenie/reading-time-estimator/commit/ab1e87d978004da8f6df607c80698360e816cd4c))
* **deps:** update dependency @types/node to v22.7.9 ([40c8b58](https://github.com/lbenie/reading-time-estimator/commit/40c8b5813c19f9757e60db2dd878b149be97e906))
* **deps:** update dependency @types/node to v22.8.0 ([82ade0b](https://github.com/lbenie/reading-time-estimator/commit/82ade0b8ffba570657789dae86d1c47012a44a2b))
* **deps:** update dependency @types/node to v22.8.1 ([1e46bf2](https://github.com/lbenie/reading-time-estimator/commit/1e46bf2111fd755d81c80bb779b535da455f9059))
* **deps:** update dependency @types/node to v22.8.2 ([89eb79c](https://github.com/lbenie/reading-time-estimator/commit/89eb79c5ded2700d43b7e1cfea109ef4f2f90d0c))
* **deps:** update dependency @types/node to v22.8.4 ([dbafbd4](https://github.com/lbenie/reading-time-estimator/commit/dbafbd45b05ca6da366c45dbcb5350b902c1cbba))
* **deps:** update dependency @types/node to v22.8.5 ([67efab8](https://github.com/lbenie/reading-time-estimator/commit/67efab86261dcee4e14d66e4410d91095b1c0786))
* **deps:** update dependency @types/node to v22.8.6 ([9deb472](https://github.com/lbenie/reading-time-estimator/commit/9deb4725c0ba79691d79b4f5826b3dc5145934e9))
* **deps:** update dependency @types/node to v22.8.7 ([a39ebc5](https://github.com/lbenie/reading-time-estimator/commit/a39ebc5588e707484a2da657c96a4be9927e9853))
* **deps:** update dependency @types/node to v22.9.0 ([325e890](https://github.com/lbenie/reading-time-estimator/commit/325e890c1713a174817da5ae04b5c1ff5c527dba))
* **deps:** update dependency @types/node to v22.9.1 ([#1702](https://github.com/lbenie/reading-time-estimator/issues/1702)) ([5661284](https://github.com/lbenie/reading-time-estimator/commit/566128430fb7ea49d0d22f30772da00e6c46ba31))
* **deps:** update dependency @types/node to v22.9.2 ([#1704](https://github.com/lbenie/reading-time-estimator/issues/1704)) ([7051bd2](https://github.com/lbenie/reading-time-estimator/commit/7051bd20ff76a9bf76054b62e5973b1e334c679f))
* **deps:** update dependency @types/node to v22.9.3 ([#1705](https://github.com/lbenie/reading-time-estimator/issues/1705)) ([202c99e](https://github.com/lbenie/reading-time-estimator/commit/202c99e16431043581e37cb410062f7ad91e01b9))
* **deps:** update dependency @types/node to v22 ([56e05d6](https://github.com/lbenie/reading-time-estimator/commit/56e05d6e4c3017cae64f11c8cc562e7f3a82a0af))
* **deps:** update dependency @vitest/coverage-v8 to v1.5.0 ([f35116a](https://github.com/lbenie/reading-time-estimator/commit/f35116a9de98c56fc82bff2d6f550e498a450db2))
* **deps:** update dependency @vitest/coverage-v8 to v1.5.1 ([d82a1f8](https://github.com/lbenie/reading-time-estimator/commit/d82a1f86bdce068ad0910e9322de25f9c0ed0d57))
* **deps:** update dependency @vitest/coverage-v8 to v1.5.2 ([653f2b4](https://github.com/lbenie/reading-time-estimator/commit/653f2b4706f07ee6147c497935e33d60468431bc))
* **deps:** update dependency @vitest/coverage-v8 to v1.5.3 ([3497e1e](https://github.com/lbenie/reading-time-estimator/commit/3497e1e1583386d673b9abf2c18136de349ee0fe))
* **deps:** update dependency @vitest/coverage-v8 to v1.6.0 ([4732deb](https://github.com/lbenie/reading-time-estimator/commit/4732debae6ef9b6556b2b6d63785377c8bd1a538))
* **deps:** update dependency @vitest/coverage-v8 to v2.1.0 ([0865f5a](https://github.com/lbenie/reading-time-estimator/commit/0865f5a882e9eee29227b6776badad84ab372cb4))
* **deps:** update dependency @vitest/coverage-v8 to v2.1.1 ([f3c1a64](https://github.com/lbenie/reading-time-estimator/commit/f3c1a641767c86b386f700f3bfc909be7e61f99d))
* **deps:** update dependency @vitest/coverage-v8 to v2.1.2 ([5b0262a](https://github.com/lbenie/reading-time-estimator/commit/5b0262adf82f8b545cde96d9028b5ceef8fd6919))
* **deps:** update dependency concurrently to v9.0.1 ([f1ef915](https://github.com/lbenie/reading-time-estimator/commit/f1ef9151cf698fee38a5ba1aeb8ea9a2cdc88c0e))
* **deps:** update dependency concurrently to v9.1.0 ([1c10371](https://github.com/lbenie/reading-time-estimator/commit/1c103712814776de89515f6910e4106a4e504123))
* **deps:** update dependency concurrently to v9.1.1 ([#1740](https://github.com/lbenie/reading-time-estimator/issues/1740)) ([1dcd45f](https://github.com/lbenie/reading-time-estimator/commit/1dcd45fb7cebb3f4f126d63f9bb4aa500f6839c8))
* **deps:** update dependency concurrently to v9.1.2 ([#1742](https://github.com/lbenie/reading-time-estimator/issues/1742)) ([36da7ff](https://github.com/lbenie/reading-time-estimator/commit/36da7ff78ca64fd97128d8a99b82a235a4ab2cce))
* **deps:** update dependency concurrently to v9 ([623bcdc](https://github.com/lbenie/reading-time-estimator/commit/623bcdc7c9a4e4f502c218879681d326fe5db13b))
* **deps:** update dependency conventional-changelog-conventionalcommits to v8 ([4f1ea2b](https://github.com/lbenie/reading-time-estimator/commit/4f1ea2b3d4ca94a299ced226d1c068dfdf843120))
* **deps:** update dependency rollup to v4.14.0 ([b66b183](https://github.com/lbenie/reading-time-estimator/commit/b66b1839def62fa0abd5fca38c569b9e2b3bf2da))
* **deps:** update dependency rollup to v4.14.1 ([a59247b](https://github.com/lbenie/reading-time-estimator/commit/a59247bf1747b7aa4a2ff1dae4c81ec66850c33b))
* **deps:** update dependency rollup to v4.14.2 ([78ca2d0](https://github.com/lbenie/reading-time-estimator/commit/78ca2d0670878efd772734be27d2470daf320d83))
* **deps:** update dependency rollup to v4.14.3 ([f798807](https://github.com/lbenie/reading-time-estimator/commit/f79880769294196797300335a67a550bb5af2e9f))
* **deps:** update dependency rollup to v4.15.0 ([7f7d62c](https://github.com/lbenie/reading-time-estimator/commit/7f7d62ce5536e4fba3eacc51cff3853c6fcebfb4))
* **deps:** update dependency rollup to v4.16.0 ([bd9d46e](https://github.com/lbenie/reading-time-estimator/commit/bd9d46ea4511f9b4ab55359f85b1a66e880025a8))
* **deps:** update dependency rollup to v4.16.1 ([160a7af](https://github.com/lbenie/reading-time-estimator/commit/160a7af528c662063525d5d0b67d3557aad1bc5a))
* **deps:** update dependency rollup to v4.16.2 ([e1ebcd7](https://github.com/lbenie/reading-time-estimator/commit/e1ebcd788a687c2e5aa2623e7d29328abb27ffc1))
* **deps:** update dependency rollup to v4.16.3 ([0c40d3c](https://github.com/lbenie/reading-time-estimator/commit/0c40d3c3444948d0681ccca00466ceedd1219377))
* **deps:** update dependency rollup to v4.16.4 ([de272c5](https://github.com/lbenie/reading-time-estimator/commit/de272c5f2bc6c008e7cbd3cb52929df4aebd4edb))
* **deps:** update dependency rollup to v4.17.0 ([93e6f9d](https://github.com/lbenie/reading-time-estimator/commit/93e6f9d41b0da3fe3e04b5c68af6a9959cb692d3))
* **deps:** update dependency rollup to v4.17.1 ([badd354](https://github.com/lbenie/reading-time-estimator/commit/badd354bb7e28ef8de5d50540c76fbce20a684d8))
* **deps:** update dependency rollup to v4.17.2 ([8b66ebf](https://github.com/lbenie/reading-time-estimator/commit/8b66ebf73a1e598e30a45c4529092c7223c4ba87))
* **deps:** update dependency rollup to v4.18.0 ([ba01b91](https://github.com/lbenie/reading-time-estimator/commit/ba01b91d95f65012ac076624b8c83e063122673d))
* **deps:** update dependency rollup to v4.18.1 ([2afe550](https://github.com/lbenie/reading-time-estimator/commit/2afe550731f5e5ce5effdbe86c82bc9c9e796f67))
* **deps:** update dependency rollup to v4.19.0 ([d157d78](https://github.com/lbenie/reading-time-estimator/commit/d157d783359462597f0a52fca138fb73653ef9dd))
* **deps:** update dependency rollup to v4.19.1 ([0febb62](https://github.com/lbenie/reading-time-estimator/commit/0febb62aff707c1c52b92bb60011ee287d73dfbe))
* **deps:** update dependency rollup to v4.19.2 ([81899a5](https://github.com/lbenie/reading-time-estimator/commit/81899a5b968e2cc62d76e498686155d7c05c72b9))
* **deps:** update dependency rollup to v4.20.0 ([8e0daba](https://github.com/lbenie/reading-time-estimator/commit/8e0daba1f3998b17c5d4959c0111a13694a2614b))
* **deps:** update dependency rollup to v4.21.0 ([8bc3bff](https://github.com/lbenie/reading-time-estimator/commit/8bc3bff4d19cd12485a924ac6c8c8c0a0dc1cf82))
* **deps:** update dependency rollup to v4.21.1 ([df849f0](https://github.com/lbenie/reading-time-estimator/commit/df849f0bdeb5017c6a478d6240a9e7df45520276))
* **deps:** update dependency rollup to v4.21.2 ([0b408d7](https://github.com/lbenie/reading-time-estimator/commit/0b408d71587d3e1f84b75b53d2d3964423dfb1f3))
* **deps:** update dependency rollup to v4.21.3 ([d74d244](https://github.com/lbenie/reading-time-estimator/commit/d74d244d3f4e9559c8bfd145931618c2edc7d0b1))
* **deps:** update dependency rollup to v4.22.0 ([4eabd1c](https://github.com/lbenie/reading-time-estimator/commit/4eabd1cfcab6aa838a00436fa00a5f18d16db2b6))
* **deps:** update dependency rollup to v4.22.2 ([2a060ca](https://github.com/lbenie/reading-time-estimator/commit/2a060cae5e6ebb3cc3bbf45d814f24de778c670f))
* **deps:** update dependency rollup to v4.22.4 ([04a1361](https://github.com/lbenie/reading-time-estimator/commit/04a136109efc285881ef846841abd00e96ddcacb))
* **deps:** update dependency rollup to v4.22.5 ([15e0abc](https://github.com/lbenie/reading-time-estimator/commit/15e0abcb0962414a2bf62d1c1af83a210fe8b970))
* **deps:** update dependency rollup to v4.23.0 ([2af91dd](https://github.com/lbenie/reading-time-estimator/commit/2af91dd61eced56bc513a4721db986118467fc3e))
* **deps:** update dependency rollup to v4.24.0 ([a219c38](https://github.com/lbenie/reading-time-estimator/commit/a219c38943bbd2fba84ad7342f4185bfabb3c055))
* **deps:** update dependency rollup to v4.24.2 ([ddbabc3](https://github.com/lbenie/reading-time-estimator/commit/ddbabc330a27930129a7de2b03a8731870f429fc))
* **deps:** update dependency rollup to v4.24.3 ([0f4a95a](https://github.com/lbenie/reading-time-estimator/commit/0f4a95a27d41a1879058b80004373b0dabea6046))
* **deps:** update dependency rollup to v4.24.4 ([4d529d4](https://github.com/lbenie/reading-time-estimator/commit/4d529d46aa02604a98e90f548162d604f93264df))
* **deps:** update dependency rollup to v4.25.0 ([#1688](https://github.com/lbenie/reading-time-estimator/issues/1688)) ([0f408c8](https://github.com/lbenie/reading-time-estimator/commit/0f408c8e34023ae23120c95d6a94beec2199536d))
* **deps:** update dependency rollup to v4.26.0 ([#1694](https://github.com/lbenie/reading-time-estimator/issues/1694)) ([27ad956](https://github.com/lbenie/reading-time-estimator/commit/27ad95675c1d571b2a0e6622d5f0e0ba9962bbe6))
* **deps:** update dependency rollup to v4.27.0 ([#1696](https://github.com/lbenie/reading-time-estimator/issues/1696)) ([9e159db](https://github.com/lbenie/reading-time-estimator/commit/9e159dbc5f98a756af089216952831fcf9bfef3d))
* **deps:** update dependency rollup to v4.27.2 ([#1697](https://github.com/lbenie/reading-time-estimator/issues/1697)) ([135d71a](https://github.com/lbenie/reading-time-estimator/commit/135d71a3fe92ba497492487fbd8b4c74db6982fb))
* **deps:** update dependency rollup to v4.27.3 ([#1698](https://github.com/lbenie/reading-time-estimator/issues/1698)) ([a721855](https://github.com/lbenie/reading-time-estimator/commit/a72185543fe516cb9dd2a55183bd574424b0e959))
* **deps:** update dependency rollup to v4.27.4 ([#1706](https://github.com/lbenie/reading-time-estimator/issues/1706)) ([1fa43e0](https://github.com/lbenie/reading-time-estimator/commit/1fa43e0be6eba20672e1423a4538b7380f241510))
* **deps:** update dependency rollup to v4.28.0 ([#1716](https://github.com/lbenie/reading-time-estimator/issues/1716)) ([583f356](https://github.com/lbenie/reading-time-estimator/commit/583f356dcfe8765c1faabb4e4c3e4f38dd490847))
* **deps:** update dependency rollup to v4.28.1 ([#1722](https://github.com/lbenie/reading-time-estimator/issues/1722)) ([993d629](https://github.com/lbenie/reading-time-estimator/commit/993d629b3f7833585a93ef766ca34c4ee05afe41))
* **deps:** update dependency rollup to v4.29.0 ([#1736](https://github.com/lbenie/reading-time-estimator/issues/1736)) ([8e6b979](https://github.com/lbenie/reading-time-estimator/commit/8e6b97994946ab7000a28151eca2271b48045951))
* **deps:** update dependency rollup to v4.29.1 ([#1737](https://github.com/lbenie/reading-time-estimator/issues/1737)) ([99b17ba](https://github.com/lbenie/reading-time-estimator/commit/99b17ba72c0910c46a8e01a9a0be859c65ad1c6b))
* **deps:** update dependency rollup to v4.29.2 ([#1749](https://github.com/lbenie/reading-time-estimator/issues/1749)) ([127b173](https://github.com/lbenie/reading-time-estimator/commit/127b173d23180ee44a7b9cb7df8575274848604a))
* **deps:** update dependency rollup to v4.30.0 ([#1750](https://github.com/lbenie/reading-time-estimator/issues/1750)) ([b256530](https://github.com/lbenie/reading-time-estimator/commit/b25653011638fd8becf57ad9575bdeb5b232e010))
* **deps:** update dependency rollup to v4.30.1 ([#1752](https://github.com/lbenie/reading-time-estimator/issues/1752)) ([44e30f3](https://github.com/lbenie/reading-time-estimator/commit/44e30f3e267b43d2fbfd67de8471b4bb612ed04e))
* **deps:** update dependency rollup to v4.31.0 ([#1768](https://github.com/lbenie/reading-time-estimator/issues/1768)) ([4458e65](https://github.com/lbenie/reading-time-estimator/commit/4458e6563849e03b06ac87d9268bd32e7718f55c))
* **deps:** update dependency rollup to v4.32.0 ([#1776](https://github.com/lbenie/reading-time-estimator/issues/1776)) ([00703db](https://github.com/lbenie/reading-time-estimator/commit/00703db8155bd35aa3cf6ae8b5c32db85de02bdc))
* **deps:** update dependency rollup to v4.32.1 ([#1780](https://github.com/lbenie/reading-time-estimator/issues/1780)) ([b017df3](https://github.com/lbenie/reading-time-estimator/commit/b017df3196e56c90c7a55326735e85a4398e756a))
* **deps:** update dependency rollup to v4.34.0 ([#1782](https://github.com/lbenie/reading-time-estimator/issues/1782)) ([3fe9f51](https://github.com/lbenie/reading-time-estimator/commit/3fe9f51cd286a1fc8aa89226af85aa23bc8d3565))
* **deps:** update dependency rollup to v4.34.1 ([#1783](https://github.com/lbenie/reading-time-estimator/issues/1783)) ([52c6d22](https://github.com/lbenie/reading-time-estimator/commit/52c6d223e57a611541fe94b18a8ab55fc4c77553))
* **deps:** update dependency rollup to v4.34.2 ([#1786](https://github.com/lbenie/reading-time-estimator/issues/1786)) ([f09b487](https://github.com/lbenie/reading-time-estimator/commit/f09b487a678e1b514e6caa1d66f4a2cd6d8c73c4))
* **deps:** update dependency rollup to v4.34.3 ([#1788](https://github.com/lbenie/reading-time-estimator/issues/1788)) ([cdf0bdb](https://github.com/lbenie/reading-time-estimator/commit/cdf0bdbebd1e56b3d414b5034e8d5018f920a76b))
* **deps:** update dependency rollup to v4.34.4 ([#1790](https://github.com/lbenie/reading-time-estimator/issues/1790)) ([de5c4f5](https://github.com/lbenie/reading-time-estimator/commit/de5c4f565789d8c1f408638caf843f7ee07a0645))
* **deps:** update dependency rollup to v4.34.6 ([#1791](https://github.com/lbenie/reading-time-estimator/issues/1791)) ([bd81c22](https://github.com/lbenie/reading-time-estimator/commit/bd81c22fd61fde2b3f48b6e67db43195074ece89))
* **deps:** update dependency rollup to v4.34.7 ([#1800](https://github.com/lbenie/reading-time-estimator/issues/1800)) ([1648bfe](https://github.com/lbenie/reading-time-estimator/commit/1648bfe7b814e690d45c40361f64967c66c032c7))
* **deps:** update dependency rollup to v4.34.8 ([#1803](https://github.com/lbenie/reading-time-estimator/issues/1803)) ([4798c2c](https://github.com/lbenie/reading-time-estimator/commit/4798c2c32c979a9a6a0fc192e8856cbd429ac2d2))
* **deps:** update dependency rollup to v4.34.9 ([#1817](https://github.com/lbenie/reading-time-estimator/issues/1817)) ([a32d598](https://github.com/lbenie/reading-time-estimator/commit/a32d59862137d758a1e804ab6537b7a80509b671))
* **deps:** update dependency rollup to v4.35.0 ([#1824](https://github.com/lbenie/reading-time-estimator/issues/1824)) ([4fd9ef6](https://github.com/lbenie/reading-time-estimator/commit/4fd9ef654674cbcb49742dfde1f5f3ee1f1a94dd))
* **deps:** update dependency rollup to v4.36.0 ([#1829](https://github.com/lbenie/reading-time-estimator/issues/1829)) ([956a5f8](https://github.com/lbenie/reading-time-estimator/commit/956a5f8211ae433bde1cf1cac9834e6fb78238bc))
* **deps:** update dependency rollup to v4.37.0 ([#1834](https://github.com/lbenie/reading-time-estimator/issues/1834)) ([1f03b20](https://github.com/lbenie/reading-time-estimator/commit/1f03b2065678c449bf627c5080eef93eee072b84))
* **deps:** update dependency semantic-release to v23.0.7 ([95454d1](https://github.com/lbenie/reading-time-estimator/commit/95454d10ad326e343b8e7fbf130ba7611a2e96a1))
* **deps:** update dependency semantic-release to v23.0.8 ([a81dfbd](https://github.com/lbenie/reading-time-estimator/commit/a81dfbd3269dd81e43c7a8639069a97820c526cf))
* **deps:** update dependency semantic-release to v23.1.1 ([0c981bb](https://github.com/lbenie/reading-time-estimator/commit/0c981bbb562768ba18f1a44a80f2bd9dca05561e))
* **deps:** update dependency semantic-release to v24.1.0 ([3df5400](https://github.com/lbenie/reading-time-estimator/commit/3df54009622bffbe6ea14855998adff7678f977a))
* **deps:** update dependency semantic-release to v24.1.1 ([a4a96d0](https://github.com/lbenie/reading-time-estimator/commit/a4a96d06d1920c0b4e4dde38289dcb5cceb6425e))
* **deps:** update dependency semantic-release to v24.1.2 ([68db4fc](https://github.com/lbenie/reading-time-estimator/commit/68db4fcab54f08676fdc80ee74cd301798edebc8))
* **deps:** update dependency semantic-release to v24.1.3 ([4b49fb9](https://github.com/lbenie/reading-time-estimator/commit/4b49fb97ed99936cab497ee2f951f5fbb393014c))
* **deps:** update dependency semantic-release to v24.2.0 ([d834f7d](https://github.com/lbenie/reading-time-estimator/commit/d834f7dfbf9ad7875d54c5009cc930c99299bbb3))
* **deps:** update dependency semantic-release to v24.2.1 ([#1747](https://github.com/lbenie/reading-time-estimator/issues/1747)) ([77e72d8](https://github.com/lbenie/reading-time-estimator/commit/77e72d89e6b3c7934c89078457c049204d1d4238))
* **deps:** update dependency semantic-release to v24.2.2 ([#1793](https://github.com/lbenie/reading-time-estimator/issues/1793)) ([1dfc794](https://github.com/lbenie/reading-time-estimator/commit/1dfc7940342f1688cbbbac71124b2448d0c9266a))
* **deps:** update dependency semantic-release to v24.2.3 ([#1802](https://github.com/lbenie/reading-time-estimator/issues/1802)) ([7be6943](https://github.com/lbenie/reading-time-estimator/commit/7be6943d798cd1f23a711df3d3ee727ae0f4553b))
* **deps:** update dependency semantic-release to v24 ([6153edb](https://github.com/lbenie/reading-time-estimator/commit/6153edbf00f405656da6159713a9b2296cfbb98a))
* **deps:** update dependency typescript to v5.4.4 ([c7a0e96](https://github.com/lbenie/reading-time-estimator/commit/c7a0e96eae7d2777fc7f39b2c52210231e6a9ed1))
* **deps:** update dependency typescript to v5.4.5 ([9d4946e](https://github.com/lbenie/reading-time-estimator/commit/9d4946e6c488c57e022f20f28c8811aa8d5501db))
* **deps:** update dependency typescript to v5.5.2 ([d79f141](https://github.com/lbenie/reading-time-estimator/commit/d79f141dcf139f16fccbdb44b196ee5a6a4ff54b))
* **deps:** update dependency typescript to v5.5.3 ([a8d5a81](https://github.com/lbenie/reading-time-estimator/commit/a8d5a815418a4418ece5b0381bf011b3cecfa2a5))
* **deps:** update dependency typescript to v5.5.4 ([2f4c658](https://github.com/lbenie/reading-time-estimator/commit/2f4c658289e928fbd3d586d6b6e7387e74b35368))
* **deps:** update dependency typescript to v5.6.2 ([2109998](https://github.com/lbenie/reading-time-estimator/commit/21099982c01321c0aab212248bb57c80cf616647))
* **deps:** update dependency typescript to v5.6.3 ([c789ec6](https://github.com/lbenie/reading-time-estimator/commit/c789ec6a6b891f2e777b83e888f96934773eebed))
* **deps:** update dependency typescript to v5.7.2 ([#1703](https://github.com/lbenie/reading-time-estimator/issues/1703)) ([94eeca9](https://github.com/lbenie/reading-time-estimator/commit/94eeca9b9992e1b73d870eac64f6f1509cba413e))
* **deps:** update dependency typescript to v5.7.3 ([#1755](https://github.com/lbenie/reading-time-estimator/issues/1755)) ([d806526](https://github.com/lbenie/reading-time-estimator/commit/d8065261e1c52276600853f670e46b60033a9f65))
* **deps:** update dependency typescript to v5.8.2 ([#1813](https://github.com/lbenie/reading-time-estimator/issues/1813)) ([3a22c0f](https://github.com/lbenie/reading-time-estimator/commit/3a22c0fee4dde8bcadb08033c19b7637f0b25d07))
* **deps:** update dependency unplugin-auto-import to ^0.18.0 ([71fbcb5](https://github.com/lbenie/reading-time-estimator/commit/71fbcb585998b38185cdebb705dfbbc12018196b))
* **deps:** update dependency unplugin-auto-import to ^0.19.0 ([#1726](https://github.com/lbenie/reading-time-estimator/issues/1726)) ([041fae1](https://github.com/lbenie/reading-time-estimator/commit/041fae1224a26c4de47bdb8bdcab397208e4f5f3))
* **deps:** update dependency unplugin-auto-import to v0.17.6 ([d505661](https://github.com/lbenie/reading-time-estimator/commit/d50566175642fda463c9141dbb2ba48720cc5564))
* **deps:** update dependency unplugin-auto-import to v0.18.1 ([d32a9da](https://github.com/lbenie/reading-time-estimator/commit/d32a9da3508fcc18f7bc8c24f93059889d0ee1ce))
* **deps:** update dependency unplugin-auto-import to v0.18.2 ([b56ba59](https://github.com/lbenie/reading-time-estimator/commit/b56ba59c40ad4fbc49ac121519a53ecf5b1fbb91))
* **deps:** update dependency unplugin-auto-import to v0.18.3 ([7860969](https://github.com/lbenie/reading-time-estimator/commit/7860969a37f5c06fb2ce0e6e25009b7fb62f652c))
* **deps:** update dependency unplugin-auto-import to v0.18.4 ([#1695](https://github.com/lbenie/reading-time-estimator/issues/1695)) ([e0d1a98](https://github.com/lbenie/reading-time-estimator/commit/e0d1a9862aa3b02e99cb012a954c30ad2327d75e))
* **deps:** update dependency unplugin-auto-import to v0.18.5 ([#1700](https://github.com/lbenie/reading-time-estimator/issues/1700)) ([3db6ba3](https://github.com/lbenie/reading-time-estimator/commit/3db6ba34a3fa00976ae78b5804f461c179dc04ea))
* **deps:** update dependency unplugin-auto-import to v0.18.6 ([#1713](https://github.com/lbenie/reading-time-estimator/issues/1713)) ([c06c72b](https://github.com/lbenie/reading-time-estimator/commit/c06c72b546239727cfa26757bf57c45e56b8f77a))
* **deps:** update dependency unplugin-auto-import to v19 ([#1753](https://github.com/lbenie/reading-time-estimator/issues/1753)) ([c82062b](https://github.com/lbenie/reading-time-estimator/commit/c82062b43f72d3c74aca329b7052c444da42d172))
* **deps:** update dependency unplugin-auto-import to v19.1.0 ([#1801](https://github.com/lbenie/reading-time-estimator/issues/1801)) ([71e7198](https://github.com/lbenie/reading-time-estimator/commit/71e7198b6be47d5eeb811a8be5387450e5f269eb))
* **deps:** update dependency unplugin-auto-import to v19.1.1 ([#1812](https://github.com/lbenie/reading-time-estimator/issues/1812)) ([f97918c](https://github.com/lbenie/reading-time-estimator/commit/f97918c5015ab064239cb72ea2c677982d3f7aeb))
* **deps:** update dependency vite to v5.2.10 ([1a2b004](https://github.com/lbenie/reading-time-estimator/commit/1a2b004727da266eea9fab7e3a374cc20895f80b))
* **deps:** update dependency vite to v5.2.11 ([a761bf3](https://github.com/lbenie/reading-time-estimator/commit/a761bf30f1f2f758ddaac3ad0cf8d32a12536b68))
* **deps:** update dependency vite to v5.2.12 ([3dcde79](https://github.com/lbenie/reading-time-estimator/commit/3dcde791dc33022de1108c8095b60ff693f21b1b))
* **deps:** update dependency vite to v5.2.13 ([db5b4d9](https://github.com/lbenie/reading-time-estimator/commit/db5b4d97443fe7229cb6c62df52d08926d6ff65c))
* **deps:** update dependency vite to v5.2.8 ([d0d1c7a](https://github.com/lbenie/reading-time-estimator/commit/d0d1c7a60e4ea3eadcf3fa446157ce1a4fede184))
* **deps:** update dependency vite to v5.2.9 ([7c96275](https://github.com/lbenie/reading-time-estimator/commit/7c9627531f938e65d35b7cb46055fa0b732ec57c))
* **deps:** update dependency vite to v5.3.0 ([fc56e68](https://github.com/lbenie/reading-time-estimator/commit/fc56e68e0b88d009710c8f7f43d1b5a38c5f1526))
* **deps:** update dependency vite to v5.3.1 ([98a8b13](https://github.com/lbenie/reading-time-estimator/commit/98a8b13d45ee6eea0fb3d35c2d430780d262f013))
* **deps:** update dependency vite to v5.3.2 ([43b4efa](https://github.com/lbenie/reading-time-estimator/commit/43b4efa7ecfeb4af1ef372b0b28b25f88cf3a653))
* **deps:** update dependency vite to v5.3.3 ([8cabf2a](https://github.com/lbenie/reading-time-estimator/commit/8cabf2a38ff162ad11be0774c2b1416ad24e67c5))
* **deps:** update dependency vite to v5.3.4 ([799c6f5](https://github.com/lbenie/reading-time-estimator/commit/799c6f5b2c8678748fbe4e3a2699aeb142db8bcb))
* **deps:** update dependency vite to v5.3.5 ([787cf49](https://github.com/lbenie/reading-time-estimator/commit/787cf49314eca3f0f0074775d0b9d1538299f8c0))
* **deps:** update dependency vite to v5.4.0 ([b817976](https://github.com/lbenie/reading-time-estimator/commit/b8179765d321fdb6fb1fae1d6f69264261be53e8))
* **deps:** update dependency vite to v5.4.10 ([54916de](https://github.com/lbenie/reading-time-estimator/commit/54916dee832364da7eff231766097a8c484d23df))
* **deps:** update dependency vite to v5.4.11 ([#1690](https://github.com/lbenie/reading-time-estimator/issues/1690)) ([5500f0f](https://github.com/lbenie/reading-time-estimator/commit/5500f0fc40c5523633952508fac41c6efc86244b))
* **deps:** update dependency vite to v5.4.1 ([19e5b67](https://github.com/lbenie/reading-time-estimator/commit/19e5b67861e0d1090a836204e022538295cf5c60))
* **deps:** update dependency vite to v5.4.2 ([1b400dd](https://github.com/lbenie/reading-time-estimator/commit/1b400ddf06fdc706a6571252dd5998dfebddc5ed))
* **deps:** update dependency vite to v5.4.3 ([42d10ff](https://github.com/lbenie/reading-time-estimator/commit/42d10ff57bce8251703ad418e8d26d46677a14b7))
* **deps:** update dependency vite to v5.4.4 ([8a30320](https://github.com/lbenie/reading-time-estimator/commit/8a303209ce8fb82d7ab82e045aa7e76e7f4d88cb))
* **deps:** update dependency vite to v5.4.5 ([f01e226](https://github.com/lbenie/reading-time-estimator/commit/f01e226f9efa7e8c58d40578098e5a6c0524d4bd))
* **deps:** update dependency vite to v5.4.6 [security] ([ce62625](https://github.com/lbenie/reading-time-estimator/commit/ce62625ed5ab033a62d38e892a9b449cb25c0898))
* **deps:** update dependency vite to v5.4.8 ([30d391c](https://github.com/lbenie/reading-time-estimator/commit/30d391cc6b67c219b5248245ce5a94961bb26e7f))
* **deps:** update dependency vite to v5.4.9 ([5e3e600](https://github.com/lbenie/reading-time-estimator/commit/5e3e6005702369d178e3db7691e29842747d34cf))
* **deps:** update dependency vite to v6 ([#1710](https://github.com/lbenie/reading-time-estimator/issues/1710)) ([05cbd84](https://github.com/lbenie/reading-time-estimator/commit/05cbd84d2a4c7cb83ea49de8a61d8e73ff0f885f))
* **deps:** update dependency vite to v6.0.1 ([#1712](https://github.com/lbenie/reading-time-estimator/issues/1712)) ([39e51f8](https://github.com/lbenie/reading-time-estimator/commit/39e51f8f400e61137199b85be59a303defc5de03))
* **deps:** update dependency vite to v6.0.10 ([#1770](https://github.com/lbenie/reading-time-estimator/issues/1770)) ([e833e74](https://github.com/lbenie/reading-time-estimator/commit/e833e7497239fd8fa3f322f59ec805bf5e7105ef))
* **deps:** update dependency vite to v6.0.11 ([#1772](https://github.com/lbenie/reading-time-estimator/issues/1772)) ([a85f6e6](https://github.com/lbenie/reading-time-estimator/commit/a85f6e6833d49fab2131557a06f767c2edc87210))
* **deps:** update dependency vite to v6.0.2 ([#1718](https://github.com/lbenie/reading-time-estimator/issues/1718)) ([f1bbe06](https://github.com/lbenie/reading-time-estimator/commit/f1bbe06aaec87a67203af5d28ef55c3f83349903))
* **deps:** update dependency vite to v6.0.3 ([#1721](https://github.com/lbenie/reading-time-estimator/issues/1721)) ([cf0feea](https://github.com/lbenie/reading-time-estimator/commit/cf0feeaec32d1677309b5a1de1f695a423581038))
* **deps:** update dependency vite to v6.0.4 ([#1734](https://github.com/lbenie/reading-time-estimator/issues/1734)) ([a744351](https://github.com/lbenie/reading-time-estimator/commit/a74435136d5777c7ddea9614e19443082470db17))
* **deps:** update dependency vite to v6.0.5 ([#1735](https://github.com/lbenie/reading-time-estimator/issues/1735)) ([344add5](https://github.com/lbenie/reading-time-estimator/commit/344add5db34751e0039a97f4c328d9657d12d80e))
* **deps:** update dependency vite to v6.0.6 ([#1739](https://github.com/lbenie/reading-time-estimator/issues/1739)) ([d68533d](https://github.com/lbenie/reading-time-estimator/commit/d68533df6eba5b22a7cd02c644ee27236e970fe9))
* **deps:** update dependency vite to v6.0.7 ([#1745](https://github.com/lbenie/reading-time-estimator/issues/1745)) ([d789f1d](https://github.com/lbenie/reading-time-estimator/commit/d789f1db4978d6572ac81abbc09762d7cfc6f7ea))
* **deps:** update dependency vite to v6.0.9 ([#1769](https://github.com/lbenie/reading-time-estimator/issues/1769)) ([0f24409](https://github.com/lbenie/reading-time-estimator/commit/0f24409824b37bb0e54b32450afefcd0b76b5300))
* **deps:** update dependency vite to v6.1.0 ([#1789](https://github.com/lbenie/reading-time-estimator/issues/1789)) ([b680a48](https://github.com/lbenie/reading-time-estimator/commit/b680a488a0366bffa85b49c9bc399b2d4c6bd55b))
* **deps:** update dependency vite to v6.1.1 ([#1805](https://github.com/lbenie/reading-time-estimator/issues/1805)) ([95bc56a](https://github.com/lbenie/reading-time-estimator/commit/95bc56a8ecc1680d42b78df1293a1215ef563b0c))
* **deps:** update dependency vite to v6.2.0 ([#1811](https://github.com/lbenie/reading-time-estimator/issues/1811)) ([93cca70](https://github.com/lbenie/reading-time-estimator/commit/93cca70e161f610433b66169760fe7b104ba3a8a))
* **deps:** update dependency vite to v6.2.1 ([#1821](https://github.com/lbenie/reading-time-estimator/issues/1821)) ([c58641e](https://github.com/lbenie/reading-time-estimator/commit/c58641e5ec5c527b6f72afd52c371f0ab05dbe72))
* **deps:** update dependency vite to v6.2.2 ([#1827](https://github.com/lbenie/reading-time-estimator/issues/1827)) ([09146d1](https://github.com/lbenie/reading-time-estimator/commit/09146d190dfdec1e2b6717afbd9b4e7c504cc69f))
* **deps:** update dependency vitest to v1.5.0 ([b49a997](https://github.com/lbenie/reading-time-estimator/commit/b49a9979d678acf6e78e3fb3fdb8c2d48e1d438a))
* **deps:** update dependency vitest to v1.5.1 ([695f35e](https://github.com/lbenie/reading-time-estimator/commit/695f35eddde1557e1f4c79ec877436365e8ba4c5))
* **deps:** update dependency vitest to v1.5.2 ([dfca2b3](https://github.com/lbenie/reading-time-estimator/commit/dfca2b30d476dc34095d83cae996d470ccfa0c5e))
* **deps:** update dependency vitest to v1.5.3 ([a1677dc](https://github.com/lbenie/reading-time-estimator/commit/a1677dcbe46684f55d45dfb41d4f8a6c65be2a80))
* **deps:** update dependency vitest to v1.6.0 ([3e2562a](https://github.com/lbenie/reading-time-estimator/commit/3e2562ac8f6b1f6c04738ab99a7f3da72063b8ee))
* **deps:** update dependency vitest to v2.1.0 ([3cdd019](https://github.com/lbenie/reading-time-estimator/commit/3cdd019fba71a626cc516a7eb4e2271bd0ab9362))
* **deps:** update dependency vitest to v2.1.1 ([52660d5](https://github.com/lbenie/reading-time-estimator/commit/52660d5a27818a0f5a7fc7361cb6704418602cbc))
* **deps:** update dependency vitest to v2.1.2 ([a88fcd5](https://github.com/lbenie/reading-time-estimator/commit/a88fcd585896d3088c52240194f9007094ccf6bc))
* update packages and fix ci [ci skip] ([3d6ff74](https://github.com/lbenie/reading-time-estimator/commit/3d6ff74c086f6db36fa4b44d25607d091fa75603))
* **deps:** update stefanzweifel/git-auto-commit-action action to v5.0.1 ([#1435](https://github.com/lbenie/reading-time-estimator/issues/1435)) ([1ec4dd1](https://github.com/lbenie/reading-time-estimator/commit/1ec4dd1caa7d6d7c11a1cb3d1b78a50e10f69542))
* **deps:** update stefanzweifel/git-auto-commit-action action to v5.1.0 ([#1757](https://github.com/lbenie/reading-time-estimator/issues/1757)) ([3a8c07e](https://github.com/lbenie/reading-time-estimator/commit/3a8c07e2d4071124e325034f2637117f0ca0e231))

## [1.11.0](https://github.com/lbenie/reading-time-estimator/compare/v1.10.0...v1.11.0) (2024-04-02)


### :sparkles: Features

* add slovak and czech languages ([#1416](https://github.com/lbenie/reading-time-estimator/issues/1416)) ([557050d](https://github.com/lbenie/reading-time-estimator/commit/557050d787a79fcc5c5884867c036e91ee915ea4))


### :memo: Documenation

* add Grolicek as a contributor for code ([#1378](https://github.com/lbenie/reading-time-estimator/issues/1378)) ([d45072c](https://github.com/lbenie/reading-time-estimator/commit/d45072c5a0f38b1ffdf1c24354138a5664fda051))


### :white_check_mark: Chores

* **deps:** update dependency @lbenie/linting to v1.7.4 ([aa06311](https://github.com/lbenie/reading-time-estimator/commit/aa063118359e9df02943fbc57925fd03a2c7b663))
* **deps:** update dependency @lbenie/linting to v1.7.5 ([9945a56](https://github.com/lbenie/reading-time-estimator/commit/9945a569afccfbb494eccdc303d4a77b49726d49))
* **deps:** update dependency @lbenie/linting to v1.7.6 ([6a3cfb9](https://github.com/lbenie/reading-time-estimator/commit/6a3cfb9f44e3da296efe0a4373464666b81970d7))
* **deps:** update dependency @semantic-release/release-notes-generator to v13 ([49a72ac](https://github.com/lbenie/reading-time-estimator/commit/49a72acec972c4a59d6891d3ea932f7d87bece22))
* **deps:** update dependency @types/node to v20.11.29 ([440fbc5](https://github.com/lbenie/reading-time-estimator/commit/440fbc5be9869b2d5dd195f43098e6e83daaca7d))
* **deps:** update dependency @types/node to v20.11.30 ([aab587b](https://github.com/lbenie/reading-time-estimator/commit/aab587b3ca7176711b81d128fbbe03bf51460e2c))
* **deps:** update dependency @types/node to v20.12.2 ([d3b9233](https://github.com/lbenie/reading-time-estimator/commit/d3b9233d10c2019638fa5ba6c4b116bd19b3c095))
* **deps:** update dependency rollup to v4.13.1 ([7022e87](https://github.com/lbenie/reading-time-estimator/commit/7022e87888e898c457e80eff53b58f4448e1b822))
* **deps:** update dependency rollup to v4.13.2 ([b718ffb](https://github.com/lbenie/reading-time-estimator/commit/b718ffb884764c42e77818e1ecc09a3650204233))
* **deps:** update dependency semantic-release to v23.0.5 ([eccc191](https://github.com/lbenie/reading-time-estimator/commit/eccc191078da84460b6f9df90eac25d703734d8b))
* **deps:** update dependency semantic-release to v23.0.6 ([3b71b63](https://github.com/lbenie/reading-time-estimator/commit/3b71b6355dcb23151be0af0eab4046b607a7ae7e))
* **deps:** update dependency typescript to v5.4.3 ([5860f43](https://github.com/lbenie/reading-time-estimator/commit/5860f436fecd9d4582ab1de242e0c1b290734dca))
* **deps:** update dependency vite to v5.2.2 ([db510c2](https://github.com/lbenie/reading-time-estimator/commit/db510c22183521868d0e1da5b5dad30d009d0d07))
* **deps:** update dependency vite to v5.2.3 ([6368fe4](https://github.com/lbenie/reading-time-estimator/commit/6368fe4c43cf309f98119c96f3d37f2e8724a2c7))
* **deps:** update dependency vite to v5.2.4 ([c260019](https://github.com/lbenie/reading-time-estimator/commit/c260019c81640886cfb65d0d3d0e2efe90c33865))
* **deps:** update dependency vite to v5.2.5 ([a6190fb](https://github.com/lbenie/reading-time-estimator/commit/a6190fbd2aa0e8f9d83eff5f2cc6bcb7c6b30a5a))
* **deps:** update dependency vite to v5.2.6 ([f7baf36](https://github.com/lbenie/reading-time-estimator/commit/f7baf36d08f95674f6d210da42f10b20187d2bc4))
* **deps:** update dependency vite to v5.2.7 ([a492e63](https://github.com/lbenie/reading-time-estimator/commit/a492e63c5d56062f96c423b22566d6b101edf11c))
* **docs:** update readme ([c659758](https://github.com/lbenie/reading-time-estimator/commit/c6597584a938f38a0d6f968d7b83c45fdf8d6051))
* **deps:** update wagoid/commitlint-github-action action to v6 ([#1411](https://github.com/lbenie/reading-time-estimator/issues/1411)) ([326cfed](https://github.com/lbenie/reading-time-estimator/commit/326cfedc69196006d7809a7e6727390edbae893f))

## [1.10.0](https://github.com/lbenie/reading-time-estimator/compare/v1.9.4...v1.10.0) (2024-03-17)


### :sparkles: Features

* add bangla locale ([#1306](https://github.com/lbenie/reading-time-estimator/issues/1306)) ([e30712a](https://github.com/lbenie/reading-time-estimator/commit/e30712ab0e780e3d073cf7cc84c237f6ddec49bf))


### :memo: Documenation

* add faisalamin9696 as a contributor for code ([#1326](https://github.com/lbenie/reading-time-estimator/issues/1326)) ([bc42201](https://github.com/lbenie/reading-time-estimator/commit/bc42201d802d802b4ee73ee3de418953d96a8cda))


### :white_check_mark: Chores

* apply formatting changes ([2cd3d55](https://github.com/lbenie/reading-time-estimator/commit/2cd3d5561ad60da8da5f450b344131f2397e5c86))
* **deps:** update dependency @lbenie/linting to v1.6.10 ([7ffc6be](https://github.com/lbenie/reading-time-estimator/commit/7ffc6beda2ef1b08f071a6cdd094d2c581a98725))
* **deps:** update dependency @lbenie/linting to v1.6.12 ([9d7adf8](https://github.com/lbenie/reading-time-estimator/commit/9d7adf8fb53894ff007b7fa0f9e09da6ab75f25d))
* **deps:** update dependency @lbenie/linting to v1.6.13 ([565e1c5](https://github.com/lbenie/reading-time-estimator/commit/565e1c531ed1c4c36c46ec3c11c58bb945f1cfd4))
* **deps:** update dependency @lbenie/linting to v1.6.14 ([fbc139a](https://github.com/lbenie/reading-time-estimator/commit/fbc139aa52124e662873b4ff671024491bac3c36))
* **deps:** update dependency @lbenie/linting to v1.6.15 ([#1357](https://github.com/lbenie/reading-time-estimator/issues/1357)) ([8521122](https://github.com/lbenie/reading-time-estimator/commit/8521122a8f81810c93a5b8d5246dd3e408eecd2c))
* **deps:** update dependency @lbenie/linting to v1.6.16 ([ef46300](https://github.com/lbenie/reading-time-estimator/commit/ef46300e8f0820aab2dc0495867811b237fe4142))
* **deps:** update dependency @lbenie/linting to v1.6.17 ([f181ab5](https://github.com/lbenie/reading-time-estimator/commit/f181ab5fae359b236a3b15d7ae659a2837338fc7))
* **deps:** update dependency @lbenie/linting to v1.6.18 ([ffe2f32](https://github.com/lbenie/reading-time-estimator/commit/ffe2f325a54b923d752cbef74bca7d3041769089))
* **deps:** update dependency @rollup/plugin-typescript to v11.1.6 ([1e7d664](https://github.com/lbenie/reading-time-estimator/commit/1e7d66417f3ddd0411334f7f2a7735f7a5c6ddfb))
* **deps:** update dependency @semantic-release/github to v10 ([67ca175](https://github.com/lbenie/reading-time-estimator/commit/67ca175378bc39ad9893f6f7c791f2659380cf60))
* **deps:** update dependency @types/node to v20.10.7 ([769372a](https://github.com/lbenie/reading-time-estimator/commit/769372a2eb4de28afc08f1a9f2cc23d96e26eda3))
* **deps:** update dependency @types/node to v20.10.8 ([5c146ad](https://github.com/lbenie/reading-time-estimator/commit/5c146ad93dc8ef13e31cb899f54756934524255b))
* **deps:** update dependency @types/node to v20.11.0 ([547bc92](https://github.com/lbenie/reading-time-estimator/commit/547bc9266daff2ad53a998e4fe69ac01c86b5eff))
* **deps:** update dependency @types/node to v20.11.10 ([284f4d2](https://github.com/lbenie/reading-time-estimator/commit/284f4d2286bf983a9acfeeedf7dbf6e2ea58074a))
* **deps:** update dependency @types/node to v20.11.13 ([638fd7c](https://github.com/lbenie/reading-time-estimator/commit/638fd7c05c252efdbc4fada0b2ec52073eeb5781))
* **deps:** update dependency @types/node to v20.11.14 ([663247b](https://github.com/lbenie/reading-time-estimator/commit/663247badd7ede3f5f15dc9dff29b4976a7cb286))
* **deps:** update dependency @types/node to v20.11.15 ([360a2c6](https://github.com/lbenie/reading-time-estimator/commit/360a2c6bd07bcb906477e862ba2a47eb2f4cb383))
* **deps:** update dependency @types/node to v20.11.16 ([48a7624](https://github.com/lbenie/reading-time-estimator/commit/48a76247144020085a6714d4f52639f55de99c87))
* **deps:** update dependency @types/node to v20.11.17 ([a18063c](https://github.com/lbenie/reading-time-estimator/commit/a18063c6903d671fce7519e4b4d55532ae4e9832))
* **deps:** update dependency @types/node to v20.11.18 ([54011af](https://github.com/lbenie/reading-time-estimator/commit/54011af955ce6405030ad938b9c9aa93bbb7ab02))
* **deps:** update dependency @types/node to v20.11.19 ([47341d7](https://github.com/lbenie/reading-time-estimator/commit/47341d7b37226a88e8bebc70971fcfe0b61efa5d))
* **deps:** update dependency @types/node to v20.11.1 ([d13259f](https://github.com/lbenie/reading-time-estimator/commit/d13259ffba7b309aae3c658285068221cb793c00))
* **deps:** update dependency @types/node to v20.11.2 ([#1333](https://github.com/lbenie/reading-time-estimator/issues/1333)) ([bc44abb](https://github.com/lbenie/reading-time-estimator/commit/bc44abb6f9b074a499f7c6e80f3f04cd1ae85817))
* **deps:** update dependency @types/node to v20.11.20 ([140eba6](https://github.com/lbenie/reading-time-estimator/commit/140eba6c10aef02ef30736546316de95eb9ba5e5))
* **deps:** update dependency @types/node to v20.11.21 ([4808192](https://github.com/lbenie/reading-time-estimator/commit/48081927e172fdad72b51692ddef5b427dd117df))
* **deps:** update dependency @types/node to v20.11.22 ([b6aab2b](https://github.com/lbenie/reading-time-estimator/commit/b6aab2bbd9c9f9496ff2ec59e9b775e07146f71a))
* **deps:** update dependency @types/node to v20.11.24 ([a27fdf7](https://github.com/lbenie/reading-time-estimator/commit/a27fdf796addaf95f9b87c8c59e9596d3129b679))
* **deps:** update dependency @types/node to v20.11.25 ([32272fe](https://github.com/lbenie/reading-time-estimator/commit/32272fe3af672381aad1bb33a6e155087a5a217a))
* **deps:** update dependency @types/node to v20.11.26 ([24a2ab6](https://github.com/lbenie/reading-time-estimator/commit/24a2ab6f095a6d17b1e4a813600ba0d0d101fac5))
* **deps:** update dependency @types/node to v20.11.27 ([6ec9eac](https://github.com/lbenie/reading-time-estimator/commit/6ec9eacae53fa0485d9cac8d91162a87db530b19))
* **deps:** update dependency @types/node to v20.11.28 ([53fc7b6](https://github.com/lbenie/reading-time-estimator/commit/53fc7b63d5e8ed82dd15b1d1bd08a8753c7cbd8b))
* **deps:** update dependency @types/node to v20.11.3 ([e0a5aef](https://github.com/lbenie/reading-time-estimator/commit/e0a5aefc5d3bc0cc4b1e298f2889ca29e04b0922))
* **deps:** update dependency @types/node to v20.11.4 ([b4d5f79](https://github.com/lbenie/reading-time-estimator/commit/b4d5f798bb1a00db55525161a4c980e816c94010))
* **deps:** update dependency @types/node to v20.11.5 ([8b1d6e9](https://github.com/lbenie/reading-time-estimator/commit/8b1d6e986234047b4b39a8e7f80e2102b719177c))
* **deps:** update dependency @types/node to v20.11.6 ([a1a8145](https://github.com/lbenie/reading-time-estimator/commit/a1a8145550321f73190e0ec641c937016ef65af3))
* **deps:** update dependency @types/node to v20.11.7 ([c552301](https://github.com/lbenie/reading-time-estimator/commit/c552301863dda902dffd84f21838557e9a12c47d))
* **deps:** update dependency @types/node to v20.11.8 ([a14baef](https://github.com/lbenie/reading-time-estimator/commit/a14baef89720e531724f4e5e848d8555ad76e965))
* **deps:** update dependency @types/node to v20.11.9 ([b3265e3](https://github.com/lbenie/reading-time-estimator/commit/b3265e3ad05890860bc518336f8e4e725ceedadb))
* **deps:** update dependency @vitest/coverage-v8 to v1.1.2 ([78d30c3](https://github.com/lbenie/reading-time-estimator/commit/78d30c340d7931a5aaf2468ef480636b1821e431))
* **deps:** update dependency @vitest/coverage-v8 to v1.1.3 ([3f86c1e](https://github.com/lbenie/reading-time-estimator/commit/3f86c1e3a2c601319b8ac953015d53829fe78605))
* **deps:** update dependency @vitest/coverage-v8 to v1.2.0 ([e6b9f94](https://github.com/lbenie/reading-time-estimator/commit/e6b9f9469bb8634474bac22d3920f8eb4295d029))
* **deps:** update dependency @vitest/coverage-v8 to v1.2.1 ([3044fb2](https://github.com/lbenie/reading-time-estimator/commit/3044fb23db8d896e9be55523e13722920f43ec57))
* **deps:** update dependency @vitest/coverage-v8 to v1.2.2 ([e655d25](https://github.com/lbenie/reading-time-estimator/commit/e655d258c7982665f78f659375e634dd7b6bf8a7))
* **deps:** update dependency @vitest/coverage-v8 to v1.3.0 ([21b5667](https://github.com/lbenie/reading-time-estimator/commit/21b56676c3f31d3f34d64182654087626744a47a))
* **deps:** update dependency @vitest/coverage-v8 to v1.3.1 ([931bc65](https://github.com/lbenie/reading-time-estimator/commit/931bc65c594e410addb858f902ac8352fb5ea43f))
* **deps:** update dependency @vitest/coverage-v8 to v1.4.0 ([26f6c1b](https://github.com/lbenie/reading-time-estimator/commit/26f6c1b58aeb40c2b8cbc115db0d11f4a6569b47))
* **deps:** update dependency rollup to v4.10.0 ([067889a](https://github.com/lbenie/reading-time-estimator/commit/067889af818b7dff9acdbedbb89dbdbda4ec3361))
* **deps:** update dependency rollup to v4.11.0 ([6680999](https://github.com/lbenie/reading-time-estimator/commit/66809991634938fffd05944bb1db270a432c1d87))
* **deps:** update dependency rollup to v4.12.0 ([f872e8d](https://github.com/lbenie/reading-time-estimator/commit/f872e8d6abc65d89dd0d73a02581ba93499c599d))
* **deps:** update dependency rollup to v4.12.1 ([e31dac9](https://github.com/lbenie/reading-time-estimator/commit/e31dac9a472997433473fa8e914378d169efba99))
* **deps:** update dependency rollup to v4.13.0 ([e2a0aeb](https://github.com/lbenie/reading-time-estimator/commit/e2a0aebeac098e03d716a5dcb586533c0bc292e2))
* **deps:** update dependency rollup to v4.9.3 ([b2ee741](https://github.com/lbenie/reading-time-estimator/commit/b2ee741b6b274d55182ce11941e463d84fb252a1))
* **deps:** update dependency rollup to v4.9.4 ([580240c](https://github.com/lbenie/reading-time-estimator/commit/580240ce7a6086c17a7ba427907fa1bac87ea524))
* **deps:** update dependency rollup to v4.9.5 ([06c277b](https://github.com/lbenie/reading-time-estimator/commit/06c277b26b6208853461d7c9d64130128f755243))
* **deps:** update dependency rollup to v4.9.6 ([5d61fbb](https://github.com/lbenie/reading-time-estimator/commit/5d61fbb01a1d70c0473c68b180d48e75bed14ba1))
* **deps:** update dependency semantic-release to v23 ([#1331](https://github.com/lbenie/reading-time-estimator/issues/1331)) ([2893312](https://github.com/lbenie/reading-time-estimator/commit/2893312089a2a15233addbb1fd743096f2efa5f9))
* **deps:** update dependency semantic-release to v23.0.2 ([#1358](https://github.com/lbenie/reading-time-estimator/issues/1358)) ([deee3f6](https://github.com/lbenie/reading-time-estimator/commit/deee3f6a52114e4cfded3460cf1d7d8adff337e6))
* **deps:** update dependency semantic-release to v23.0.3 ([daee017](https://github.com/lbenie/reading-time-estimator/commit/daee01731b507ecab7bc404c628526040ffab41e))
* **deps:** update dependency semantic-release to v23.0.4 ([759b2a0](https://github.com/lbenie/reading-time-estimator/commit/759b2a0837eedcd0641e0795812120ce69b3026b))
* **deps:** update dependency typescript to v5.4.2 ([97994db](https://github.com/lbenie/reading-time-estimator/commit/97994db284da56ee501181cb3df269f50a563cd1))
* **deps:** update dependency unplugin-auto-import to v0.17.4 ([3422716](https://github.com/lbenie/reading-time-estimator/commit/3422716026f224846f202f797c3d8aef35ad0155))
* **deps:** update dependency unplugin-auto-import to v0.17.5 ([0028d2c](https://github.com/lbenie/reading-time-estimator/commit/0028d2ccec4222ad466140f9bce5734723729191))
* **deps:** update dependency vite to v5.0.11 ([5a1277a](https://github.com/lbenie/reading-time-estimator/commit/5a1277a7a230d38ad5b5a7aefa9ff92c92c1397e))
* **deps:** update dependency vite to v5.0.12 ([b429a46](https://github.com/lbenie/reading-time-estimator/commit/b429a46b3117bb8a3ebf577675f4c0a57fb7f2bf))
* **deps:** update dependency vite to v5.1.0 ([6be9716](https://github.com/lbenie/reading-time-estimator/commit/6be97164a4ef837799eaaaf2ac52b5708a5700aa))
* **deps:** update dependency vite to v5.1.1 ([8f42126](https://github.com/lbenie/reading-time-estimator/commit/8f4212611c8bbaf13d613fce5de08d6954ea6ac4))
* **deps:** update dependency vite to v5.1.2 ([2ca95f6](https://github.com/lbenie/reading-time-estimator/commit/2ca95f6d49ee51bed88c556d8da057cae0470bb2))
* **deps:** update dependency vite to v5.1.3 ([1cec9cd](https://github.com/lbenie/reading-time-estimator/commit/1cec9cd42f067c440dd3916dbebc638fe5f037ff))
* **deps:** update dependency vite to v5.1.4 ([2c794e4](https://github.com/lbenie/reading-time-estimator/commit/2c794e4920b5e1636f34c4900827e718806b0539))
* **deps:** update dependency vite to v5.1.5 ([3c7a717](https://github.com/lbenie/reading-time-estimator/commit/3c7a71778a628ff5f19c471747eaabf38e9c5b46))
* **deps:** update dependency vite to v5.1.6 ([04c8b26](https://github.com/lbenie/reading-time-estimator/commit/04c8b269622ded403d2db3cf3929fa416d9569cd))
* **deps:** update dependency vitest to v1.1.2 ([873d31a](https://github.com/lbenie/reading-time-estimator/commit/873d31aee1636719328a81fac2c8df18128235f2))
* **deps:** update dependency vitest to v1.1.3 ([d7c5802](https://github.com/lbenie/reading-time-estimator/commit/d7c5802344b456d69c4f470c7f73d085c9c2a2a8))
* **deps:** update dependency vitest to v1.2.0 ([6f79214](https://github.com/lbenie/reading-time-estimator/commit/6f792145b82a4949efd4a6377dd160aa236cf9fd))
* **deps:** update dependency vitest to v1.2.1 ([0622d95](https://github.com/lbenie/reading-time-estimator/commit/0622d95584bca949f4222ec53ac7964469b8435e))
* **deps:** update dependency vitest to v1.2.2 ([40751ce](https://github.com/lbenie/reading-time-estimator/commit/40751ceafa3839a035edea5e4f971c8ff1f422a3))
* **deps:** update dependency vitest to v1.3.0 ([fcd5673](https://github.com/lbenie/reading-time-estimator/commit/fcd56732e7b8a37671343ad5d805ca6d46722746))
* **deps:** update dependency vitest to v1.3.1 ([04a686d](https://github.com/lbenie/reading-time-estimator/commit/04a686d4ee4d2438026f85b5d8d267827b696fbb))
* **deps:** update dependency vitest to v1.4.0 ([620d408](https://github.com/lbenie/reading-time-estimator/commit/620d408d3393542b4c2e55522459a99785509506))

## [1.9.4](https://github.com/lbenie/reading-time-estimator/compare/v1.9.3...v1.9.4) (2024-01-02)


### :zap: Refactoring

* calculate is less than a minute once ([a5c5738](https://github.com/lbenie/reading-time-estimator/commit/a5c57383575d8dda37f4d501c57f9e7658db6f0a))


### :white_check_mark: Chores

* **deps:** update dependency @lbenie/linting to v1.6.9 ([b897b1e](https://github.com/lbenie/reading-time-estimator/commit/b897b1ef9d4417e3758fcb24d4e63929a26439a0))
* **deps:** update dependency @types/node to v20.10.6 ([8e8befc](https://github.com/lbenie/reading-time-estimator/commit/8e8befc9ed6f83dd7402697047463997fba42f6a))
* **deps:** update dependency @vitest/coverage-v8 to v1.1.1 ([e37445e](https://github.com/lbenie/reading-time-estimator/commit/e37445ea759c56c62e3ed18a74220f6929c8336c))
* **deps:** update dependency rollup to v4.9.2 ([1ae51d8](https://github.com/lbenie/reading-time-estimator/commit/1ae51d870cce0aa245591480b1a4d97725fba1f9))
* **deps:** update dependency vitest to v1.1.1 ([07af3a0](https://github.com/lbenie/reading-time-estimator/commit/07af3a0254140480fa7c1b06a727023541f9c111))

## [1.9.3](https://github.com/lbenie/reading-time-estimator/compare/v1.9.2...v1.9.3) (2023-12-28)


### :bug: Fixes

* chinese language calculation ([#1309](https://github.com/lbenie/reading-time-estimator/issues/1309)) ([bf7bf46](https://github.com/lbenie/reading-time-estimator/commit/bf7bf4643f83680864ae5a3eb490d79bc8f63874))


### :white_check_mark: Chores

* fix eslint ([7889577](https://github.com/lbenie/reading-time-estimator/commit/788957748d84f95eb1bffd580b59aaa1436fed32))
* **deps:** update dependency @lbenie/linting to v1.6.2 ([59f2e5f](https://github.com/lbenie/reading-time-estimator/commit/59f2e5f8913655b68dd0f3a4e9a65df4ffeeb8a0))
* **deps:** update dependency @lbenie/linting to v1.6.3 ([8a90e00](https://github.com/lbenie/reading-time-estimator/commit/8a90e009d1b59e6c307e2e2e305564dc6cec43fb))
* **deps:** update dependency @lbenie/linting to v1.6.4 ([c6bdf19](https://github.com/lbenie/reading-time-estimator/commit/c6bdf19822ad11121c6bd75313eb6b6612a99f00))
* **deps:** update dependency @lbenie/linting to v1.6.7 ([cefdb8b](https://github.com/lbenie/reading-time-estimator/commit/cefdb8b1df4f102c82eec5325ee7d18ee8802786))
* **deps:** update dependency @semantic-release/github to v9.2.5 ([2b3efc8](https://github.com/lbenie/reading-time-estimator/commit/2b3efc8454ca285db9dc8a42fe425bf2fe6b1c4d))
* **deps:** update dependency @semantic-release/github to v9.2.6 ([8e37b99](https://github.com/lbenie/reading-time-estimator/commit/8e37b99ec2900a346ae77ae5410e92fcc4ebaeb1))
* **deps:** update dependency @types/node to v20.10.2 ([676799d](https://github.com/lbenie/reading-time-estimator/commit/676799d9b5b14311e10099955fec857734033406))
* **deps:** update dependency @types/node to v20.10.3 ([69ad9ed](https://github.com/lbenie/reading-time-estimator/commit/69ad9edfc4c95a24e2a4170e2e61abf286889eb3))
* **deps:** update dependency @types/node to v20.10.4 ([8db3dae](https://github.com/lbenie/reading-time-estimator/commit/8db3dae754429a64ca340d8ac13101556b425032))
* **deps:** update dependency @types/node to v20.10.5 ([e5cd5e9](https://github.com/lbenie/reading-time-estimator/commit/e5cd5e94ac25ffdc7578089b9f0d613260bc1e74))
* **deps:** update dependency @vitest/coverage-v8 to v1 ([#1274](https://github.com/lbenie/reading-time-estimator/issues/1274)) ([6da560d](https://github.com/lbenie/reading-time-estimator/commit/6da560d77e9833f6fef0200c707f3bc887dc51ad))
* **deps:** update dependency @vitest/coverage-v8 to v1.0.2 ([0cbb123](https://github.com/lbenie/reading-time-estimator/commit/0cbb1232f523d204e2aeb28082ca1ca88f3f29c3))
* **deps:** update dependency @vitest/coverage-v8 to v1.0.4 ([5d40ac3](https://github.com/lbenie/reading-time-estimator/commit/5d40ac3debeedd67c5403a0617e009e8f694244f))
* **deps:** update dependency @vitest/coverage-v8 to v1.1.0 ([b5490c0](https://github.com/lbenie/reading-time-estimator/commit/b5490c060ebbf1eade561fa681070acdc379df20))
* **deps:** update dependency rollup to v4.7.0 ([22f43c1](https://github.com/lbenie/reading-time-estimator/commit/22f43c187acd554ae7133ade1b15119631e1196d))
* **deps:** update dependency rollup to v4.8.0 ([68dac58](https://github.com/lbenie/reading-time-estimator/commit/68dac58e51d842c211bf02459e8586ddfa7703fa))
* **deps:** update dependency rollup to v4.9.0 ([5095907](https://github.com/lbenie/reading-time-estimator/commit/509590770597dd3ff1e0bba412f417c7e3051ae0))
* **deps:** update dependency rollup to v4.9.1 ([6f0b3b4](https://github.com/lbenie/reading-time-estimator/commit/6f0b3b4ca38af24131817fbafffd20c0c90280c9))
* **deps:** update dependency semantic-release to v22.0.10 ([2c0ba33](https://github.com/lbenie/reading-time-estimator/commit/2c0ba33d8d41ae8065480231576e8ad3143630d3))
* **deps:** update dependency semantic-release to v22.0.11 ([3ae6626](https://github.com/lbenie/reading-time-estimator/commit/3ae6626885e2b95783ed606f5248a8cfebd94515))
* **deps:** update dependency semantic-release to v22.0.12 ([81ed926](https://github.com/lbenie/reading-time-estimator/commit/81ed926918a15879587b3cfba65e5ef1e19c1e07))
* **deps:** update dependency semantic-release to v22.0.9 ([0247511](https://github.com/lbenie/reading-time-estimator/commit/0247511ea0df1ffa0d1100af08448ed3656b29fc))
* **deps:** update dependency typescript to v5.3.3 ([9f25818](https://github.com/lbenie/reading-time-estimator/commit/9f258183ac6368354532f41e127e95e1217d6549))
* **deps:** update dependency unplugin-auto-import to v0.17.2 ([86607e2](https://github.com/lbenie/reading-time-estimator/commit/86607e22822c16671af13ad6a67e5715c82cea45))
* **deps:** update dependency unplugin-auto-import to v0.17.3 ([29ed9ce](https://github.com/lbenie/reading-time-estimator/commit/29ed9ce882252d3b486ff5378605109cd7faf542))
* **deps:** update dependency vite to v5.0.10 ([7eecefe](https://github.com/lbenie/reading-time-estimator/commit/7eecefe02d57919f859d5b90150d7b02dc747c91))
* **deps:** update dependency vite to v5.0.5 ([2e40272](https://github.com/lbenie/reading-time-estimator/commit/2e40272026321204822e2e01da8b0af487ee29ed))
* **deps:** update dependency vite to v5.0.6 ([2aad4e7](https://github.com/lbenie/reading-time-estimator/commit/2aad4e7e33d0fcc8727f92fa0960f0f5e4bd4fb8))
* **deps:** update dependency vite to v5.0.7 ([f86bd3e](https://github.com/lbenie/reading-time-estimator/commit/f86bd3ebf958df12a4da06bf3854d2e3d172bcb2))
* **deps:** update dependency vite to v5.0.8 ([d8e5e47](https://github.com/lbenie/reading-time-estimator/commit/d8e5e47816684a30d7dad7e2f2eb337d228cfa55))
* **deps:** update dependency vite to v5.0.9 ([bf1403d](https://github.com/lbenie/reading-time-estimator/commit/bf1403db7bec2739029c0fd4f8801505efcfeaa3))
* **deps:** update dependency vitest to v1.0.1 ([270207f](https://github.com/lbenie/reading-time-estimator/commit/270207f21846f4c49370a035d12b1cbd84184f7a))
* **deps:** update dependency vitest to v1.0.2 ([fa85b23](https://github.com/lbenie/reading-time-estimator/commit/fa85b23a283e7046670db6eea3edbf371cb7f631))
* **deps:** update dependency vitest to v1.0.3 ([dc25124](https://github.com/lbenie/reading-time-estimator/commit/dc251249a28860fc79059d0d0a33ea18d9e4fd35))
* **deps:** update dependency vitest to v1.0.4 ([720ddbf](https://github.com/lbenie/reading-time-estimator/commit/720ddbf121eab6a109d1338c2a12dfe0ebcefb7d))
* **deps:** update dependency vitest to v1.1.0 ([6494553](https://github.com/lbenie/reading-time-estimator/commit/64945534d8e4c5149a462a46cbbc784a95e791d1))
* **deps:** update dependency vitest to v1 ([04b6f2b](https://github.com/lbenie/reading-time-estimator/commit/04b6f2b4b2aa560fa62831a234934ccf91e2e932))
* **deps:** update github/codeql-action action to v3 ([#1299](https://github.com/lbenie/reading-time-estimator/issues/1299)) ([83d4bc0](https://github.com/lbenie/reading-time-estimator/commit/83d4bc0354a7858d4372a1a5b7d068c4b0f53309))

## [1.9.2](https://github.com/lbenie/reading-time-estimator/compare/v1.9.1...v1.9.2) (2023-12-01)


### :bug: Fixes

* remove the redundant code about calculating minutes ([#1267](https://github.com/lbenie/reading-time-estimator/issues/1267)) ([8532adb](https://github.com/lbenie/reading-time-estimator/commit/8532adbf727fc71e5ab4c660ca29a3ec5a166dcb))


### :memo: Documenation

* add zS1m as a contributor for code ([#1268](https://github.com/lbenie/reading-time-estimator/issues/1268)) ([5a06f40](https://github.com/lbenie/reading-time-estimator/commit/5a06f409e91f64adf186420cfba84a222f342e63))


### :white_check_mark: Chores

* apply formatting changes ([8309990](https://github.com/lbenie/reading-time-estimator/commit/830999049df2607212e20f8306aeed1ef004fe0d))
* **deps:** update dependency @lbenie/linting to v1.6.0 ([#1259](https://github.com/lbenie/reading-time-estimator/issues/1259)) ([47b9556](https://github.com/lbenie/reading-time-estimator/commit/47b9556c6449c04812204e5caead41e53f9d7345))
* **deps:** update dependency @semantic-release/github to v9.2.4 ([7d430a2](https://github.com/lbenie/reading-time-estimator/commit/7d430a2f3c03ca3bd9f97a8dc8a2a64ec78b7d8d))
* **deps:** update dependency @types/node to v20.10.0 ([#1257](https://github.com/lbenie/reading-time-estimator/issues/1257)) ([f37dc02](https://github.com/lbenie/reading-time-estimator/commit/f37dc021182c7e5a1af4fa827eaa72bfae9972b8))
* **deps:** update dependency @types/node to v20.10.1 ([e231d30](https://github.com/lbenie/reading-time-estimator/commit/e231d30245175be3930aee056037d0ded5bb6f5c))
* **deps:** update dependency rollup to v4.6.0 ([ad1e518](https://github.com/lbenie/reading-time-estimator/commit/ad1e5183d305a862114ed0c29e30c08a9adcbdd6))
* **deps:** update dependency rollup to v4.6.1 ([17763a6](https://github.com/lbenie/reading-time-estimator/commit/17763a6597020448c7d5c2b2df4f851ec761b1bf))
* **deps:** update dependency unplugin-auto-import to ^0.17.0 ([#1258](https://github.com/lbenie/reading-time-estimator/issues/1258)) ([7a398ba](https://github.com/lbenie/reading-time-estimator/commit/7a398ba1ed20f668e7558eb1ca54c024b6b1fba0))
* **deps:** update dependency vite to v5.0.3 ([cce5472](https://github.com/lbenie/reading-time-estimator/commit/cce5472513cef2f9f6c5061066fe1c35ca5def30))
* **deps:** update dependency vite to v5.0.4 ([bd336cd](https://github.com/lbenie/reading-time-estimator/commit/bd336cd7fa6044d16c96c393649803aa65102ac6))
* update format script [skip ci] ([e6b9009](https://github.com/lbenie/reading-time-estimator/commit/e6b9009c4af3448aa4500c846009d4ccdfad1930))

## [1.9.1](https://github.com/lbenie/reading-time-estimator/compare/v1.9.0...v1.9.1) (2023-11-24)


### :bug: Fixes

* properly type jsdoc by adding types ([d3154af](https://github.com/lbenie/reading-time-estimator/commit/d3154af6701e25b90528931371cfb4cbffbbf117))
* update lockfile ([a8669fa](https://github.com/lbenie/reading-time-estimator/commit/a8669fa6b31d07e042d1f1470d1461c0cbcc1c89))


### :memo: Documenation

* update documentation [skip ci] ([f4c87f2](https://github.com/lbenie/reading-time-estimator/commit/f4c87f207400536e681191b3193a9c0c0ed7be43))


### :white_check_mark: Chores

* remove unused file [skip ci] ([8edbc9d](https://github.com/lbenie/reading-time-estimator/commit/8edbc9dda3a48cf6a93514b162957f3408e338e0))
* **deps:** update actions/checkout action to v4 ([#1137](https://github.com/lbenie/reading-time-estimator/issues/1137)) ([387799a](https://github.com/lbenie/reading-time-estimator/commit/387799af6d0f36894acc843a9aaede67e8b704b0))
* **deps:** update actions/checkout digest to b4ffde6 ([#1163](https://github.com/lbenie/reading-time-estimator/issues/1163)) ([3c7537a](https://github.com/lbenie/reading-time-estimator/commit/3c7537a5ad026e191c455ab3389f530c0251181f))
* **deps:** update dependency @rollup/plugin-typescript to v11.1.3 ([2750811](https://github.com/lbenie/reading-time-estimator/commit/275081159ca1778e531a75a46d7e509d3f94cb34))
* **deps:** update dependency @rollup/plugin-typescript to v11.1.4 ([f1137f0](https://github.com/lbenie/reading-time-estimator/commit/f1137f0b14c678f680e61fae9ccdc219c60ffb34))
* **deps:** update dependency @rollup/plugin-typescript to v11.1.5 ([d22d52d](https://github.com/lbenie/reading-time-estimator/commit/d22d52d20994994279bea0dedd2905b205534003))
* **deps:** update dependency @semantic-release/github to v9.0.5 ([b1030ce](https://github.com/lbenie/reading-time-estimator/commit/b1030ceddbd264bcfbcd088f195cb569f3a70426))
* **deps:** update dependency @semantic-release/github to v9.0.6 ([aaaaadc](https://github.com/lbenie/reading-time-estimator/commit/aaaaadc3bdbc93be815d080a1a1803af77e9dc65))
* **deps:** update dependency @semantic-release/github to v9.0.7 ([c83463d](https://github.com/lbenie/reading-time-estimator/commit/c83463d761de0632b29a6e318ee77c5524071239))
* **deps:** update dependency @semantic-release/github to v9.1.0 ([b245ea3](https://github.com/lbenie/reading-time-estimator/commit/b245ea3e6ba839d85b2e683694ac84a2403a5bd0))
* **deps:** update dependency @semantic-release/github to v9.2.0 ([c469687](https://github.com/lbenie/reading-time-estimator/commit/c4696875b3d58bba48df881a9a0b1ef4c554d034))
* **deps:** update dependency @semantic-release/github to v9.2.1 ([d82125c](https://github.com/lbenie/reading-time-estimator/commit/d82125ce48e83057fc96f09ee54696e57cc54b6a))
* **deps:** update dependency @semantic-release/github to v9.2.2 ([3133d97](https://github.com/lbenie/reading-time-estimator/commit/3133d973aea548c742b4ff6d1a3732f8178e39ea))
* **deps:** update dependency @semantic-release/github to v9.2.3 ([07024e7](https://github.com/lbenie/reading-time-estimator/commit/07024e72fe15f5da104a95322bfd4c9deb0e9117))
* **deps:** update dependency @semantic-release/release-notes-generator to v11.0.5 ([b1a6505](https://github.com/lbenie/reading-time-estimator/commit/b1a65058c7fea9ac8aaf890a4832b53bdb30920a))
* **deps:** update dependency @semantic-release/release-notes-generator to v11.0.6 ([4c38ecc](https://github.com/lbenie/reading-time-estimator/commit/4c38eccb6a52951ab8ae2e3b7e15253ecac77f2a))
* **deps:** update dependency @semantic-release/release-notes-generator to v11.0.7 ([dfd72f5](https://github.com/lbenie/reading-time-estimator/commit/dfd72f5f0ecc21bed75999842d181f3389e26d55))
* **deps:** update dependency @semantic-release/release-notes-generator to v12.0.1 ([3c52fa2](https://github.com/lbenie/reading-time-estimator/commit/3c52fa2d89126891bd6ac69a4fd89785948aa9af))
* **deps:** update dependency @semantic-release/release-notes-generator to v12.1.0 ([d1197ef](https://github.com/lbenie/reading-time-estimator/commit/d1197ef4838f8ac420d1fe2eb0cc6c0be0ee71cf))
* **deps:** update dependency @semantic-release/release-notes-generator to v12 ([2dc651a](https://github.com/lbenie/reading-time-estimator/commit/2dc651aaf4e1422e47494b679a66766c8dafdb44))
* **deps:** update dependency @types/node to v20.4.10 ([9dda14e](https://github.com/lbenie/reading-time-estimator/commit/9dda14e11774761ece15fd85bb5f3a12e1f595ad))
* **deps:** update dependency @types/node to v20.4.3 ([717c0c9](https://github.com/lbenie/reading-time-estimator/commit/717c0c971c9d79b7a06567c4e7995695b95c56d1))
* **deps:** update dependency @types/node to v20.4.4 ([21c3509](https://github.com/lbenie/reading-time-estimator/commit/21c3509de830c748d14f48b328a0bc76ba335b5c))
* **deps:** update dependency @types/node to v20.4.5 ([4caca70](https://github.com/lbenie/reading-time-estimator/commit/4caca7003ce3f07563ba77d78aa5552ca535983b))
* **deps:** update dependency @types/node to v20.4.6 ([7b5d3eb](https://github.com/lbenie/reading-time-estimator/commit/7b5d3ebb6428bb588e28007ce0c8ed4afb302a18))
* **deps:** update dependency @types/node to v20.4.7 ([8ee4323](https://github.com/lbenie/reading-time-estimator/commit/8ee4323d231d99e7942f1c5a70634b9aa0902f6f))
* **deps:** update dependency @types/node to v20.4.8 ([4281b5e](https://github.com/lbenie/reading-time-estimator/commit/4281b5eff1d44157a199b63a0743bcc23fba592a))
* **deps:** update dependency @types/node to v20.4.9 ([2bb036a](https://github.com/lbenie/reading-time-estimator/commit/2bb036af2320e1d9eb04e4f5e75df8b511052c32))
* **deps:** update dependency @types/node to v20.5.0 ([21051fe](https://github.com/lbenie/reading-time-estimator/commit/21051fe829654659a712852f314d9bf05e785f4a))
* **deps:** update dependency @types/node to v20.5.1 ([c9da1e4](https://github.com/lbenie/reading-time-estimator/commit/c9da1e400df77f00ff8098ce3188d1863e346ea9))
* **deps:** update dependency @types/node to v20.5.2 ([a82765b](https://github.com/lbenie/reading-time-estimator/commit/a82765b9c024f114c392af88fd436b5fcf182134))
* **deps:** update dependency @types/node to v20.5.3 ([8f5df80](https://github.com/lbenie/reading-time-estimator/commit/8f5df801182e89dea48679f9ecd373e4da424ffc))
* **deps:** update dependency @types/node to v20.5.4 ([cc74f41](https://github.com/lbenie/reading-time-estimator/commit/cc74f414e9a939d1439a56bc265b1e85cd9e53d3))
* **deps:** update dependency @types/node to v20.5.6 ([eaaa6ac](https://github.com/lbenie/reading-time-estimator/commit/eaaa6acbe9d7437d4a6bc3e9dc3f4745bdf88fcb))
* **deps:** update dependency @types/node to v20.5.7 ([bbbe19e](https://github.com/lbenie/reading-time-estimator/commit/bbbe19e8d13b6c3b51247d4c93eaa2330c8a2f45))
* **deps:** update dependency @types/node to v20.5.8 ([a84f8e9](https://github.com/lbenie/reading-time-estimator/commit/a84f8e9c7e139f6bb8eb52134f8e39aaa3d511eb))
* **deps:** update dependency @types/node to v20.5.9 ([ba881b7](https://github.com/lbenie/reading-time-estimator/commit/ba881b76c93fe208607c5fcd1bd05b0a0a79d604))
* **deps:** update dependency @types/node to v20.6.0 ([a7847b2](https://github.com/lbenie/reading-time-estimator/commit/a7847b2ac8be65e965932ea81371f07d6c23e6f9))
* **deps:** update dependency @types/node to v20.6.1 ([8a8f7cb](https://github.com/lbenie/reading-time-estimator/commit/8a8f7cb0cf7b325c27763ba3d62e3febbbb7ae06))
* **deps:** update dependency @types/node to v20.6.2 ([83dab80](https://github.com/lbenie/reading-time-estimator/commit/83dab806208cfe7e881a0f08b18325f53c5933a9))
* **deps:** update dependency @types/node to v20.6.3 ([bf98f37](https://github.com/lbenie/reading-time-estimator/commit/bf98f37e6bab6d5da9553657d64f27ffe461b660))
* **deps:** update dependency @types/node to v20.6.4 ([30f1ad0](https://github.com/lbenie/reading-time-estimator/commit/30f1ad03d9b6543d009d932158eb906d98e09aa1))
* **deps:** update dependency @types/node to v20.6.5 ([0e76d56](https://github.com/lbenie/reading-time-estimator/commit/0e76d56988adb690efe30ed1efacc105225c5e87))
* **deps:** update dependency @types/node to v20.7.0 ([06bf905](https://github.com/lbenie/reading-time-estimator/commit/06bf905c92fdc07276b49aba43c918a06e6b0b28))
* **deps:** update dependency @types/node to v20.7.1 ([88dd8f9](https://github.com/lbenie/reading-time-estimator/commit/88dd8f911270757a0039af29c282bf71139aff5f))
* **deps:** update dependency @types/node to v20.7.2 ([437dd6d](https://github.com/lbenie/reading-time-estimator/commit/437dd6dc934d6e28a62e977c5c601263be002f84))
* **deps:** update dependency @types/node to v20.8.0 ([25ec9ba](https://github.com/lbenie/reading-time-estimator/commit/25ec9bafa755d7e0b03b3d85174b94eb8fff94eb))
* **deps:** update dependency @types/node to v20.8.10 ([0f7faa7](https://github.com/lbenie/reading-time-estimator/commit/0f7faa7fb1c60a97aeadbcb5b15bd2c5af2691a4))
* **deps:** update dependency @types/node to v20.8.2 ([848f1cf](https://github.com/lbenie/reading-time-estimator/commit/848f1cf9ff7e8a1450852e9318fd2a9163365c79))
* **deps:** update dependency @types/node to v20.8.3 ([5723df5](https://github.com/lbenie/reading-time-estimator/commit/5723df538b0ba6716db52963542f7b1063d2d2ed))
* **deps:** update dependency @types/node to v20.8.4 ([57034e5](https://github.com/lbenie/reading-time-estimator/commit/57034e559d9ff58393dd0fcf22170260fcfd4366))
* **deps:** update dependency @types/node to v20.8.5 ([0e32d70](https://github.com/lbenie/reading-time-estimator/commit/0e32d70199b9f72b70eac7ee776dd47c1e92f5ae))
* **deps:** update dependency @types/node to v20.8.6 ([4c88a7a](https://github.com/lbenie/reading-time-estimator/commit/4c88a7a95c0f93b14167338e38038d415b9ff7ec))
* **deps:** update dependency @types/node to v20.8.7 ([63cffb3](https://github.com/lbenie/reading-time-estimator/commit/63cffb34ce25ef87650b4d55f599c5ac205689ad))
* **deps:** update dependency @types/node to v20.8.8 ([a6046ad](https://github.com/lbenie/reading-time-estimator/commit/a6046adf0d7b86517eba226158ef70374bb45017))
* **deps:** update dependency @types/node to v20.8.9 ([3c2318e](https://github.com/lbenie/reading-time-estimator/commit/3c2318ea993f44f797612f8b6e221c443839fb76))
* **deps:** update dependency @types/node to v20.9.0 ([96ec941](https://github.com/lbenie/reading-time-estimator/commit/96ec941524e1f9db9ea3d681a7a2544e346d8a58))
* **deps:** update dependency @types/node to v20.9.1 ([0088095](https://github.com/lbenie/reading-time-estimator/commit/0088095c12358f3a5685505962b944a58e2d4dc0))
* **deps:** update dependency @types/node to v20.9.2 ([8d74ea0](https://github.com/lbenie/reading-time-estimator/commit/8d74ea03df9bf2854975027325bd9f5f6063ebf2))
* **deps:** update dependency @types/node to v20.9.3 ([32a1116](https://github.com/lbenie/reading-time-estimator/commit/32a11160415d4ce0c0aae8c637d2bd9d408ab728))
* **deps:** update dependency @types/node to v20.9.4 ([0dd82ff](https://github.com/lbenie/reading-time-estimator/commit/0dd82ffdb2f69cfcecf9404243607c82eb24a69e))
* **deps:** update dependency @types/node to v20.9.5 ([1ee6b94](https://github.com/lbenie/reading-time-estimator/commit/1ee6b942f8116111db4781b33aca17254281a13f))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.10.0 ([fbee547](https://github.com/lbenie/reading-time-estimator/commit/fbee54781c1e588f77d7233a2ee835ec8e1a8d7b))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.11.0 ([d16ffc2](https://github.com/lbenie/reading-time-estimator/commit/d16ffc2acd11db7c1d2790e6f7c29022f17bdd46))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.12.0 ([3b8e215](https://github.com/lbenie/reading-time-estimator/commit/3b8e215c1d856d5ab048ca5fa0579a213c489044))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.2.0 ([145b66b](https://github.com/lbenie/reading-time-estimator/commit/145b66b36bdf64c0854912aea8a718f21e6ec9db))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.2.1 ([6df4bfd](https://github.com/lbenie/reading-time-estimator/commit/6df4bfd33f52bb12b8b7bf4c5d1b06997467498c))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.3.0 ([2100491](https://github.com/lbenie/reading-time-estimator/commit/21004912bccce3f53d2f61616f18fa37e9cc4b54))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.4.0 ([a2c43cd](https://github.com/lbenie/reading-time-estimator/commit/a2c43cdba09595a17c5ec0bb89558e6829b9bcef))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.4.1 ([4effe39](https://github.com/lbenie/reading-time-estimator/commit/4effe39fde03742fc5189247e415346bbde8a9e5))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.5.0 ([8d28d80](https://github.com/lbenie/reading-time-estimator/commit/8d28d8029f1c2687e1635f114fc86a63bec376d7))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.6.0 ([f4b63e5](https://github.com/lbenie/reading-time-estimator/commit/f4b63e5dad926475c1fa38d9047ed1cf87dd23f2))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.7.0 ([a9f49b1](https://github.com/lbenie/reading-time-estimator/commit/a9f49b1820eea9b5be714f47faa7cad8adec18e8))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.7.2 ([3530e46](https://github.com/lbenie/reading-time-estimator/commit/3530e46ae743c0f6e3cb85965b399d05d5902d26))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.7.3 ([fe38e6b](https://github.com/lbenie/reading-time-estimator/commit/fe38e6b150ac72c5287894d6cfb832bf79a03eec))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.7.4 ([e8e2b48](https://github.com/lbenie/reading-time-estimator/commit/e8e2b4881ad855014428e18dee79fd85f4166ba9))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.7.5 ([0e7361c](https://github.com/lbenie/reading-time-estimator/commit/0e7361c4182fa6ca0c5b533e26c998711f4c4d1f))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.8.0 ([d3db3a8](https://github.com/lbenie/reading-time-estimator/commit/d3db3a816b7c147a45e2e77df7100facee3a38aa))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.9.0 ([f9aa859](https://github.com/lbenie/reading-time-estimator/commit/f9aa859fa083c095e315ec255df3bbfacd3456d2))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.9.1 ([951ca1e](https://github.com/lbenie/reading-time-estimator/commit/951ca1e1772c3aa118e5e0ea33e1c34f056dca97))
* **deps:** update dependency @typescript-eslint/parser to v6.10.0 ([29be526](https://github.com/lbenie/reading-time-estimator/commit/29be52642e7073d923466e7f5db3af33a1cae93e))
* **deps:** update dependency @typescript-eslint/parser to v6.11.0 ([812a175](https://github.com/lbenie/reading-time-estimator/commit/812a175f8859b91d690055e86c4a24f9e4915742))
* **deps:** update dependency @typescript-eslint/parser to v6.12.0 ([4d205c7](https://github.com/lbenie/reading-time-estimator/commit/4d205c78ea3b272873620a2da0fd75e1de4caa2b))
* **deps:** update dependency @typescript-eslint/parser to v6.2.0 ([d272d62](https://github.com/lbenie/reading-time-estimator/commit/d272d62b351951771799010d89c90750bede56a9))
* **deps:** update dependency @typescript-eslint/parser to v6.2.1 ([47e6172](https://github.com/lbenie/reading-time-estimator/commit/47e6172bdd647edb2d88aefbad6bcbbdbc75bb34))
* **deps:** update dependency @typescript-eslint/parser to v6.3.0 ([b47652e](https://github.com/lbenie/reading-time-estimator/commit/b47652e244cc6000ed6ac56436c87b39d21b0363))
* **deps:** update dependency @typescript-eslint/parser to v6.4.0 ([364eabc](https://github.com/lbenie/reading-time-estimator/commit/364eabc669331bd806d84bb681a987b737a2818d))
* **deps:** update dependency @typescript-eslint/parser to v6.4.1 ([79722dd](https://github.com/lbenie/reading-time-estimator/commit/79722ddbcfc469ae62960aff3ccb80bf6d87c316))
* **deps:** update dependency @typescript-eslint/parser to v6.5.0 ([2f70865](https://github.com/lbenie/reading-time-estimator/commit/2f708650d5157d2e0019db9e0771e01212ff5dc2))
* **deps:** update dependency @typescript-eslint/parser to v6.6.0 ([401130c](https://github.com/lbenie/reading-time-estimator/commit/401130cb45b29204b4ec352618085bbd707cbf3c))
* **deps:** update dependency @typescript-eslint/parser to v6.7.0 ([b68caf1](https://github.com/lbenie/reading-time-estimator/commit/b68caf1300345b768661066365f490b713abece7))
* **deps:** update dependency @typescript-eslint/parser to v6.7.2 ([e4ae6c5](https://github.com/lbenie/reading-time-estimator/commit/e4ae6c560759854bf7e5619b0f01591e2b4a58d7))
* **deps:** update dependency @typescript-eslint/parser to v6.7.3 ([61bce97](https://github.com/lbenie/reading-time-estimator/commit/61bce97843a5736f00af0cce196e09929de648c0))
* **deps:** update dependency @typescript-eslint/parser to v6.7.4 ([226313b](https://github.com/lbenie/reading-time-estimator/commit/226313b64d1c8c5096b4bd31d51dec82d0e9c7e6))
* **deps:** update dependency @typescript-eslint/parser to v6.7.5 ([a05e4f3](https://github.com/lbenie/reading-time-estimator/commit/a05e4f32afeb021b9405ab3612d23ea65a2bb4b4))
* **deps:** update dependency @typescript-eslint/parser to v6.8.0 ([f512b5a](https://github.com/lbenie/reading-time-estimator/commit/f512b5ae5e9fdbaea5292de60971f102201291bb))
* **deps:** update dependency @typescript-eslint/parser to v6.9.0 ([7157c91](https://github.com/lbenie/reading-time-estimator/commit/7157c91e8190eb2e3b35e25cff95b42bc9055b07))
* **deps:** update dependency @typescript-eslint/parser to v6.9.1 ([71097dd](https://github.com/lbenie/reading-time-estimator/commit/71097dd9cac6467bae674266a7f5cfbad107ab2b))
* **deps:** update dependency @vitest/coverage-v8 to ^0.34.0 ([8734af1](https://github.com/lbenie/reading-time-estimator/commit/8734af17ccd6cdc5ac4e51b6a788c0bf06674bdc))
* **deps:** update dependency @vitest/coverage-v8 to v0.34.2 ([dc19451](https://github.com/lbenie/reading-time-estimator/commit/dc194518752f81558ea1e20eb4d4b9f6f0015df7))
* **deps:** update dependency @vitest/coverage-v8 to v0.34.3 ([f32f5b0](https://github.com/lbenie/reading-time-estimator/commit/f32f5b01101c65c88426f539dd451d588566efda))
* **deps:** update dependency @vitest/coverage-v8 to v0.34.4 ([#1141](https://github.com/lbenie/reading-time-estimator/issues/1141)) ([f7887bd](https://github.com/lbenie/reading-time-estimator/commit/f7887bd5ba6bf79f621b7bbe2d5f65d1922c1ce0))
* **deps:** update dependency @vitest/coverage-v8 to v0.34.5 ([9fd8109](https://github.com/lbenie/reading-time-estimator/commit/9fd8109d2c92716c2a2adeae980ca3ba98aff3e4))
* **deps:** update dependency @vitest/coverage-v8 to v0.34.6 ([ab88677](https://github.com/lbenie/reading-time-estimator/commit/ab886773371ca5603ec0298408f3ca7ac8e3b6d4))
* **deps:** update dependency concurrently to v8.2.1 ([dd5226f](https://github.com/lbenie/reading-time-estimator/commit/dd5226f268cefd3ec53e5f5f53feadfdda9740db))
* **deps:** update dependency concurrently to v8.2.2 ([d246b77](https://github.com/lbenie/reading-time-estimator/commit/d246b77463b67b69355e43fda0d2007a95db274a))
* **deps:** update dependency conventional-changelog-conventionalcommits to v7.0.1 ([fae354e](https://github.com/lbenie/reading-time-estimator/commit/fae354e4bf99c918cdbb2870f6d0c25ad635efca))
* **deps:** update dependency conventional-changelog-conventionalcommits to v7.0.2 ([5d57f22](https://github.com/lbenie/reading-time-estimator/commit/5d57f2227c863bc70a70aba34c37c21baa44f834))
* **deps:** update dependency conventional-changelog-conventionalcommits to v7 ([1300df3](https://github.com/lbenie/reading-time-estimator/commit/1300df3798be154a31fb30dd95cc2bf93e808987))
* **deps:** update dependency eslint to v8.46.0 ([db566a4](https://github.com/lbenie/reading-time-estimator/commit/db566a46dbe501667acd580a0f773d79ab660285))
* **deps:** update dependency eslint to v8.47.0 ([a5476a8](https://github.com/lbenie/reading-time-estimator/commit/a5476a803a214b39e4910fe0e45c49d3401a5487))
* **deps:** update dependency eslint to v8.48.0 ([8b4e9b5](https://github.com/lbenie/reading-time-estimator/commit/8b4e9b58680d8f679c5138e5866cd43e9123b4be))
* **deps:** update dependency eslint to v8.49.0 ([1595af3](https://github.com/lbenie/reading-time-estimator/commit/1595af3cd5ad497c624193fb4dba1ee9bd5b9918))
* **deps:** update dependency eslint to v8.50.0 ([af5e15e](https://github.com/lbenie/reading-time-estimator/commit/af5e15e51ab6c7561e49c889f65040da44a95322))
* **deps:** update dependency eslint to v8.51.0 ([d416379](https://github.com/lbenie/reading-time-estimator/commit/d416379e554ea47053646acb200801c646759a5c))
* **deps:** update dependency eslint to v8.52.0 ([62d9213](https://github.com/lbenie/reading-time-estimator/commit/62d921310720818a2f6496c7752615519192adb6))
* **deps:** update dependency eslint to v8.53.0 ([44e708d](https://github.com/lbenie/reading-time-estimator/commit/44e708d12143c1c182f39797597d1c43adf4d22d))
* **deps:** update dependency eslint to v8.54.0 ([efd28b0](https://github.com/lbenie/reading-time-estimator/commit/efd28b061c06fa5473285e9e12b632fd33df6f83))
* **deps:** update dependency eslint-config-prettier to v8.10.0 ([82b01b7](https://github.com/lbenie/reading-time-estimator/commit/82b01b7f5e01cd53c4e85253e367a903550b36bb))
* **deps:** update dependency eslint-config-prettier to v8.9.0 ([aadf781](https://github.com/lbenie/reading-time-estimator/commit/aadf781482569fdfe01fcf453c444e598b8eea56))
* **deps:** update dependency eslint-config-prettier to v9 ([b347567](https://github.com/lbenie/reading-time-estimator/commit/b3475678163ae719e3bec116523008f12254bdf8))
* **deps:** update dependency eslint-plugin-prettier to v5.0.1 ([55c8039](https://github.com/lbenie/reading-time-estimator/commit/55c803920af2b5040f664b3b16a0f6c9a4aaee30))
* **deps:** update dependency prettier to v3.0.1 ([e72c103](https://github.com/lbenie/reading-time-estimator/commit/e72c103812060a693a234a5cf3b6b1a1fabe0159))
* **deps:** update dependency prettier to v3.0.2 ([bd5b3c7](https://github.com/lbenie/reading-time-estimator/commit/bd5b3c707320632ef6a442dec3427d4ac54dae85))
* **deps:** update dependency prettier to v3.0.3 ([9abff74](https://github.com/lbenie/reading-time-estimator/commit/9abff74cdedc91cd56e5d1ac8b319ad8c7206669))
* **deps:** update dependency prettier to v3.1.0 ([4e124d0](https://github.com/lbenie/reading-time-estimator/commit/4e124d01177ed7d42ef3f30ae47730155d5a83e9))
* **deps:** update dependency rollup to v3.27.0 ([1c93252](https://github.com/lbenie/reading-time-estimator/commit/1c93252e6fcdcbbe37b55dd745b6167551be7bdf))
* **deps:** update dependency rollup to v3.27.1 ([3f292fa](https://github.com/lbenie/reading-time-estimator/commit/3f292faee1d06ade0607849704820d775588c7fa))
* **deps:** update dependency rollup to v3.27.2 ([97ef825](https://github.com/lbenie/reading-time-estimator/commit/97ef8254fd35624b02bbcaa9b33ae1fe46f8738c))
* **deps:** update dependency rollup to v3.28.0 ([6fa9356](https://github.com/lbenie/reading-time-estimator/commit/6fa9356dc19467635371bd705ac3c31179ba1956))
* **deps:** update dependency rollup to v3.28.1 ([6c5f97b](https://github.com/lbenie/reading-time-estimator/commit/6c5f97bd3cc9e130d42731ebffac8cfdd3acea2b))
* **deps:** update dependency rollup to v3.29.0 ([2e93c10](https://github.com/lbenie/reading-time-estimator/commit/2e93c101cc60c3fe729ee23a000c97ed99648780))
* **deps:** update dependency rollup to v3.29.1 ([3f2db7f](https://github.com/lbenie/reading-time-estimator/commit/3f2db7f13ec6872c4de97cb057ac84395d98c7d4))
* **deps:** update dependency rollup to v3.29.2 ([c01150e](https://github.com/lbenie/reading-time-estimator/commit/c01150e34a540aa8766c5e8b243ebd7e7c1e78e2))
* **deps:** update dependency rollup to v3.29.3 ([54f20c0](https://github.com/lbenie/reading-time-estimator/commit/54f20c0588656fe3fa4753d77c4135e9f227b90e))
* **deps:** update dependency rollup to v3.29.4 ([89c045c](https://github.com/lbenie/reading-time-estimator/commit/89c045c3b463801d224eedc1827e1e47a9576a02))
* **deps:** update dependency rollup to v4.0.2 ([2e67c41](https://github.com/lbenie/reading-time-estimator/commit/2e67c4177cfe8af9f0789d3250d30f2d20f7424d))
* **deps:** update dependency rollup to v4.1.0 ([775327c](https://github.com/lbenie/reading-time-estimator/commit/775327c8cd167b86f40b0206a458872b40b27ff4))
* **deps:** update dependency rollup to v4.1.1 ([76b0db8](https://github.com/lbenie/reading-time-estimator/commit/76b0db865061ed687334f48f4f8308ff8383a36c))
* **deps:** update dependency rollup to v4.1.3 ([e789203](https://github.com/lbenie/reading-time-estimator/commit/e7892035853e91494b2a1191977b98f05a63d71c))
* **deps:** update dependency rollup to v4.1.4 ([84b3994](https://github.com/lbenie/reading-time-estimator/commit/84b3994c636683c03a85802d1cbccb3bb84fc9fb))
* **deps:** update dependency rollup to v4.1.5 ([4cda76a](https://github.com/lbenie/reading-time-estimator/commit/4cda76a595ea4f0aab63c1441b077723129beac9))
* **deps:** update dependency rollup to v4.2.0 ([fbe44bc](https://github.com/lbenie/reading-time-estimator/commit/fbe44bc7f63a96a7e58c1a0f6a0f96d875a2c84f))
* **deps:** update dependency rollup to v4.3.0 ([144aead](https://github.com/lbenie/reading-time-estimator/commit/144aead6bb5732331ea1190e9d970840752fa76c))
* **deps:** update dependency rollup to v4.3.1 ([53baaa6](https://github.com/lbenie/reading-time-estimator/commit/53baaa6a18cca795f7c77f0e029c998b6c5b9caf))
* **deps:** update dependency rollup to v4.4.0 ([889bdcc](https://github.com/lbenie/reading-time-estimator/commit/889bdcc3a95e3f3edc218924623fbb818c2d30e0))
* **deps:** update dependency rollup to v4.4.1 ([2491a28](https://github.com/lbenie/reading-time-estimator/commit/2491a28f22ffebfd5b34af1e0480db5a8a37e088))
* **deps:** update dependency rollup to v4.5.0 ([d5ec975](https://github.com/lbenie/reading-time-estimator/commit/d5ec9752f211e7138ec92b83444f25426f11e867))
* **deps:** update dependency rollup to v4.5.1 ([2e7c91a](https://github.com/lbenie/reading-time-estimator/commit/2e7c91aab55c0264db9f25bbe52bb7743fdf2cfe))
* **deps:** update dependency rollup to v4.5.2 ([3ab8f71](https://github.com/lbenie/reading-time-estimator/commit/3ab8f715a55268db9ae7019fc89da1fffa1782f6))
* **deps:** update dependency rollup to v4 ([433549d](https://github.com/lbenie/reading-time-estimator/commit/433549dd8f44a353f493b47472a2fedeb0c96e62))
* **deps:** update dependency rollup-plugin-typescript2 to v0.36.0 ([658007e](https://github.com/lbenie/reading-time-estimator/commit/658007e7b63397058cd6216c8acfab8b625270d6))
* **deps:** update dependency semantic-release to v21.0.8 ([a21369c](https://github.com/lbenie/reading-time-estimator/commit/a21369ca0539b244ba03d8579ef7354f019dcfc3))
* **deps:** update dependency semantic-release to v21.0.9 ([095cdfc](https://github.com/lbenie/reading-time-estimator/commit/095cdfc1bb03251862feb311bec9f9a82b6f324e))
* **deps:** update dependency semantic-release to v21.1.0 ([00e9fc6](https://github.com/lbenie/reading-time-estimator/commit/00e9fc6edcc5b3807e7f88ff7fc7f9a5fcbdbfff))
* **deps:** update dependency semantic-release to v21.1.1 ([e859912](https://github.com/lbenie/reading-time-estimator/commit/e859912e47d57156552964d86a3647a4e800337b))
* **deps:** update dependency semantic-release to v21.1.2 ([2943ffa](https://github.com/lbenie/reading-time-estimator/commit/2943ffafb507448af737f5b1eb2f632adb0aa63d))
* **deps:** update dependency semantic-release to v22.0.1 ([d683d63](https://github.com/lbenie/reading-time-estimator/commit/d683d63c6d5d6dc9507c40a4a8be3143c68377f4))
* **deps:** update dependency semantic-release to v22.0.4 ([d7742a5](https://github.com/lbenie/reading-time-estimator/commit/d7742a54f012d60571ceff4cfd346b379225ba5a))
* **deps:** update dependency semantic-release to v22.0.5 ([94851d7](https://github.com/lbenie/reading-time-estimator/commit/94851d7658d5d4d65c13c5b3dcc353a298ea1674))
* **deps:** update dependency semantic-release to v22.0.6 ([3f9ad1c](https://github.com/lbenie/reading-time-estimator/commit/3f9ad1c9462d59d817813445a5a477e5f12bf798))
* **deps:** update dependency semantic-release to v22.0.7 ([6e9771e](https://github.com/lbenie/reading-time-estimator/commit/6e9771e3242de4aec79321cd839f6ee1d5b74c21))
* **deps:** update dependency semantic-release to v22.0.8 ([e24dee7](https://github.com/lbenie/reading-time-estimator/commit/e24dee75089033cbc80bc0f112d30fbd93749ad6))
* **deps:** update dependency semantic-release to v22 ([5767ba9](https://github.com/lbenie/reading-time-estimator/commit/5767ba9ea1d1c975ec92d7f1b46a8c6bdbbf5842))
* **deps:** update dependency typescript to v5.2.2 ([f9e1edd](https://github.com/lbenie/reading-time-estimator/commit/f9e1edde846f1332be05427b7e26960ca383e1a0))
* **deps:** update dependency typescript to v5.3.2 ([8ae86f9](https://github.com/lbenie/reading-time-estimator/commit/8ae86f92db6967b93506ed9f37a941a43e916d3d))
* **deps:** update dependency unplugin-auto-import to v0.16.7 ([cd51dcf](https://github.com/lbenie/reading-time-estimator/commit/cd51dcf68698843ee0aeca834bec5de98bac309d))
* **deps:** update dependency vite to v4.4.10 ([a8f463c](https://github.com/lbenie/reading-time-estimator/commit/a8f463cf5404209eb6c489d414dc30d6e31b53ae))
* **deps:** update dependency vite to v4.4.11 ([569861f](https://github.com/lbenie/reading-time-estimator/commit/569861f39f78401aeab1ce117eb3a90ae06af78f))
* **deps:** update dependency vite to v4.4.5 ([238aef7](https://github.com/lbenie/reading-time-estimator/commit/238aef711a7700e4ca810c97eafba37404026b81))
* **deps:** update dependency vite to v4.4.6 ([7b15a26](https://github.com/lbenie/reading-time-estimator/commit/7b15a2673e185e20016a058824eefcb6ddd3c4d9))
* **deps:** update dependency vite to v4.4.7 ([8aae982](https://github.com/lbenie/reading-time-estimator/commit/8aae98219a69cb20f39ad90d27070fd1bd46db6c))
* **deps:** update dependency vite to v4.4.8 ([dffc7b1](https://github.com/lbenie/reading-time-estimator/commit/dffc7b1b07209def6348a2f0730ae842126ddd59))
* **deps:** update dependency vite to v4.4.9 ([7ac8698](https://github.com/lbenie/reading-time-estimator/commit/7ac86980b88e83fa5ca0b7ded7a57aa809952687))
* **deps:** update dependency vite to v4.5.0 ([2701d3c](https://github.com/lbenie/reading-time-estimator/commit/2701d3c1d0b08bc6049f194903bbdc9dad676bb1))
* **deps:** update dependency vite to v5.0.2 ([#1252](https://github.com/lbenie/reading-time-estimator/issues/1252)) ([c3c867d](https://github.com/lbenie/reading-time-estimator/commit/c3c867dfa104aa52ca7694d7f9f7960b05f75a11))
* **deps:** update dependency vite to v5 ([44dffaa](https://github.com/lbenie/reading-time-estimator/commit/44dffaac8ef90db8b536617157269112bb4e28fd))
* **deps:** update dependency vitest to ^0.34.0 ([acbb5c0](https://github.com/lbenie/reading-time-estimator/commit/acbb5c0c27fb8b4923a41c75aadc8e5668d33f61))
* **deps:** update dependency vitest to v0.34.2 ([af916c2](https://github.com/lbenie/reading-time-estimator/commit/af916c24039b3db1d345578efa8ce361c32dccd3))
* **deps:** update dependency vitest to v0.34.3 ([16d4bf0](https://github.com/lbenie/reading-time-estimator/commit/16d4bf0b68b924217465e4bb609e5fcb37409d9d))
* **deps:** update dependency vitest to v0.34.4 ([#1142](https://github.com/lbenie/reading-time-estimator/issues/1142)) ([e9fba7d](https://github.com/lbenie/reading-time-estimator/commit/e9fba7d22b81192abc7b1e976f0cf82818fe2d04))
* **deps:** update dependency vitest to v0.34.5 ([f6bc16c](https://github.com/lbenie/reading-time-estimator/commit/f6bc16c50d1e50ac508871293a86612a7d2bd966))
* **deps:** update dependency vitest to v0.34.6 ([f41473f](https://github.com/lbenie/reading-time-estimator/commit/f41473f42265202d2e909bce9fdef1ef01a08572))
* update linting rules [skip ci] ([4d1dae5](https://github.com/lbenie/reading-time-estimator/commit/4d1dae54b69c3eddae8c8f0df0c52fb7cd9b9af3))
* **deps:** update stefanzweifel/git-auto-commit-action action to v5 ([#1194](https://github.com/lbenie/reading-time-estimator/issues/1194)) ([ff9e3d0](https://github.com/lbenie/reading-time-estimator/commit/ff9e3d02574f8ca4ec4ccda910ca704114686afe))
* use my personal linting rules ([1b2a831](https://github.com/lbenie/reading-time-estimator/commit/1b2a8317bd8dc94e5434baac52fcb51a70026119))

## [1.9.0](https://github.com/lbenie/reading-time-estimator/compare/v1.8.1...v1.9.0) (2023-07-19)


### :sparkles: Features

* add language support for turkish ([#1068](https://github.com/lbenie/reading-time-estimator/issues/1068)) ([c447bbb](https://github.com/lbenie/reading-time-estimator/commit/c447bbbb2f8e2511eb1d21c297bb86846d5ecc9d))
* add romanian language ([#1070](https://github.com/lbenie/reading-time-estimator/issues/1070)) ([1657d7a](https://github.com/lbenie/reading-time-estimator/commit/1657d7a4dadd6c36a8b2ea42fd882450434b8c55))


### :memo: Documenation

* add astrutz as a contributor for code ([#1065](https://github.com/lbenie/reading-time-estimator/issues/1065)) ([ad38b5f](https://github.com/lbenie/reading-time-estimator/commit/ad38b5f68e0a17831954287fe5e08940eada877c))
* add can-guven as a contributor for code ([#1069](https://github.com/lbenie/reading-time-estimator/issues/1069)) ([ee9f265](https://github.com/lbenie/reading-time-estimator/commit/ee9f26503ce34a311f3ecad7522d5cff676d9789))


### :white_check_mark: Chores

* **deps:** bump semver from 5.7.1 to 5.7.2 ([#1056](https://github.com/lbenie/reading-time-estimator/issues/1056)) ([c205a39](https://github.com/lbenie/reading-time-estimator/commit/c205a399a7143be42f518839256a75b0c22ac1ab))
* rename branch to main [ci skip] ([6e83b4f](https://github.com/lbenie/reading-time-estimator/commit/6e83b4fdb0c421d1fbdfd4fc017e12c36c2cd196))
* **deps:** update dependency @rollup/plugin-typescript to v11.1.0 ([d65b128](https://github.com/lbenie/reading-time-estimator/commit/d65b1281dfab163fe8212ae56a117ec2dc209548))
* **deps:** update dependency @rollup/plugin-typescript to v11.1.1 ([767822f](https://github.com/lbenie/reading-time-estimator/commit/767822f137125e58b3a4d70f8b34efc5e7bdee42))
* **deps:** update dependency @rollup/plugin-typescript to v11.1.2 ([a8621e6](https://github.com/lbenie/reading-time-estimator/commit/a8621e65b257028043b366d051b891571c8c6739))
* **deps:** update dependency @semantic-release/changelog to v6.0.3 ([35a8387](https://github.com/lbenie/reading-time-estimator/commit/35a83878f43a7e05fabb8d5c1f3b69c0241f50ca))
* **deps:** update dependency @semantic-release/github to v8.0.8 ([e984a9e](https://github.com/lbenie/reading-time-estimator/commit/e984a9ee423f41e72bbb8a35930278883344fd41))
* **deps:** update dependency @semantic-release/github to v8.1.0 ([ee77f7d](https://github.com/lbenie/reading-time-estimator/commit/ee77f7d302f0b87e56a732a2ec8cd99678917e22))
* **deps:** update dependency @semantic-release/github to v9.0.2 ([7d4ea54](https://github.com/lbenie/reading-time-estimator/commit/7d4ea5411d3013e5e91392d135cb376f1a39fe78))
* **deps:** update dependency @semantic-release/github to v9.0.3 ([b5764e2](https://github.com/lbenie/reading-time-estimator/commit/b5764e26ca087ff9ac500e6cca0197f0b66cf82e))
* **deps:** update dependency @semantic-release/github to v9.0.4 ([8a3967d](https://github.com/lbenie/reading-time-estimator/commit/8a3967d10274f2fb24ffad9f579bac1d6c7e24f3))
* **deps:** update dependency @semantic-release/github to v9 ([df751f9](https://github.com/lbenie/reading-time-estimator/commit/df751f9b78fae2eb2c6e644c0b39b8fb994b81db))
* **deps:** update dependency @semantic-release/release-notes-generator to v11.0.3 ([b32e726](https://github.com/lbenie/reading-time-estimator/commit/b32e7268257539754af1124114be2d2879b178e1))
* **deps:** update dependency @semantic-release/release-notes-generator to v11.0.4 ([090d9fc](https://github.com/lbenie/reading-time-estimator/commit/090d9fcc784928092b73283fbdec812ef1f2f760))
* **deps:** update dependency @semantic-release/release-notes-generator to v11 ([6b2989c](https://github.com/lbenie/reading-time-estimator/commit/6b2989cedca48f9fa30eb1e3e578984249c09aa9))
* **deps:** update dependency @types/node to v18.15.10 ([1c4daae](https://github.com/lbenie/reading-time-estimator/commit/1c4daae7423e738d65325bf4bb82b194d05fffcb))
* **deps:** update dependency @types/node to v18.15.11 ([48b59cf](https://github.com/lbenie/reading-time-estimator/commit/48b59cf17d209303ea617ba61ff9b8a79e6a0591))
* **deps:** update dependency @types/node to v18.15.5 ([c3257e6](https://github.com/lbenie/reading-time-estimator/commit/c3257e6e2efdf161a33958b1ffd8135e8e55f917))
* **deps:** update dependency @types/node to v18.15.6 ([e81eb18](https://github.com/lbenie/reading-time-estimator/commit/e81eb18b79aaf9ca6360534066f79468fe52b4a4))
* **deps:** update dependency @types/node to v18.15.7 ([282f4bf](https://github.com/lbenie/reading-time-estimator/commit/282f4bfcfdd6112c88c722d0ad8bf089e6f984f2))
* **deps:** update dependency @types/node to v18.15.8 ([d419437](https://github.com/lbenie/reading-time-estimator/commit/d4194373d7fda7bd65a2513855735f06fed1530d))
* **deps:** update dependency @types/node to v18.15.9 ([21eb74f](https://github.com/lbenie/reading-time-estimator/commit/21eb74f410486e1a9aa53448c0e508132304385a))
* **deps:** update dependency @types/node to v18.16.16 ([f1dfccd](https://github.com/lbenie/reading-time-estimator/commit/f1dfccd346cf4d7cb2338cd5366e856ed5cba263))
* **deps:** update dependency @types/node to v20.3.1 ([0ce3ae3](https://github.com/lbenie/reading-time-estimator/commit/0ce3ae30b1e908b843bc7da98489533856622807))
* **deps:** update dependency @types/node to v20.3.2 ([f0c6db1](https://github.com/lbenie/reading-time-estimator/commit/f0c6db14ac420817c843fd204a2d0d2aa1ab1170))
* **deps:** update dependency @types/node to v20.3.3 ([bdf6016](https://github.com/lbenie/reading-time-estimator/commit/bdf601630f5f87b2f78933f33be4a082e2aa9d93))
* **deps:** update dependency @types/node to v20.4.0 ([1bc1214](https://github.com/lbenie/reading-time-estimator/commit/1bc12142ed57d39116946470f44abf7087d142b5))
* **deps:** update dependency @types/node to v20.4.1 ([99e661f](https://github.com/lbenie/reading-time-estimator/commit/99e661fd9bb7449ac0a55a87e13e8fd81af4ecec))
* **deps:** update dependency @types/node to v20.4.2 ([c5ec495](https://github.com/lbenie/reading-time-estimator/commit/c5ec49598d7e57fd1a525b5c27720cbd24410316))
* **deps:** update dependency @types/node to v20 ([859a3f9](https://github.com/lbenie/reading-time-estimator/commit/859a3f9ec88140f1d937f7f88ea0c45df7583ff8))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.56.0 ([3d2a5fd](https://github.com/lbenie/reading-time-estimator/commit/3d2a5fd715e125fccfa608aa761a3776b18237ab))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.57.0 ([24e0e79](https://github.com/lbenie/reading-time-estimator/commit/24e0e79af8f2fc14feb7f015adf28b900728e69b))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.57.1 ([f1f3815](https://github.com/lbenie/reading-time-estimator/commit/f1f38154f9aac241245073122c7fcef4c4131307))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.58.0 ([f8255d3](https://github.com/lbenie/reading-time-estimator/commit/f8255d3c733d6984465eb001b411d576ca29c7a9))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.59.0 ([b82c71e](https://github.com/lbenie/reading-time-estimator/commit/b82c71eefa70e0decac02bf5666c319131673569))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.59.11 ([f719083](https://github.com/lbenie/reading-time-estimator/commit/f719083278f27334181d5b472f7287fc897401af))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.59.7 ([4587088](https://github.com/lbenie/reading-time-estimator/commit/45870889a8cd6f3fd0fdceeb6b34dbc97d380e4d))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.59.8 ([5f968bd](https://github.com/lbenie/reading-time-estimator/commit/5f968bdd7ae05b146e1dc1e281c625b86c051376))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.59.9 ([825ac1c](https://github.com/lbenie/reading-time-estimator/commit/825ac1ceafc738b5b617195461c36908c1cbdea9))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.60.0 ([f20ea59](https://github.com/lbenie/reading-time-estimator/commit/f20ea59126a15b859518c27e1edde92a81feb7db))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.60.1 ([b45b09b](https://github.com/lbenie/reading-time-estimator/commit/b45b09b37f0916d4b33fef3d3805347c0ec26b99))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.61.0 ([b010b87](https://github.com/lbenie/reading-time-estimator/commit/b010b87a457e98e30d5224e1455ab6bc46c0cf3f))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.62.0 ([b92b177](https://github.com/lbenie/reading-time-estimator/commit/b92b177738dbac4ad73109c16cef78679e1fdc87))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6.1.0 ([b98e613](https://github.com/lbenie/reading-time-estimator/commit/b98e613dc33525cf2567f8384ef8213cb455025a))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v6 ([c5ef215](https://github.com/lbenie/reading-time-estimator/commit/c5ef215bab8a9f57af963d2f0d57dcd276ff3195))
* **deps:** update dependency @typescript-eslint/parser to v5.56.0 ([4674710](https://github.com/lbenie/reading-time-estimator/commit/46747100597b47cc6fa67f149554b65bd1e148b5))
* **deps:** update dependency @typescript-eslint/parser to v5.57.0 ([91468d1](https://github.com/lbenie/reading-time-estimator/commit/91468d1b73fd20f527309bc620c1572bbf0f25e3))
* **deps:** update dependency @typescript-eslint/parser to v5.57.1 ([ea1a8e1](https://github.com/lbenie/reading-time-estimator/commit/ea1a8e1ab29fc5d55506aeb5369f45687445fcf5))
* **deps:** update dependency @typescript-eslint/parser to v5.58.0 ([7861748](https://github.com/lbenie/reading-time-estimator/commit/7861748e0585636b43b5600c92dab139f8820bd0))
* **deps:** update dependency @typescript-eslint/parser to v5.59.0 ([c0fef8c](https://github.com/lbenie/reading-time-estimator/commit/c0fef8c0b01c46d1eefde13c3f68a9e4c5ff1f2e))
* **deps:** update dependency @typescript-eslint/parser to v5.59.11 ([4149e4a](https://github.com/lbenie/reading-time-estimator/commit/4149e4a828ed9e8109ab2b3487febaafb5fcbff0))
* **deps:** update dependency @typescript-eslint/parser to v5.59.7 ([fc6ba22](https://github.com/lbenie/reading-time-estimator/commit/fc6ba22c15b2bac25c4feeba4a413b406f8eb20d))
* **deps:** update dependency @typescript-eslint/parser to v5.59.8 ([d09b399](https://github.com/lbenie/reading-time-estimator/commit/d09b3990276158a7c0258683da0ffc535a5a3f19))
* **deps:** update dependency @typescript-eslint/parser to v5.59.9 ([c82b06f](https://github.com/lbenie/reading-time-estimator/commit/c82b06f24430707606b4901c57bcec24674e36b5))
* **deps:** update dependency @typescript-eslint/parser to v5.60.0 ([6c620dc](https://github.com/lbenie/reading-time-estimator/commit/6c620dceb225b61dce1d2581a18e7e2e7316e420))
* **deps:** update dependency @typescript-eslint/parser to v5.60.1 ([170b4bc](https://github.com/lbenie/reading-time-estimator/commit/170b4bc45fa4c22aeab1e01b1b06e639b3d849be))
* **deps:** update dependency @typescript-eslint/parser to v5.61.0 ([538643a](https://github.com/lbenie/reading-time-estimator/commit/538643a344515f424dff9094bab0c3fb0e6c67d1))
* **deps:** update dependency @typescript-eslint/parser to v5.62.0 ([277dcfb](https://github.com/lbenie/reading-time-estimator/commit/277dcfbb14ca204250fefd6b9ca66a9c8b710b5a))
* **deps:** update dependency @typescript-eslint/parser to v6.1.0 ([3bd302e](https://github.com/lbenie/reading-time-estimator/commit/3bd302e15bc02d5546298694e917aa9118e02fdd))
* **deps:** update dependency @typescript-eslint/parser to v6 ([7e34273](https://github.com/lbenie/reading-time-estimator/commit/7e34273f68e86a4f952f6508024215b9bafb0ee6))
* **deps:** update dependency @vitest/coverage-c8 to v0.29.5 ([7b0604d](https://github.com/lbenie/reading-time-estimator/commit/7b0604d6c6cab829c2345ab2ab0dee209b0fa0a3))
* **deps:** update dependency @vitest/coverage-c8 to v0.29.7 ([4df95a9](https://github.com/lbenie/reading-time-estimator/commit/4df95a9c4e20a2b8475ef803c45d7c0a4a2c30ae))
* **deps:** update dependency @vitest/coverage-c8 to v0.29.8 ([25f3390](https://github.com/lbenie/reading-time-estimator/commit/25f3390a5df0b9e42120f4f27f4a8b9fcbed7c5a))
* **deps:** update dependency @vitest/coverage-c8 to v0.30.0 ([c0ef614](https://github.com/lbenie/reading-time-estimator/commit/c0ef6145a720154b2e627ebaf5144f879b3de449))
* **deps:** update dependency @vitest/coverage-c8 to v0.30.1 ([de82605](https://github.com/lbenie/reading-time-estimator/commit/de82605522dfe82b85790de6eaab19e0d2f50f73))
* **deps:** update dependency @vitest/coverage-c8 to v0.31.1 ([0f47c79](https://github.com/lbenie/reading-time-estimator/commit/0f47c79f93fb3aa04832a1e150fb494c333add56))
* **deps:** update dependency @vitest/coverage-c8 to v0.31.2 ([dae3899](https://github.com/lbenie/reading-time-estimator/commit/dae38996b3deaf992074c26674121d631b7ab19f))
* **deps:** update dependency @vitest/coverage-c8 to v0.31.3 ([832a974](https://github.com/lbenie/reading-time-estimator/commit/832a974d3c4e5c4643c8044bc4af3b7d308c7e11))
* **deps:** update dependency @vitest/coverage-c8 to v0.31.4 ([bb5bd87](https://github.com/lbenie/reading-time-estimator/commit/bb5bd87ebfb88544ef21117701264820d465990e))
* **deps:** update dependency @vitest/coverage-c8 to v0.32.0 ([77f0469](https://github.com/lbenie/reading-time-estimator/commit/77f046918ca0b4c7668407e1672adc5acc89294a))
* **deps:** update dependency @vitest/coverage-c8 to v0.32.2 ([8f80aff](https://github.com/lbenie/reading-time-estimator/commit/8f80aff6a005ba517ccf869df14a15ce02a50a0a))
* **deps:** update dependency @vitest/coverage-v8 to ^0.33.0 ([6c639ef](https://github.com/lbenie/reading-time-estimator/commit/6c639ef73cea0e54c0e4a1928c0ea80218933472))
* **deps:** update dependency @vitest/coverage-v8 to v0.32.4 ([ed9ffcb](https://github.com/lbenie/reading-time-estimator/commit/ed9ffcb23af823bba73df026a19d0f206c298bff))
* **deps:** update dependency all-contributors-cli to v6.26.0 ([efd611f](https://github.com/lbenie/reading-time-estimator/commit/efd611f5b9876db252f27b130ae2c81578f268f0))
* **deps:** update dependency all-contributors-cli to v6.26.1 ([79cf42d](https://github.com/lbenie/reading-time-estimator/commit/79cf42dc1c15509782a7c3af25b45daef9519969))
* **deps:** update dependency c8 to v7.14.0 ([b2afbf5](https://github.com/lbenie/reading-time-estimator/commit/b2afbf5351a31fd659573a5d828a5973f807d9a8))
* **deps:** update dependency c8 to v8 ([3adb8fd](https://github.com/lbenie/reading-time-estimator/commit/3adb8fdc6d9c49e78b78530f749e9f89dd21a5c7))
* **deps:** update dependency concurrently to v8.1.0 ([90c62ba](https://github.com/lbenie/reading-time-estimator/commit/90c62ba71b3e9dba40cf1e680ac8bd54deabf7c9))
* **deps:** update dependency concurrently to v8.2.0 ([be8eef2](https://github.com/lbenie/reading-time-estimator/commit/be8eef20c8f036224752e5103255992775d849be))
* **deps:** update dependency concurrently to v8 ([d457faf](https://github.com/lbenie/reading-time-estimator/commit/d457faf205fd3634e1e71611968a9f44d210ec30))
* **deps:** update dependency conventional-changelog-conventionalcommits to v6.1.0 ([649d6cd](https://github.com/lbenie/reading-time-estimator/commit/649d6cdea2334d1b705476069bf82b84e8c20a24))
* **deps:** update dependency conventional-changelog-conventionalcommits to v6 ([03a4339](https://github.com/lbenie/reading-time-estimator/commit/03a43393dc0390e8a80cd9dc3c39410965b90dba))
* **deps:** update dependency eslint to v8.37.0 ([499c8c1](https://github.com/lbenie/reading-time-estimator/commit/499c8c18f2b4b5345d88322e1dfcd6b8d10206ba))
* **deps:** update dependency eslint to v8.38.0 ([f8bc4fc](https://github.com/lbenie/reading-time-estimator/commit/f8bc4fca36b9024b391ec08ba682a6ec47010152))
* **deps:** update dependency eslint to v8.41.0 ([1b3cb2b](https://github.com/lbenie/reading-time-estimator/commit/1b3cb2b4714d6eb6427878ca1c9307f6bf2d9a6e))
* **deps:** update dependency eslint to v8.42.0 ([afb8a38](https://github.com/lbenie/reading-time-estimator/commit/afb8a3897599237601f13bf976482745cbc54a57))
* **deps:** update dependency eslint to v8.43.0 ([257ccc3](https://github.com/lbenie/reading-time-estimator/commit/257ccc3de383da22bd16aab4f63fe53001b805b2))
* **deps:** update dependency eslint to v8.44.0 ([4d46295](https://github.com/lbenie/reading-time-estimator/commit/4d46295fcfc4f42d9a69ae442e8de6158be685a1))
* **deps:** update dependency eslint to v8.45.0 ([1824e14](https://github.com/lbenie/reading-time-estimator/commit/1824e149b38f9aff4d7412bb436087ffcc8101d6))
* **deps:** update dependency eslint-config-prettier to v8.8.0 ([9aec191](https://github.com/lbenie/reading-time-estimator/commit/9aec191d783a7bd0ff22fd81919ec48caa858796))
* **deps:** update dependency eslint-plugin-prettier to v5 ([9be0ed6](https://github.com/lbenie/reading-time-estimator/commit/9be0ed678bececab455340f1b5273890bdb0be3b))
* **deps:** update dependency prettier to v2.8.6 ([10d41bf](https://github.com/lbenie/reading-time-estimator/commit/10d41bf18859e576e839c44c6ed91a7d7efc739e))
* **deps:** update dependency prettier to v2.8.7 ([2c21108](https://github.com/lbenie/reading-time-estimator/commit/2c21108509402b5ce86b82918b2496c8eb8b57ec))
* **deps:** update dependency prettier to v2.8.8 ([4bfbbfa](https://github.com/lbenie/reading-time-estimator/commit/4bfbbfa0873898dff7ea84c7c06fbb4cc1f2bc3b))
* **deps:** update dependency prettier to v3 ([#1042](https://github.com/lbenie/reading-time-estimator/issues/1042)) ([079efab](https://github.com/lbenie/reading-time-estimator/commit/079efab7c2cedf5f46a371e4cbd0d6e9bb04c609))
* **deps:** update dependency rollup to v3.26.1 ([a73b8a8](https://github.com/lbenie/reading-time-estimator/commit/a73b8a887785b1fc298557904e4bb2c2d4710da0))
* **deps:** update dependency rollup to v3.26.2 ([f043d3f](https://github.com/lbenie/reading-time-estimator/commit/f043d3f63984f8ae7a628aa5f760670337d25561))
* **deps:** update dependency rollup to v3.26.3 ([f6c8a1c](https://github.com/lbenie/reading-time-estimator/commit/f6c8a1cf3e6eb4fc711cc300480a8ec21f540a12))
* **deps:** update dependency rollup-plugin-typescript2 to v0.35.0 ([e5734a5](https://github.com/lbenie/reading-time-estimator/commit/e5734a58a0ffef9e2a39a22c7d053afc6a9ee913))
* **deps:** update dependency semantic-release to v21.0.1 ([dad3a04](https://github.com/lbenie/reading-time-estimator/commit/dad3a04d823ac93473e87e8ffeb57190945a8982))
* **deps:** update dependency semantic-release to v21.0.2 ([2f01337](https://github.com/lbenie/reading-time-estimator/commit/2f0133749cbe37367c12a22efaed3278a7811acc))
* **deps:** update dependency semantic-release to v21.0.3 ([4894664](https://github.com/lbenie/reading-time-estimator/commit/489466471fc934b49634570329cbec5245cf47e8))
* **deps:** update dependency semantic-release to v21.0.5 ([c8e3ddc](https://github.com/lbenie/reading-time-estimator/commit/c8e3ddcca43396aabfa7baac6f0db9cc42cefe30))
* **deps:** update dependency semantic-release to v21.0.6 ([1c57285](https://github.com/lbenie/reading-time-estimator/commit/1c5728599ba2d94819cab175678e3df6e2a18985))
* **deps:** update dependency semantic-release to v21.0.7 ([d2c00a8](https://github.com/lbenie/reading-time-estimator/commit/d2c00a8075bb31a7c6440e7a3f910289a6358242))
* **deps:** update dependency semantic-release to v21 ([ba59c87](https://github.com/lbenie/reading-time-estimator/commit/ba59c875d5b5a1d800df34c63a2b8fb1d6ea017e))
* **deps:** update dependency typescript to v5.0.3 ([c5540ac](https://github.com/lbenie/reading-time-estimator/commit/c5540acd3d25bbbbc2676ad129306634369227ea))
* **deps:** update dependency typescript to v5.0.4 ([5a0a941](https://github.com/lbenie/reading-time-estimator/commit/5a0a94153cc608ee1a76ea40c1a2acae95a218bc))
* **deps:** update dependency typescript to v5.1.3 ([b47ca3d](https://github.com/lbenie/reading-time-estimator/commit/b47ca3db7f574698e74ea46eafd43f6bb842eec4))
* **deps:** update dependency typescript to v5.1.5 ([f2ad73c](https://github.com/lbenie/reading-time-estimator/commit/f2ad73cab14a0091a028c39832a7a933fc57a6ca))
* **deps:** update dependency typescript to v5.1.6 ([2a06513](https://github.com/lbenie/reading-time-estimator/commit/2a06513e437f28bb6fb749408976b02c1ab0f795))
* **deps:** update dependency unplugin-auto-import to ^0.16.0 ([0544055](https://github.com/lbenie/reading-time-estimator/commit/054405562b0dc900db3638acdd73d516b0e158ab))
* **deps:** update dependency unplugin-auto-import to v0.15.2 ([960a155](https://github.com/lbenie/reading-time-estimator/commit/960a155ee932a8e425b4017f0945fa63aa7122ca))
* **deps:** update dependency unplugin-auto-import to v0.15.3 ([b264e73](https://github.com/lbenie/reading-time-estimator/commit/b264e733cde2bb82a38d66b64101822d5637d20a))
* **deps:** update dependency unplugin-auto-import to v0.16.4 ([6ea9e15](https://github.com/lbenie/reading-time-estimator/commit/6ea9e155c3f2d05eec8f62a0bafafd0ece88958c))
* **deps:** update dependency unplugin-auto-import to v0.16.6 ([#1038](https://github.com/lbenie/reading-time-estimator/issues/1038)) ([b50999a](https://github.com/lbenie/reading-time-estimator/commit/b50999ab03b8c86ed163fcf4aba07fc6737c612d))
* **deps:** update dependency vite to v4.2.1 ([7924007](https://github.com/lbenie/reading-time-estimator/commit/792400763fd1daeae01f7e46cf96f46744e5a798))
* **deps:** update dependency vite to v4.3.9 ([90971a7](https://github.com/lbenie/reading-time-estimator/commit/90971a7be17cf59293c9c7e27563af9313ed1d4d))
* **deps:** update dependency vite to v4.4.0 ([910649c](https://github.com/lbenie/reading-time-estimator/commit/910649c21c2805913016f33c48a8d319f0a614a6))
* **deps:** update dependency vite to v4.4.1 ([4cb27af](https://github.com/lbenie/reading-time-estimator/commit/4cb27af952b788daa293769d9e2f7740fae5c231))
* **deps:** update dependency vite to v4.4.2 ([d3bf07c](https://github.com/lbenie/reading-time-estimator/commit/d3bf07c3ef8348158ad2c1ac6dd31ab6cf5b369c))
* **deps:** update dependency vite to v4.4.3 ([fa23f1f](https://github.com/lbenie/reading-time-estimator/commit/fa23f1f853f65fc79aefebfa27c36e3e392349fb))
* **deps:** update dependency vite to v4.4.4 ([464aa5e](https://github.com/lbenie/reading-time-estimator/commit/464aa5ef7afe2979ca3648b025f67affa69c0769))
* **deps:** update dependency vitest to ^0.30.0 ([fc7df98](https://github.com/lbenie/reading-time-estimator/commit/fc7df98a10385ec7a9cde2a8f3a9eb30c6ba69b5))
* **deps:** update dependency vitest to ^0.31.0 ([2a8c5a9](https://github.com/lbenie/reading-time-estimator/commit/2a8c5a98d6116f4d8fd98c884a7a60fdd109f70f))
* **deps:** update dependency vitest to ^0.32.0 ([#1010](https://github.com/lbenie/reading-time-estimator/issues/1010)) ([6f4723e](https://github.com/lbenie/reading-time-estimator/commit/6f4723eee1d5179a194e8ad0c539b5806851d724))
* **deps:** update dependency vitest to ^0.33.0 ([b878f1f](https://github.com/lbenie/reading-time-estimator/commit/b878f1fbf421cbc00e5c448eb256290dcaf6bff5))
* **deps:** update dependency vitest to v0.29.7 ([9739652](https://github.com/lbenie/reading-time-estimator/commit/9739652310aebd8e0cf28bcc5eafbb7c1561ac51))
* **deps:** update dependency vitest to v0.29.8 ([edc7a3a](https://github.com/lbenie/reading-time-estimator/commit/edc7a3ad4f900f98fb17d4e7aaf84df923c6b1e1))
* **deps:** update dependency vitest to v0.30.1 ([0d6b60c](https://github.com/lbenie/reading-time-estimator/commit/0d6b60c757dc4befd3d2522f309401fd64bc3208))
* **deps:** update dependency vitest to v0.31.2 ([f2bb3dc](https://github.com/lbenie/reading-time-estimator/commit/f2bb3dc8486d4d0204ca719099562a88483bf5c6))
* **deps:** update dependency vitest to v0.31.3 ([e88ec9d](https://github.com/lbenie/reading-time-estimator/commit/e88ec9d6d9f28f262c2c01dda833e2525e55d684))
* **deps:** update dependency vitest to v0.31.4 ([c5fd2af](https://github.com/lbenie/reading-time-estimator/commit/c5fd2af2c7a91fb91fd07156803bc68347901c0f))
* **deps:** update dependency vitest to v0.32.4 ([062b223](https://github.com/lbenie/reading-time-estimator/commit/062b2234c87f7a36e47428c62b911e804c127dba))

## [1.8.1](https://github.com/lbenie/reading-time-estimator/compare/v1.8.0...v1.8.1) (2023-03-20)


### :white_check_mark: Chores

* **deps:** update dependency prettier to v2.8.5 ([0093410](https://github.com/lbenie/reading-time-estimator/commit/00934108707b0fc4665e6e1a4db2c9fb66457580))
* **deps:** update dependency semantic-release to v20.1.3 ([657a846](https://github.com/lbenie/reading-time-estimator/commit/657a8463ca2088067b02cd34a5f4c47179f75833))


### :bug: Fixes

* specify folder to dist ([#931](https://github.com/lbenie/reading-time-estimator/issues/931)) ([c676938](https://github.com/lbenie/reading-time-estimator/commit/c67693806bbcc76b10d5b3f6095efedfb0dc04bf))

## [1.8.0](https://github.com/lbenie/reading-time-estimator/compare/v1.7.2...v1.8.0) (2023-03-17)


### :sparkles: Features

* add brazilian portuguese translation ([#926](https://github.com/lbenie/reading-time-estimator/issues/926)) ([4a525c1](https://github.com/lbenie/reading-time-estimator/commit/4a525c13475480d8dd21610fd6dbb13176153f7b))


### :memo: Documenation

* add matheusinit as a contributor for code ([#927](https://github.com/lbenie/reading-time-estimator/issues/927)) ([27fced0](https://github.com/lbenie/reading-time-estimator/commit/27fced03001a12aebb9ada8ca373ab0cbd75db83))


### :white_check_mark: Chores

* **deps:** update dependency @rollup/plugin-typescript to v10.0.1 ([06685f2](https://github.com/lbenie/reading-time-estimator/commit/06685f20735fbc2835515a9518070f60d628453d))
* **deps:** update dependency @rollup/plugin-typescript to v10 ([0c828cc](https://github.com/lbenie/reading-time-estimator/commit/0c828cc07762d8be707fc5ca5c9cb880b812622f))
* **deps:** update dependency @rollup/plugin-typescript to v11 ([749de32](https://github.com/lbenie/reading-time-estimator/commit/749de32434b7b1dc036f6e513b3ad736e78620e0))
* **deps:** update dependency @rollup/plugin-typescript to v9.0.2 ([e42dcfa](https://github.com/lbenie/reading-time-estimator/commit/e42dcfa080fca26ed78b38203d9e8964f5570b21))
* **deps:** update dependency @rollup/plugin-typescript to v9 ([aee06e9](https://github.com/lbenie/reading-time-estimator/commit/aee06e9776af91142037f4524088b9f158629b5e))
* **deps:** update dependency @semantic-release/changelog to v6.0.2 ([ce846e0](https://github.com/lbenie/reading-time-estimator/commit/ce846e035815cd707ea7f93ab2387addfa6731f5))
* **deps:** update dependency @semantic-release/github to v8.0.7 ([7b07dd6](https://github.com/lbenie/reading-time-estimator/commit/7b07dd6fba31169f041563c27adc5a6c2f857671))
* **deps:** update dependency @types/node to v18.11.0 ([f8fce89](https://github.com/lbenie/reading-time-estimator/commit/f8fce8910d1532e4bdb1511838d328b9797d33be))
* **deps:** update dependency @types/node to v18.11.10 ([216d025](https://github.com/lbenie/reading-time-estimator/commit/216d025ed02f886e31aa5ef9ff78cfd6cf5e50d6))
* **deps:** update dependency @types/node to v18.11.11 ([1bc70e0](https://github.com/lbenie/reading-time-estimator/commit/1bc70e020809f1bfce537b472b72d2fc04151444))
* **deps:** update dependency @types/node to v18.11.12 ([b615e69](https://github.com/lbenie/reading-time-estimator/commit/b615e6977a66a63a2133ff4e0a701d2f330de84b))
* **deps:** update dependency @types/node to v18.11.13 ([b69042e](https://github.com/lbenie/reading-time-estimator/commit/b69042e74f1505564590931f6700d6a3bf3b3d71))
* **deps:** update dependency @types/node to v18.11.14 ([83eaf21](https://github.com/lbenie/reading-time-estimator/commit/83eaf21910455ce5e642c6473a863bd1743e6f05))
* **deps:** update dependency @types/node to v18.11.15 ([148b422](https://github.com/lbenie/reading-time-estimator/commit/148b4226bc7423feed6fdf879d37c2da4b69ed5c))
* **deps:** update dependency @types/node to v18.11.16 ([80e7faa](https://github.com/lbenie/reading-time-estimator/commit/80e7faa9fc2c9c0c78f72011e63f0d54e38b02db))
* **deps:** update dependency @types/node to v18.11.17 ([0044bb3](https://github.com/lbenie/reading-time-estimator/commit/0044bb35146018a81c39e93e55038a443ff62bc8))
* **deps:** update dependency @types/node to v18.11.18 ([2d01bd5](https://github.com/lbenie/reading-time-estimator/commit/2d01bd5f4be6007984fa2bb649adf670df063269))
* **deps:** update dependency @types/node to v18.11.19 ([7dd4718](https://github.com/lbenie/reading-time-estimator/commit/7dd47181a50172e89eb19c6abf44741cb6806683))
* **deps:** update dependency @types/node to v18.11.2 ([b0a1e04](https://github.com/lbenie/reading-time-estimator/commit/b0a1e04887589175e220fa672254817796b29863))
* **deps:** update dependency @types/node to v18.11.3 ([ced0796](https://github.com/lbenie/reading-time-estimator/commit/ced0796517f6756024c2527a6c5116bb725f97d9))
* **deps:** update dependency @types/node to v18.11.4 ([d65ab1a](https://github.com/lbenie/reading-time-estimator/commit/d65ab1ac8c6fac1c2c7dd37845d5f4bc7816dfee))
* **deps:** update dependency @types/node to v18.11.5 ([96bf19b](https://github.com/lbenie/reading-time-estimator/commit/96bf19b2c49179941c1a325a0701a893d3186257))
* **deps:** update dependency @types/node to v18.11.6 ([49cd404](https://github.com/lbenie/reading-time-estimator/commit/49cd404064c8d432bca06f9d728ba9231f89b510))
* **deps:** update dependency @types/node to v18.11.7 ([1b747d6](https://github.com/lbenie/reading-time-estimator/commit/1b747d666c21f6caefc21458757579cd3b566096))
* **deps:** update dependency @types/node to v18.11.8 ([f6ee0ce](https://github.com/lbenie/reading-time-estimator/commit/f6ee0ce19830a4d14bba2e97649c9c906888df8b))
* **deps:** update dependency @types/node to v18.11.9 ([eeed642](https://github.com/lbenie/reading-time-estimator/commit/eeed64294cd1af3c9577c84367dc70c887f20bd2))
* **deps:** update dependency @types/node to v18.13.0 ([72520e5](https://github.com/lbenie/reading-time-estimator/commit/72520e5383da724cb5b9816210596f7eff64814d))
* **deps:** update dependency @types/node to v18.14.0 ([17199b4](https://github.com/lbenie/reading-time-estimator/commit/17199b4a148534263307c0f71409737bb16017b1))
* **deps:** update dependency @types/node to v18.14.1 ([1201430](https://github.com/lbenie/reading-time-estimator/commit/1201430da1d45161925d29c7d90b04430d8441d7))
* **deps:** update dependency @types/node to v18.14.2 ([fa70ed0](https://github.com/lbenie/reading-time-estimator/commit/fa70ed05c011fda1932dc9a2b18f5879c51ba368))
* **deps:** update dependency @types/node to v18.14.4 ([71ed426](https://github.com/lbenie/reading-time-estimator/commit/71ed426534b5cc771ddfc8c12f9219b43da282ff))
* **deps:** update dependency @types/node to v18.14.5 ([6279fbb](https://github.com/lbenie/reading-time-estimator/commit/6279fbb845fd5412b0dbc039443c16dd41894966))
* **deps:** update dependency @types/node to v18.14.6 ([9de22dd](https://github.com/lbenie/reading-time-estimator/commit/9de22dd06dd9f5553dfd616e46ecc35f7e2ac7d3))
* **deps:** update dependency @types/node to v18.15.0 ([536ce6a](https://github.com/lbenie/reading-time-estimator/commit/536ce6ab12f19cc93a298042fcd32ab4bf65d580))
* **deps:** update dependency @types/node to v18.15.1 ([ace0b8b](https://github.com/lbenie/reading-time-estimator/commit/ace0b8b22232d940fef31b9d62c881ee39011afd))
* **deps:** update dependency @types/node to v18.15.2 ([5f0e6fe](https://github.com/lbenie/reading-time-estimator/commit/5f0e6feb48a62ceb2faf2bacd3891af9b01f6aed))
* **deps:** update dependency @types/node to v18.15.3 ([0207686](https://github.com/lbenie/reading-time-estimator/commit/0207686a59781412623142932e6691d4d6ac44f3))
* **deps:** update dependency @types/node to v18.7.17 ([e18455d](https://github.com/lbenie/reading-time-estimator/commit/e18455d6699976597813d4c5594be57cf86ea182))
* **deps:** update dependency @types/node to v18.7.18 ([bbd4d2a](https://github.com/lbenie/reading-time-estimator/commit/bbd4d2a1963b781be6bf23f8f9937a82bf136b6b))
* **deps:** update dependency @types/node to v18.7.19 ([bd3a723](https://github.com/lbenie/reading-time-estimator/commit/bd3a723bd262b8a70567485a0439fb0afa012cce))
* **deps:** update dependency @types/node to v18.7.20 ([1ac8e4e](https://github.com/lbenie/reading-time-estimator/commit/1ac8e4e2b582b9fa054d5cfca502ff4a9fface08))
* **deps:** update dependency @types/node to v18.7.21 ([13e52e3](https://github.com/lbenie/reading-time-estimator/commit/13e52e3a0cf4e396b623af003fc56dd7f5293774))
* **deps:** update dependency @types/node to v18.7.22 ([bf64cbe](https://github.com/lbenie/reading-time-estimator/commit/bf64cbe6bac4f78cc50a99d90ce355375597ab82))
* **deps:** update dependency @types/node to v18.7.23 ([4d7256e](https://github.com/lbenie/reading-time-estimator/commit/4d7256e7567aaa83a2e3c16b6dccbee19a063275))
* **deps:** update dependency @types/node to v18.8.0 ([d246387](https://github.com/lbenie/reading-time-estimator/commit/d2463875b682a55322332f6a07e9e6d145a59489))
* **deps:** update dependency @types/node to v18.8.1 ([817da15](https://github.com/lbenie/reading-time-estimator/commit/817da15b138f65ca0911a08793d6a773923dc352))
* **deps:** update dependency @types/node to v18.8.2 ([6ef05dc](https://github.com/lbenie/reading-time-estimator/commit/6ef05dc7a3ce08bae9241c594012e4f86404a171))
* **deps:** update dependency @types/node to v18.8.3 ([1c5a64f](https://github.com/lbenie/reading-time-estimator/commit/1c5a64f29576fc853a94603032ae7edc5de008b7))
* **deps:** update dependency @types/node to v18.8.4 ([110394b](https://github.com/lbenie/reading-time-estimator/commit/110394bb4026c57dde5c0d6ffe3b9324415aa1a7))
* **deps:** update dependency @types/node to v18.8.5 ([7ae7ece](https://github.com/lbenie/reading-time-estimator/commit/7ae7ece4ad8e38bed49e2d12b2ebc2a770a8d42a))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.37.0 ([4fb3ff4](https://github.com/lbenie/reading-time-estimator/commit/4fb3ff44270daae0abd5898c3972015d57f15e88))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.38.0 ([9d126a2](https://github.com/lbenie/reading-time-estimator/commit/9d126a277506c331d1902ddf6fda4c350bdaa99f))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.38.1 ([edd97a1](https://github.com/lbenie/reading-time-estimator/commit/edd97a1643e1d9984abec725013f88bfabcf0063))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.39.0 ([9dde3e1](https://github.com/lbenie/reading-time-estimator/commit/9dde3e1449f1f768c747ae9d2db1b31230b385f9))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.40.0 ([7d97818](https://github.com/lbenie/reading-time-estimator/commit/7d97818600a67b3902b2e099e1c5975d908d2ef1))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.40.1 ([cfa6d2b](https://github.com/lbenie/reading-time-estimator/commit/cfa6d2bda5aa7ed809b5a5893f1cf78782f33146))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.41.0 ([a4c589d](https://github.com/lbenie/reading-time-estimator/commit/a4c589de3da8215a1fd3827538b6861342b7e378))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.42.0 ([fac2147](https://github.com/lbenie/reading-time-estimator/commit/fac2147c38fea6bc0d7f4f76041cb1541b3d44eb))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.42.1 ([5f79ceb](https://github.com/lbenie/reading-time-estimator/commit/5f79cebb11814b2a38a1a35ada731c013afb2ac2))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.43.0 ([cd3390e](https://github.com/lbenie/reading-time-estimator/commit/cd3390e9c400bffccb935344cf9d74b33964198a))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.44.0 ([bd0f6e0](https://github.com/lbenie/reading-time-estimator/commit/bd0f6e0cc6d02b2dc42d52810eadc0f9fdd5c348))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.45.0 ([3eb87d8](https://github.com/lbenie/reading-time-estimator/commit/3eb87d80d08a8037c06c15e61f2fe682b5fcc20f))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.45.1 ([59c8be4](https://github.com/lbenie/reading-time-estimator/commit/59c8be4594f95e6268406735c85a9a32ef84c37c))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.46.0 ([07205de](https://github.com/lbenie/reading-time-estimator/commit/07205de4f794141c5b5042ff20e1f9f2755a7dbf))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.46.1 ([4b09a27](https://github.com/lbenie/reading-time-estimator/commit/4b09a27281547fb0dbe58474f5de4f448b10f3cb))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.47.0 ([f4197de](https://github.com/lbenie/reading-time-estimator/commit/f4197de717f1a2e2fb9df9e96a893c0bc24eb4ae))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.47.1 ([b00aefd](https://github.com/lbenie/reading-time-estimator/commit/b00aefda59a6777e2f1501178c2161e18aaaffe8))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.48.0 ([a8885a9](https://github.com/lbenie/reading-time-estimator/commit/a8885a9cf709899d838537134d887a2c4cfda06a))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.48.1 ([405d037](https://github.com/lbenie/reading-time-estimator/commit/405d037be65d5f0042a577760653889fd8674d8a))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.48.2 ([1e3fe2f](https://github.com/lbenie/reading-time-estimator/commit/1e3fe2f9650dac4240976ce0cda3747845d5d072))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.49.0 ([56764c2](https://github.com/lbenie/reading-time-estimator/commit/56764c21a5d6a62ab952519bdf99c1e86f6d8fc8))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.50.0 ([fc9f544](https://github.com/lbenie/reading-time-estimator/commit/fc9f5447d53f13f36dbc91ecd288c1af7ae098cc))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.51.0 ([43bbfbb](https://github.com/lbenie/reading-time-estimator/commit/43bbfbb2a4ec5b09c81c4d71c05f596d2ca0f42f))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.52.0 ([406f3ae](https://github.com/lbenie/reading-time-estimator/commit/406f3aea635afa039230c8546ba20a89bc64ceac))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.53.0 ([7f5afe9](https://github.com/lbenie/reading-time-estimator/commit/7f5afe9bd5ad4476d0dfd5dba12b73bba71d48bf))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.54.0 ([1e129d6](https://github.com/lbenie/reading-time-estimator/commit/1e129d67966c9ee0d02cf216ec7aa2c9e0e4782b))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.54.1 ([f253268](https://github.com/lbenie/reading-time-estimator/commit/f2532683a1bb5958f92a490aa75522dd2f659680))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.55.0 ([f8a276d](https://github.com/lbenie/reading-time-estimator/commit/f8a276d1b3d4b72db49e5645affa4a0a1f81f268))
* **deps:** update dependency @typescript-eslint/parser to v5.37.0 ([91c3c1c](https://github.com/lbenie/reading-time-estimator/commit/91c3c1ca0ad5ee400091e296a04cdbd1e6adfa69))
* **deps:** update dependency @typescript-eslint/parser to v5.38.0 ([5d9e5a1](https://github.com/lbenie/reading-time-estimator/commit/5d9e5a1c256c8be2d699154ccdab6f8bab0447fe))
* **deps:** update dependency @typescript-eslint/parser to v5.38.1 ([eea051e](https://github.com/lbenie/reading-time-estimator/commit/eea051ec414d71ee784266458cc2270527e0458e))
* **deps:** update dependency @typescript-eslint/parser to v5.39.0 ([f0ccc73](https://github.com/lbenie/reading-time-estimator/commit/f0ccc7355ad43a6f755388bfb0c437d08a7a3f14))
* **deps:** update dependency @typescript-eslint/parser to v5.40.0 ([498b034](https://github.com/lbenie/reading-time-estimator/commit/498b0347846d28302d5a80052b0152093a2f3ae5))
* **deps:** update dependency @typescript-eslint/parser to v5.40.1 ([e43fbc0](https://github.com/lbenie/reading-time-estimator/commit/e43fbc0c26a688aef20ea9f2d9df74afc51dbfb4))
* **deps:** update dependency @typescript-eslint/parser to v5.41.0 ([5bf3563](https://github.com/lbenie/reading-time-estimator/commit/5bf35632ce6a8eb3743fed17b8800e296e6dd051))
* **deps:** update dependency @typescript-eslint/parser to v5.42.0 ([45f2aaf](https://github.com/lbenie/reading-time-estimator/commit/45f2aaf769e3cde1cf5c90e79d0809f1646b4799))
* **deps:** update dependency @typescript-eslint/parser to v5.42.1 ([48a91bb](https://github.com/lbenie/reading-time-estimator/commit/48a91bbf48320bc43c33dc02c69fabd80297f7c3))
* **deps:** update dependency @typescript-eslint/parser to v5.43.0 ([5cc3948](https://github.com/lbenie/reading-time-estimator/commit/5cc394812b61d6f12f6bbce79fd5be14448c27ef))
* **deps:** update dependency @typescript-eslint/parser to v5.44.0 ([#806](https://github.com/lbenie/reading-time-estimator/issues/806)) ([06d5ffa](https://github.com/lbenie/reading-time-estimator/commit/06d5ffac45081ced65143f57f8fc6ea35ce3e57d))
* **deps:** update dependency @typescript-eslint/parser to v5.45.0 ([8d021a9](https://github.com/lbenie/reading-time-estimator/commit/8d021a9c4383a03d3b02c5d915c7d1e943d607ce))
* **deps:** update dependency @typescript-eslint/parser to v5.45.1 ([daeb017](https://github.com/lbenie/reading-time-estimator/commit/daeb017d8d0cb70f19a9317f89af5c4dd73d038c))
* **deps:** update dependency @typescript-eslint/parser to v5.46.0 ([cd0bf84](https://github.com/lbenie/reading-time-estimator/commit/cd0bf849cd64176a7ae717ab60d7a452de40c104))
* **deps:** update dependency @typescript-eslint/parser to v5.46.1 ([4dea188](https://github.com/lbenie/reading-time-estimator/commit/4dea1883bca8e47dbd5397618f55a2e3ef7acf49))
* **deps:** update dependency @typescript-eslint/parser to v5.47.0 ([e9ea05c](https://github.com/lbenie/reading-time-estimator/commit/e9ea05c03c4768931f114d2928104d5689809317))
* **deps:** update dependency @typescript-eslint/parser to v5.47.1 ([52d1755](https://github.com/lbenie/reading-time-estimator/commit/52d1755f19fb254912fffeec19cd27d76e0793db))
* **deps:** update dependency @typescript-eslint/parser to v5.48.0 ([5a71954](https://github.com/lbenie/reading-time-estimator/commit/5a719545b5d0a91f963ee811d512849c6ffbc5e0))
* **deps:** update dependency @typescript-eslint/parser to v5.48.1 ([37bd439](https://github.com/lbenie/reading-time-estimator/commit/37bd4396ee564a4c9b2274919f76dd641952aa7b))
* **deps:** update dependency @typescript-eslint/parser to v5.48.2 ([a678365](https://github.com/lbenie/reading-time-estimator/commit/a678365010d532d3efeae311e9b37c0d1360c4f4))
* **deps:** update dependency @typescript-eslint/parser to v5.49.0 ([2fe7f64](https://github.com/lbenie/reading-time-estimator/commit/2fe7f64e371726a8e7d6bfb4ea53d2074bec2afa))
* **deps:** update dependency @typescript-eslint/parser to v5.50.0 ([5d93b54](https://github.com/lbenie/reading-time-estimator/commit/5d93b540b0604f80521b95184b991ceab7f5548e))
* **deps:** update dependency @typescript-eslint/parser to v5.51.0 ([6e19b51](https://github.com/lbenie/reading-time-estimator/commit/6e19b51ea7fa78bb7ef94dfee8c4dfab1254cbc8))
* **deps:** update dependency @typescript-eslint/parser to v5.52.0 ([1e1e816](https://github.com/lbenie/reading-time-estimator/commit/1e1e816c383e392670bbb0119b484d15f560423d))
* **deps:** update dependency @typescript-eslint/parser to v5.53.0 ([c19492e](https://github.com/lbenie/reading-time-estimator/commit/c19492e520d7737bad1057b727e97e8450ad9cdc))
* **deps:** update dependency @typescript-eslint/parser to v5.54.0 ([7b45e89](https://github.com/lbenie/reading-time-estimator/commit/7b45e89acf7bcd6589fe75d580ccec23a81247ff))
* **deps:** update dependency @typescript-eslint/parser to v5.54.1 ([336167b](https://github.com/lbenie/reading-time-estimator/commit/336167b5b3e8f509a9903196b01987ea9ad18c48))
* **deps:** update dependency @typescript-eslint/parser to v5.55.0 ([0e812ae](https://github.com/lbenie/reading-time-estimator/commit/0e812ae78901259445f2a37e5cb17ffe901e2f6e))
* **deps:** update dependency @vitest/coverage-c8 to v0.23.2 ([d9b2dce](https://github.com/lbenie/reading-time-estimator/commit/d9b2dce6cf228aa8eec9c58d6a0e973f4c86aa82))
* **deps:** update dependency @vitest/coverage-c8 to v0.23.4 ([4aedc2b](https://github.com/lbenie/reading-time-estimator/commit/4aedc2bc02e144cfaee5428cfdfdcd4378ddd2a8))
* **deps:** update dependency @vitest/coverage-c8 to v0.24.0 ([c489295](https://github.com/lbenie/reading-time-estimator/commit/c48929585438e01f32d777949e68140f7e4540c2))
* **deps:** update dependency @vitest/coverage-c8 to v0.24.1 ([6199b97](https://github.com/lbenie/reading-time-estimator/commit/6199b97b0c792e6c111016fbb11ab1841d8caec0))
* **deps:** update dependency @vitest/coverage-c8 to v0.24.3 ([197c522](https://github.com/lbenie/reading-time-estimator/commit/197c522b6b992ba70aab68502a6cf2c1378f8fb9))
* **deps:** update dependency @vitest/coverage-c8 to v0.24.4 ([4566eff](https://github.com/lbenie/reading-time-estimator/commit/4566effacb3dbc53ca9c5da478a552e9bb53caea))
* **deps:** update dependency @vitest/coverage-c8 to v0.24.5 ([27837cd](https://github.com/lbenie/reading-time-estimator/commit/27837cd4a044053aa52ea1ebfb4bef377f8b8f74))
* **deps:** update dependency @vitest/coverage-c8 to v0.25.0 ([139f87c](https://github.com/lbenie/reading-time-estimator/commit/139f87ca6ef44c1018a72a40f94db7c740b5a024))
* **deps:** update dependency @vitest/coverage-c8 to v0.25.1 ([b96a9dd](https://github.com/lbenie/reading-time-estimator/commit/b96a9dd55c627cfc12c46513fe64fe6ed9e873d7))
* **deps:** update dependency @vitest/coverage-c8 to v0.25.2 ([6815c5f](https://github.com/lbenie/reading-time-estimator/commit/6815c5f2e33239ba663ca827cfc4c8e8da15ba1d))
* **deps:** update dependency @vitest/coverage-c8 to v0.25.3 ([e540671](https://github.com/lbenie/reading-time-estimator/commit/e54067194ec310b8b475b0a66af33af8ad7b66b8))
* **deps:** update dependency @vitest/coverage-c8 to v0.25.4 ([dfccb6c](https://github.com/lbenie/reading-time-estimator/commit/dfccb6c3c375a3ec4cc242e36edd1c25ec6b815b))
* **deps:** update dependency @vitest/coverage-c8 to v0.25.5 ([b056fef](https://github.com/lbenie/reading-time-estimator/commit/b056fefbf7b377be2f5100bde58011a1c58693d4))
* **deps:** update dependency @vitest/coverage-c8 to v0.25.6 ([58d197a](https://github.com/lbenie/reading-time-estimator/commit/58d197ad39d9e75cd5016de691923c3457257c9f))
* **deps:** update dependency @vitest/coverage-c8 to v0.25.7 ([46031ac](https://github.com/lbenie/reading-time-estimator/commit/46031ac2c1903c00e1e1f53b8c189239a8dfac0c))
* **deps:** update dependency @vitest/coverage-c8 to v0.25.8 ([558d001](https://github.com/lbenie/reading-time-estimator/commit/558d00115523cfa36264cb4b4d3c02dfe27f6cce))
* **deps:** update dependency @vitest/coverage-c8 to v0.26.0 ([6f69cb2](https://github.com/lbenie/reading-time-estimator/commit/6f69cb2bb115078803ea55a902e89bbeca6ea1f8))
* **deps:** update dependency @vitest/coverage-c8 to v0.26.2 ([29abcd7](https://github.com/lbenie/reading-time-estimator/commit/29abcd765cd9da537271f46ba28994a7ef6f4871))
* **deps:** update dependency @vitest/coverage-c8 to v0.26.3 ([0555904](https://github.com/lbenie/reading-time-estimator/commit/05559047d94206ffb11d2c3fb055296df2f11b8f))
* **deps:** update dependency @vitest/coverage-c8 to v0.27.0 ([cbce772](https://github.com/lbenie/reading-time-estimator/commit/cbce772ef1902bf75a7c74807810f582972661de))
* **deps:** update dependency @vitest/coverage-c8 to v0.27.1 ([b1a3315](https://github.com/lbenie/reading-time-estimator/commit/b1a33154aed39788f2b64ea9e6a35cdc8003638a))
* **deps:** update dependency @vitest/coverage-c8 to v0.27.3 ([92cdd4c](https://github.com/lbenie/reading-time-estimator/commit/92cdd4ce31693ff9285ccfae079216ee65c15fe3))
* **deps:** update dependency @vitest/coverage-c8 to v0.28.1 ([6358996](https://github.com/lbenie/reading-time-estimator/commit/6358996d1f48f2473bef450db7143d455768264f))
* **deps:** update dependency @vitest/coverage-c8 to v0.28.2 ([74ba485](https://github.com/lbenie/reading-time-estimator/commit/74ba485160a4f8c653aa2c6af32eab82083c92c2))
* **deps:** update dependency @vitest/coverage-c8 to v0.28.3 ([f917464](https://github.com/lbenie/reading-time-estimator/commit/f9174641ddd21f715000a1068c3af4e6e14977e2))
* **deps:** update dependency @vitest/coverage-c8 to v0.28.4 ([ebeaec8](https://github.com/lbenie/reading-time-estimator/commit/ebeaec89daaeb09f10ea914703ff7ec4172d5753))
* **deps:** update dependency @vitest/coverage-c8 to v0.28.5 ([debf5a2](https://github.com/lbenie/reading-time-estimator/commit/debf5a24511788c310d40f70a96f97fc91c3dfc1))
* **deps:** update dependency @vitest/coverage-c8 to v0.29.3 ([8582916](https://github.com/lbenie/reading-time-estimator/commit/858291636210a13580928ed9aa0e5c6caf12db2f))
* **deps:** update dependency all-contributors-cli to v6.20.5 ([db6a453](https://github.com/lbenie/reading-time-estimator/commit/db6a453b8585fa990bf5e4f658785e21ce500c3a))
* **deps:** update dependency all-contributors-cli to v6.21.0 ([341acd3](https://github.com/lbenie/reading-time-estimator/commit/341acd314b448c5ad1873b951e1beadd03d3d6cd))
* **deps:** update dependency all-contributors-cli to v6.22.0 ([a2c7839](https://github.com/lbenie/reading-time-estimator/commit/a2c78398232618d4d00a880e76250d0e796a3291))
* **deps:** update dependency all-contributors-cli to v6.23.0 ([e278e5d](https://github.com/lbenie/reading-time-estimator/commit/e278e5d6502d230fcb46fbdf1bfe91d6979ee618))
* **deps:** update dependency all-contributors-cli to v6.23.1 ([c37cc7d](https://github.com/lbenie/reading-time-estimator/commit/c37cc7d239d3100cb489c99e607ea7476888532d))
* **deps:** update dependency all-contributors-cli to v6.24.0 ([e6c07a5](https://github.com/lbenie/reading-time-estimator/commit/e6c07a50197ec4e1de39fb4732f2a0717f32b3bc))
* **deps:** update dependency c8 to v7.13.0 ([3d4d902](https://github.com/lbenie/reading-time-estimator/commit/3d4d90281b8a1fb397c91114db9ec96dd7ab9092))
* **deps:** update dependency concurrently to v7.5.0 ([6c688c9](https://github.com/lbenie/reading-time-estimator/commit/6c688c96e0115cf5206ddedf43febfb08ca25a8f))
* **deps:** update dependency concurrently to v7.6.0 ([4bcc554](https://github.com/lbenie/reading-time-estimator/commit/4bcc554e8ec3ddd94070664ad9409d388d6429fd))
* **deps:** update dependency eslint to v8.23.1 ([793c098](https://github.com/lbenie/reading-time-estimator/commit/793c0987962774491265c0f0e2829cab03457e55))
* **deps:** update dependency eslint to v8.24.0 ([d28fda8](https://github.com/lbenie/reading-time-estimator/commit/d28fda83998b542e10074e96cbe0beeba9e7daba))
* **deps:** update dependency eslint to v8.25.0 ([6966d91](https://github.com/lbenie/reading-time-estimator/commit/6966d9148a3dd31f67c079fdf107adbd568a1359))
* **deps:** update dependency eslint to v8.26.0 ([dc68ea5](https://github.com/lbenie/reading-time-estimator/commit/dc68ea589a6e01bca96b8a2e0bc9b778f48f8126))
* **deps:** update dependency eslint to v8.27.0 ([d075801](https://github.com/lbenie/reading-time-estimator/commit/d075801cbeb8eed1507baec05078205093a5c300))
* **deps:** update dependency eslint to v8.28.0 ([f15fb81](https://github.com/lbenie/reading-time-estimator/commit/f15fb81db42bb9d4af27f4be19994e4482559d51))
* **deps:** update dependency eslint to v8.29.0 ([a5eea98](https://github.com/lbenie/reading-time-estimator/commit/a5eea985aa349f75703cc7c2eb350a5f47debcd8))
* **deps:** update dependency eslint to v8.30.0 ([dbcc961](https://github.com/lbenie/reading-time-estimator/commit/dbcc9618de69b052dbaa6c803259c6810aff5eb1))
* **deps:** update dependency eslint to v8.31.0 ([677ce01](https://github.com/lbenie/reading-time-estimator/commit/677ce01e863ad56a4038e81a8045f461259521f6))
* **deps:** update dependency eslint to v8.32.0 ([dfa61e4](https://github.com/lbenie/reading-time-estimator/commit/dfa61e4803a7fa5be0f5354639e4cdcf91bcb789))
* **deps:** update dependency eslint to v8.33.0 ([ee8b673](https://github.com/lbenie/reading-time-estimator/commit/ee8b67350cb617cf5a042632f45e7fab1d3dbaec))
* **deps:** update dependency eslint to v8.34.0 ([454f3d4](https://github.com/lbenie/reading-time-estimator/commit/454f3d4987c061f27f5e5b3bdebdf3ef5ac43057))
* **deps:** update dependency eslint to v8.35.0 ([6706fc3](https://github.com/lbenie/reading-time-estimator/commit/6706fc3d991d08097014c9d55bc2efc17bcb6d04))
* **deps:** update dependency eslint to v8.36.0 ([12f0ace](https://github.com/lbenie/reading-time-estimator/commit/12f0acebc424949eefccf690745119cd2e91c8fd))
* **deps:** update dependency eslint-config-prettier to v8.6.0 ([111d4fa](https://github.com/lbenie/reading-time-estimator/commit/111d4fabeb69056c1b1a817e69b7f402e5a68463))
* **deps:** update dependency eslint-config-prettier to v8.7.0 ([8f45bb0](https://github.com/lbenie/reading-time-estimator/commit/8f45bb048e675a1f4cc523b88b99068c1e10afaa))
* **deps:** update dependency prettier to v2.8.0 ([f4829f1](https://github.com/lbenie/reading-time-estimator/commit/f4829f1667c78b36bc3738a6f8e77613c9aec055))
* **deps:** update dependency prettier to v2.8.1 ([6e59ec3](https://github.com/lbenie/reading-time-estimator/commit/6e59ec3fae407f1afeefc6af6acf07164b0ec2a3))
* **deps:** update dependency prettier to v2.8.4 ([#928](https://github.com/lbenie/reading-time-estimator/issues/928)) ([3bf5bb3](https://github.com/lbenie/reading-time-estimator/commit/3bf5bb3871b5e629522e695cdf22a98bb5b6613b))
* **deps:** update dependency rollup-plugin-typescript2 to v0.34.0 ([1c93380](https://github.com/lbenie/reading-time-estimator/commit/1c933805220876b6ca0933375ce01a05b04c1962))
* **deps:** update dependency rollup-plugin-typescript2 to v0.34.1 ([78e193b](https://github.com/lbenie/reading-time-estimator/commit/78e193b825de4c06edcf849106499191a915d20e))
* **deps:** update dependency semantic-release to v20.1.1 ([2159ec0](https://github.com/lbenie/reading-time-estimator/commit/2159ec0f31a241e25bb8f036460422d8c61daa3d))
* **deps:** update dependency semantic-release to v20 ([7f9a403](https://github.com/lbenie/reading-time-estimator/commit/7f9a403c2646c77545893b1ad6bd30d7debd129b))
* **deps:** update dependency typescript to v4.8.4 ([00610b7](https://github.com/lbenie/reading-time-estimator/commit/00610b71fb1b46628118afff40501524d563ecd5))
* **deps:** update dependency typescript to v4.9.3 ([5395c2d](https://github.com/lbenie/reading-time-estimator/commit/5395c2db5cac78bf8f2ae43dd83e2a0df0aa57f1))
* **deps:** update dependency typescript to v4.9.4 ([2295db1](https://github.com/lbenie/reading-time-estimator/commit/2295db1ec9109287fdb5dbe8c70e859e8ae179c5))
* **deps:** update dependency typescript to v4.9.5 ([4661eee](https://github.com/lbenie/reading-time-estimator/commit/4661eee8d35a4604c409b7ecb22ef129418a7445))
* **deps:** update dependency typescript to v5 ([da8f1ed](https://github.com/lbenie/reading-time-estimator/commit/da8f1eda3e325ed12627d219ff9b9ee9c091fd10))
* **deps:** update dependency unplugin-auto-import to ^0.12.0 ([e7f29af](https://github.com/lbenie/reading-time-estimator/commit/e7f29af230b40ab522ccb880cfa98810171306e8))
* **deps:** update dependency unplugin-auto-import to ^0.13.0 ([0d15ae2](https://github.com/lbenie/reading-time-estimator/commit/0d15ae29dd111598c7b3a868948259c17b50dc87))
* **deps:** update dependency unplugin-auto-import to ^0.14.0 ([8f926c5](https://github.com/lbenie/reading-time-estimator/commit/8f926c536e37ed7beaa37949e8b732bfa1a12a9e))
* **deps:** update dependency unplugin-auto-import to ^0.15.0 ([72d9ab4](https://github.com/lbenie/reading-time-estimator/commit/72d9ab4bfb2cf659e42bced1acf647e8abaf3c30))
* **deps:** update dependency unplugin-auto-import to v0.15.1 ([907a2f5](https://github.com/lbenie/reading-time-estimator/commit/907a2f5e8fa8bb501bc4cce4e4409024f7c48c87))
* **deps:** update dependency vite to v3.1.1 ([3441328](https://github.com/lbenie/reading-time-estimator/commit/3441328adb61992660cb4eaf9993eabac1c9da24))
* **deps:** update dependency vite to v3.1.2 ([ce99930](https://github.com/lbenie/reading-time-estimator/commit/ce9993001e26810f35b098430ce848c2444f89af))
* **deps:** update dependency vite to v3.1.3 ([bd1519d](https://github.com/lbenie/reading-time-estimator/commit/bd1519daa844133682dc578f2536a101a15db349))
* **deps:** update dependency vite to v3.1.4 ([877f448](https://github.com/lbenie/reading-time-estimator/commit/877f448adf820d4471a5a1115a6168973e176aaa))
* **deps:** update dependency vite to v3.1.5 ([5f8c0ad](https://github.com/lbenie/reading-time-estimator/commit/5f8c0adf34506d6ff9fe1bc87ce6fc4919b93179))
* **deps:** update dependency vite to v3.1.6 ([93d5f96](https://github.com/lbenie/reading-time-estimator/commit/93d5f9610c73df37f3d674aa372360506bbfc9d2))
* **deps:** update dependency vite to v3.1.7 ([94aba44](https://github.com/lbenie/reading-time-estimator/commit/94aba4458f1a01cbf60174b620c098a57d9589b0))
* **deps:** update dependency vite to v3.1.8 ([8db1478](https://github.com/lbenie/reading-time-estimator/commit/8db14786ddc333708b6b6ca525b945c0d73d5d39))
* **deps:** update dependency vite to v3.2.0 ([7b905c5](https://github.com/lbenie/reading-time-estimator/commit/7b905c5df50d563ca5a803a3f57385b84adcce0d))
* **deps:** update dependency vite to v3.2.1 ([492372e](https://github.com/lbenie/reading-time-estimator/commit/492372e49f608661321e636e85e16356f67f9e08))
* **deps:** update dependency vite to v3.2.2 ([c853c00](https://github.com/lbenie/reading-time-estimator/commit/c853c00b8cc33f6000bf0a2574044a12702ab639))
* **deps:** update dependency vite to v3.2.3 ([0e89890](https://github.com/lbenie/reading-time-estimator/commit/0e89890f7ca5ce62094394d7d78087d2627801d6))
* **deps:** update dependency vite to v3.2.4 ([7e5c1ea](https://github.com/lbenie/reading-time-estimator/commit/7e5c1ea1095c336b1278c8e404d4858399a09338))
* **deps:** update dependency vite to v3.2.5 ([cbd2207](https://github.com/lbenie/reading-time-estimator/commit/cbd220740affa5e82463b8a007d4f031c2862ca6))
* **deps:** update dependency vite to v4.0.1 ([29a2d76](https://github.com/lbenie/reading-time-estimator/commit/29a2d76fa7dbcbf6e1d76cc41678691449a833e3))
* **deps:** update dependency vite to v4.0.2 ([d8fa88f](https://github.com/lbenie/reading-time-estimator/commit/d8fa88f72115b3d077aca7bed7f3daf0a3e36098))
* **deps:** update dependency vite to v4.0.3 ([7249789](https://github.com/lbenie/reading-time-estimator/commit/72497895794ee0dca1d84093147b891472952b28))
* **deps:** update dependency vite to v4.0.4 ([712c0c9](https://github.com/lbenie/reading-time-estimator/commit/712c0c9463cb8f6ce16f65d4524dc243d7c48b07))
* **deps:** update dependency vite to v4.1.1 ([42c27ff](https://github.com/lbenie/reading-time-estimator/commit/42c27ff8d015350ff6adb3d6eb406b4ce07bd616))
* **deps:** update dependency vite to v4.1.2 ([42c56a7](https://github.com/lbenie/reading-time-estimator/commit/42c56a75397b34f54816b2d61c79b878ad330820))
* **deps:** update dependency vite to v4.1.3 ([29c36fc](https://github.com/lbenie/reading-time-estimator/commit/29c36fc3d4a07783d20eab1814df594b9bb9b9bc))
* **deps:** update dependency vite to v4.1.4 ([05c7b43](https://github.com/lbenie/reading-time-estimator/commit/05c7b4394426d8fbe6e8f58158b7d3b1e0f9a442))
* **deps:** update dependency vite to v4.2.0 ([b69c01b](https://github.com/lbenie/reading-time-estimator/commit/b69c01bd1a4e7820418ad989180e120ef93b3e35))
* **deps:** update dependency vite to v4 ([a34c7bc](https://github.com/lbenie/reading-time-estimator/commit/a34c7bc63264eed622bd52e06945d59cc3713cbe))
* **deps:** update dependency vitest to ^0.24.0 ([3c4ddd3](https://github.com/lbenie/reading-time-estimator/commit/3c4ddd3a2bb3a690cd5dfe44e8677d207aa1359d))
* **deps:** update dependency vitest to ^0.25.0 ([45e6536](https://github.com/lbenie/reading-time-estimator/commit/45e6536fb918e96de7cebd209e235ae526cfcfa2))
* **deps:** update dependency vitest to ^0.26.0 ([74c5a4b](https://github.com/lbenie/reading-time-estimator/commit/74c5a4b9ddc868925f6cfb1ee279f4ee8b0495cd))
* **deps:** update dependency vitest to ^0.27.0 ([5efcfbe](https://github.com/lbenie/reading-time-estimator/commit/5efcfbe4f5e11b5b345515a4d33d654a415bc5f5))
* **deps:** update dependency vitest to ^0.28.0 ([1a185cb](https://github.com/lbenie/reading-time-estimator/commit/1a185cb359d775ef379409a7da446e6fedf042d1))
* **deps:** update dependency vitest to ^0.29.0 ([d34d633](https://github.com/lbenie/reading-time-estimator/commit/d34d63311e8e596a94d63877ecf7abe95981fec6))
* update release workflow ([8ba0341](https://github.com/lbenie/reading-time-estimator/commit/8ba0341ee4f8071369ea34bdc8a550f199e71a7a))
* **deps:** update stefanzweifel/git-auto-commit-action action to v4.15.0 ([#729](https://github.com/lbenie/reading-time-estimator/issues/729)) ([63d106c](https://github.com/lbenie/reading-time-estimator/commit/63d106ce5f2658245f91562ee81a21544fb2ddd8))
* **deps:** update stefanzweifel/git-auto-commit-action action to v4.15.1 ([#757](https://github.com/lbenie/reading-time-estimator/issues/757)) ([d57c974](https://github.com/lbenie/reading-time-estimator/commit/d57c97423b0026ece5d4d19672219e80b9d395af))
* **deps:** update stefanzweifel/git-auto-commit-action action to v4.15.2 ([#773](https://github.com/lbenie/reading-time-estimator/issues/773)) ([f92f2f0](https://github.com/lbenie/reading-time-estimator/commit/f92f2f0f015c34f68fadc83cac17e45d07d412ca))
* **deps:** update stefanzweifel/git-auto-commit-action action to v4.15.3 ([#780](https://github.com/lbenie/reading-time-estimator/issues/780)) ([f35adac](https://github.com/lbenie/reading-time-estimator/commit/f35adac9dbaad5bcfff60869e3198c552b84b1ed))
* **deps:** update stefanzweifel/git-auto-commit-action action to v4.15.4 ([#790](https://github.com/lbenie/reading-time-estimator/issues/790)) ([904be37](https://github.com/lbenie/reading-time-estimator/commit/904be371ef08c47f71dadb5c0328117f110e7004))
* **deps:** update stefanzweifel/git-auto-commit-action action to v4.16.0 ([#817](https://github.com/lbenie/reading-time-estimator/issues/817)) ([b625849](https://github.com/lbenie/reading-time-estimator/commit/b625849ba6bc44ad2edb12d7409f6dba83c27a61))

## [1.7.2](https://github.com/lbenie/reading-time-estimator/compare/v1.7.1...v1.7.2) (2022-09-09)


### :white_check_mark: Chores

* **deps:** update dependency all-contributors-cli to v6.20.4 ([73d3bd8](https://github.com/lbenie/reading-time-estimator/commit/73d3bd87d17bf83299277053bbb67f48e8c8e33e))
* **deps:** update dependency typescript to v4.8.3 ([9255ae1](https://github.com/lbenie/reading-time-estimator/commit/9255ae1669f7ce48a34fe3bccb8bffb5d51edc6c))


### :bug: Fixes

* **build:** properly sets the correct paths for main, module and exports ([#712](https://github.com/lbenie/reading-time-estimator/issues/712)) ([9908d7c](https://github.com/lbenie/reading-time-estimator/commit/9908d7c4436838d5ca437b7e1c98af84f4fd808b)), closes [#704](https://github.com/lbenie/reading-time-estimator/issues/704)

## [1.7.1](https://github.com/lbenie/reading-time-estimator/compare/v1.7.0...v1.7.1) (2022-09-08)


### :white_check_mark: Chores

* (docs) add live project url [skip ci] ([01acba3](https://github.com/lbenie/reading-time-estimator/commit/01acba3ee9ae9e1a5f97cd8e7c9d365d79e48b45))
* **deps:** update dependency @types/node to v18.7.16 ([0c340b4](https://github.com/lbenie/reading-time-estimator/commit/0c340b49cbe9830a489a9d23dd47637c786ed14f))
* **deps:** update dependency all-contributors-cli to v6.20.3 ([1bf303b](https://github.com/lbenie/reading-time-estimator/commit/1bf303b5ae0b3792f84303701436ecced78e646b))
* **deps:** update dependency concurrently to v7.4.0 ([8b46d2a](https://github.com/lbenie/reading-time-estimator/commit/8b46d2a8d115a77b1021c7bdae19c1191326ca9b))


### :memo: Documenation

* adds typedoc ([#709](https://github.com/lbenie/reading-time-estimator/issues/709)) ([9ceb6f9](https://github.com/lbenie/reading-time-estimator/commit/9ceb6f9cae75df312ae61746dccb3a8c2a684ef8))

## [1.7.0](https://github.com/lbenie/reading-time-estimator/compare/v1.6.2...v1.7.0) (2022-09-07)


### :white_check_mark: Chores

* **deps:** add pwa for vuepress ([4cb0fe1](https://github.com/lbenie/reading-time-estimator/commit/4cb0fe10ac1452c72ccb42474392a0b736ed03f7))
* ignore docs folder ([d536fde](https://github.com/lbenie/reading-time-estimator/commit/d536fdea9f1183de40935c23f8f2fba0bec11865))
* remove docs ([8a20b02](https://github.com/lbenie/reading-time-estimator/commit/8a20b02332515542104701e3a26e189d55a4809f))
* remove unused stuff ([0beb789](https://github.com/lbenie/reading-time-estimator/commit/0beb789a586e82280700d43c3e495ab1e039a741))
* remove vuepress workflow ([68783c2](https://github.com/lbenie/reading-time-estimator/commit/68783c2f93659973a4ec29b90f40c2a0714b0f53))
* target es2021 ([b2fa56d](https://github.com/lbenie/reading-time-estimator/commit/b2fa56dfe93593704d73d8f7383a781710dc3c04))
* target esnext ([884e3fd](https://github.com/lbenie/reading-time-estimator/commit/884e3fded19238ef272d92d29f839951155526e6))
* **deps:** update dependency @rollup/plugin-typescript to v8.5.0 ([175999c](https://github.com/lbenie/reading-time-estimator/commit/175999c0ca6d9bd18a0b3e67d5daa1fbdec93637))
* **deps:** update dependency @semantic-release/github to v8.0.6 ([4a87f72](https://github.com/lbenie/reading-time-estimator/commit/4a87f72289bfdf04962e39434deabaa81aad6077))
* **deps:** update dependency @types/node to v18.7.14 ([b0922a6](https://github.com/lbenie/reading-time-estimator/commit/b0922a6ef97c1f47a02667b09d5ce81b9a1b48e9))
* **deps:** update dependency @types/node to v18.7.15 ([67668f1](https://github.com/lbenie/reading-time-estimator/commit/67668f1a653fe6f188294d952e1a85bddcbfc129))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.36.0 ([45b72fb](https://github.com/lbenie/reading-time-estimator/commit/45b72fb2e7912d6220f3e684a0d9b16a5e56ee00))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.36.1 ([eeba378](https://github.com/lbenie/reading-time-estimator/commit/eeba3782e0b6d3dee9e89f06facba7cfce2d2158))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.36.2 ([5f73e5e](https://github.com/lbenie/reading-time-estimator/commit/5f73e5eca34637ec508ff6f9e1eae88b41c91334))
* **deps:** update dependency @typescript-eslint/parser to v5.36.1 ([43ddc7b](https://github.com/lbenie/reading-time-estimator/commit/43ddc7bb07a27165fc8d8133163966aecbba117c))
* **deps:** update dependency @typescript-eslint/parser to v5.36.2 ([231a5af](https://github.com/lbenie/reading-time-estimator/commit/231a5af78f0481235185029583488f83c458693b))
* **deps:** update dependency @vitest/coverage-c8 to v0.23.0 ([0cedcbe](https://github.com/lbenie/reading-time-estimator/commit/0cedcbe05cd9a1f864e43141a0ea2dc34303ff22))
* **deps:** update dependency @vitest/coverage-c8 to v0.23.1 ([c65f315](https://github.com/lbenie/reading-time-estimator/commit/c65f3151b1e24922cb99cc6c29af4c249c5c3e6d))
* **deps:** update dependency eslint to v8.23.0 ([492eb8f](https://github.com/lbenie/reading-time-estimator/commit/492eb8f833273f6c9e6a0d36db02d7beb67c5acf))
* **deps:** update dependency vite to v3.1.0 ([c3352bd](https://github.com/lbenie/reading-time-estimator/commit/c3352bda7bb155d996461c1491210bdddd04678d))
* **deps:** update dependency vitest to ^0.23.0 ([9f1ea78](https://github.com/lbenie/reading-time-estimator/commit/9f1ea786f884242ef77961af47de8538b171eb5f))


### :sparkles: Features

* export user type ([#707](https://github.com/lbenie/reading-time-estimator/issues/707)) ([a7966f1](https://github.com/lbenie/reading-time-estimator/commit/a7966f182f3b3e88fbe358e7831fe2888f84095e))

## [1.6.2](https://github.com/lbenie/reading-time-estimator/compare/v1.6.1...v1.6.2) (2022-08-26)


### :memo: Documenation

* add pwa ([f38223a](https://github.com/lbenie/reading-time-estimator/commit/f38223a0d38884c925694bf9a3a9251617b83191))

## [1.6.1](https://github.com/lbenie/reading-time-estimator/compare/v1.6.0...v1.6.1) (2022-08-26)


### :memo: Documenation

* build vuepress site ([055e681](https://github.com/lbenie/reading-time-estimator/commit/055e6817d41b7e5d4dfa1fcfd0edfb315bdf330a))

## [1.6.0](https://github.com/lbenie/reading-time-estimator/compare/v1.5.3...v1.6.0) (2022-08-26)


### :sparkles: Features

* adding german translation ([#678](https://github.com/lbenie/reading-time-estimator/issues/678)) ([0785b65](https://github.com/lbenie/reading-time-estimator/commit/0785b65a0368416fc0a297a319ebd66f279f2095))


### :memo: Documenation

* add RichardMEN11 as a contributor for code, doc ([#689](https://github.com/lbenie/reading-time-estimator/issues/689)) ([c1ba36c](https://github.com/lbenie/reading-time-estimator/commit/c1ba36c2e946d0dbbc0fbad03c08923c84f31550))


### :white_check_mark: Chores

* apply formatting changes ([b7607d8](https://github.com/lbenie/reading-time-estimator/commit/b7607d803c73fe729ac911e08c19ad5985d53ee4))
* **deps:** bump terser from 4.8.0 to 4.8.1 ([#637](https://github.com/lbenie/reading-time-estimator/issues/637)) ([ac4fa96](https://github.com/lbenie/reading-time-estimator/commit/ac4fa9615d438ca20c52f48262c1d9f7922608f8))
* remove vuepress deploy ([2e5f408](https://github.com/lbenie/reading-time-estimator/commit/2e5f408a9c30f41d63000447d4cc6725b1c6dcc5))
* **deps:** update dependency @rollup/plugin-typescript to v8.3.4 ([da32296](https://github.com/lbenie/reading-time-estimator/commit/da32296f5ac338da009ef16790f83e4d87f74448))
* **deps:** update dependency @rollup/plugin-typescript to v8.4.0 ([c3c6f10](https://github.com/lbenie/reading-time-estimator/commit/c3c6f10db4e0217c45521c1b18329ca078c2b620))
* **deps:** update dependency @types/node to v18.0.4 ([e2eb3be](https://github.com/lbenie/reading-time-estimator/commit/e2eb3be7a89ab0c5c3ef746701e5e2f89b63f48c))
* **deps:** update dependency @types/node to v18.0.5 ([3a59ae3](https://github.com/lbenie/reading-time-estimator/commit/3a59ae39ece6b97fd0e0dca2b1886d0f87a170c3))
* **deps:** update dependency @types/node to v18.0.6 ([af00859](https://github.com/lbenie/reading-time-estimator/commit/af00859f8ac5130704bfcd87a4f6a410828e726a))
* **deps:** update dependency @types/node to v18.6.0 ([fe6deae](https://github.com/lbenie/reading-time-estimator/commit/fe6deae13c451dfb1fdd79c826ccda6138fa5592))
* **deps:** update dependency @types/node to v18.6.1 ([003c893](https://github.com/lbenie/reading-time-estimator/commit/003c893586e91b610689ddf553b93395376c73e6))
* **deps:** update dependency @types/node to v18.6.2 ([0824e65](https://github.com/lbenie/reading-time-estimator/commit/0824e652fd3595f5f7b1708ad296416d71d91d17))
* **deps:** update dependency @types/node to v18.6.3 ([7ad69dc](https://github.com/lbenie/reading-time-estimator/commit/7ad69dc18fd66248006a6085b52e7bde05bf5556))
* **deps:** update dependency @types/node to v18.6.4 ([0d3e508](https://github.com/lbenie/reading-time-estimator/commit/0d3e5080c2a1e6ff6d8cef0214300a0dd66d2211))
* **deps:** update dependency @types/node to v18.6.5 ([54afb7d](https://github.com/lbenie/reading-time-estimator/commit/54afb7d872e668a9b32b312d5276769d8b92f9c4))
* **deps:** update dependency @types/node to v18.7.11 ([516bc2a](https://github.com/lbenie/reading-time-estimator/commit/516bc2a67c5e1ef6d322372f13576c5d4a0c189d))
* **deps:** update dependency @types/node to v18.7.13 ([0f313c3](https://github.com/lbenie/reading-time-estimator/commit/0f313c3ee6e8b4e6bdf7f649ff4fd8569e3f6f37))
* **deps:** update dependency @types/node to v18.7.1 ([f17bdd1](https://github.com/lbenie/reading-time-estimator/commit/f17bdd1af21689d5321de7eaf8c2efbd0cd43f0c))
* **deps:** update dependency @types/node to v18.7.2 ([0933d73](https://github.com/lbenie/reading-time-estimator/commit/0933d73974cfd3d73b81e1d7ab00d6ad84841e10))
* **deps:** update dependency @types/node to v18.7.3 ([34bb670](https://github.com/lbenie/reading-time-estimator/commit/34bb6700cd4cdeef60cb3423e6e588d61ede4e2b))
* **deps:** update dependency @types/node to v18.7.4 ([4ec1cdb](https://github.com/lbenie/reading-time-estimator/commit/4ec1cdb34b1d84eaec931b7e9ffac16da63dd73c))
* **deps:** update dependency @types/node to v18.7.5 ([a5804eb](https://github.com/lbenie/reading-time-estimator/commit/a5804ebd9861acac5a03e88f88f7a74224058e37))
* **deps:** update dependency @types/node to v18.7.6 ([3d80728](https://github.com/lbenie/reading-time-estimator/commit/3d8072883c4a67cddf36d9f8cef843945182d9e2))
* **deps:** update dependency @types/node to v18.7.7 ([8dda9dc](https://github.com/lbenie/reading-time-estimator/commit/8dda9dce36348af282e1141a0e19683c4274664b))
* **deps:** update dependency @types/node to v18.7.8 ([eb0e88c](https://github.com/lbenie/reading-time-estimator/commit/eb0e88c1654d3acf2453ff8d0b46d13b2859610f))
* **deps:** update dependency @types/node to v18.7.9 ([ecbb02e](https://github.com/lbenie/reading-time-estimator/commit/ecbb02eba1149b52700dbaf229c53b32eb870a87))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.30.5 ([#619](https://github.com/lbenie/reading-time-estimator/issues/619)) ([117b409](https://github.com/lbenie/reading-time-estimator/commit/117b40911bdaaa3c9bd6663d3ea2a0c8b663d415))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.30.6 ([#624](https://github.com/lbenie/reading-time-estimator/issues/624)) ([ac72061](https://github.com/lbenie/reading-time-estimator/commit/ac72061ff5e4caaa9b72e42fc5b0a3d8344bfa3c))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.30.7 ([87943a3](https://github.com/lbenie/reading-time-estimator/commit/87943a3fdb828ea4a9d97148fd899de42981e93c))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.31.0 ([f356dc4](https://github.com/lbenie/reading-time-estimator/commit/f356dc4d6510047e468e726993f487bc6a4a5560))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.32.0 ([c9b13b4](https://github.com/lbenie/reading-time-estimator/commit/c9b13b450f4299a4ff0ebcaa0fd25efaa5408f5e))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.33.0 ([7642864](https://github.com/lbenie/reading-time-estimator/commit/7642864d23c1ebcbb86f8606e53bbffd39100e69))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.33.1 ([5c27768](https://github.com/lbenie/reading-time-estimator/commit/5c2776819ce76308a7dd50c2dccc87655dd340f8))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.34.0 ([23e36ac](https://github.com/lbenie/reading-time-estimator/commit/23e36acaccfd3c515d1fde48424764a2d3c8569d))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.35.1 ([dcde20e](https://github.com/lbenie/reading-time-estimator/commit/dcde20e083a7deea0d61caf826d04b3eabf232c0))
* **deps:** update dependency @typescript-eslint/parser to v5.30.6 ([#625](https://github.com/lbenie/reading-time-estimator/issues/625)) ([1a5ef54](https://github.com/lbenie/reading-time-estimator/commit/1a5ef54e3a049d927cd40287ddcd396fb2b4b3fd))
* **deps:** update dependency @typescript-eslint/parser to v5.30.7 ([513a1e8](https://github.com/lbenie/reading-time-estimator/commit/513a1e83b46ac955312a5b7d632c7b695e8c08d4))
* **deps:** update dependency @typescript-eslint/parser to v5.31.0 ([ca474af](https://github.com/lbenie/reading-time-estimator/commit/ca474af608209920e09fccb69b04ce80ecc455cc))
* **deps:** update dependency @typescript-eslint/parser to v5.32.0 ([d419e52](https://github.com/lbenie/reading-time-estimator/commit/d419e528929e056fb9cd9964d8871e36e34bf904))
* **deps:** update dependency @typescript-eslint/parser to v5.33.0 ([4b550da](https://github.com/lbenie/reading-time-estimator/commit/4b550da2b144f0ec898dbb269faf6b0935346b5c))
* **deps:** update dependency @typescript-eslint/parser to v5.33.1 ([bf7f14d](https://github.com/lbenie/reading-time-estimator/commit/bf7f14d3c4590f02b029830a275f82f1c5717dde))
* **deps:** update dependency @typescript-eslint/parser to v5.34.0 ([15f80d4](https://github.com/lbenie/reading-time-estimator/commit/15f80d4ed898051c58e7b9cb68d0cdb57415f408))
* **deps:** update dependency @typescript-eslint/parser to v5.35.1 ([67c7f8e](https://github.com/lbenie/reading-time-estimator/commit/67c7f8ee2eed890b40de5b91616643ec240bbc94))
* **deps:** update dependency c8 to v7.12.0 ([0bc6829](https://github.com/lbenie/reading-time-estimator/commit/0bc6829fe8c0265f95aebb75d119c82a8dfc3267))
* **deps:** update dependency concurrently to v7.3.0 ([1050b48](https://github.com/lbenie/reading-time-estimator/commit/1050b4857acfc5b6ececde914eacbce0fe5367e2))
* **deps:** update dependency eslint to v8.20.0 ([8f47c20](https://github.com/lbenie/reading-time-estimator/commit/8f47c2009870dc2e06ceaea9fd8f65b7c8833d04))
* **deps:** update dependency eslint to v8.21.0 ([1c681b1](https://github.com/lbenie/reading-time-estimator/commit/1c681b17e3bc3d8c230f2123003f0681e08ec559))
* **deps:** update dependency eslint to v8.22.0 ([1d3ca3c](https://github.com/lbenie/reading-time-estimator/commit/1d3ca3cfeeab379c35490298e08a92ab6db56948))
* **deps:** update dependency rollup-plugin-typescript2 to v0.33.0 ([65dd41d](https://github.com/lbenie/reading-time-estimator/commit/65dd41df22adab44984bfd47fedf317509450bd7))
* **deps:** update dependency semantic-release to v19.0.4 ([e86f471](https://github.com/lbenie/reading-time-estimator/commit/e86f471a659bf8fcfea75a46eca128648326bf87))
* **deps:** update dependency semantic-release to v19.0.5 ([17474ff](https://github.com/lbenie/reading-time-estimator/commit/17474ff409fcf965d6067d3942477f2d07bc0f30))
* **deps:** update dependency typescript to v4.8.2 ([838f60f](https://github.com/lbenie/reading-time-estimator/commit/838f60f1fcadae5a1d2e9a7f9bdeb2db617c2d3c))
* **deps:** update dependency unplugin-auto-import to ^0.10.0 ([aaf0178](https://github.com/lbenie/reading-time-estimator/commit/aaf0178b02518df0fcba7df33c3752f2a2c73bc3))
* **deps:** update dependency unplugin-auto-import to ^0.11.0 ([c95ca56](https://github.com/lbenie/reading-time-estimator/commit/c95ca562c8a98cd5d18ad904e81ee588f83007ff))
* **deps:** update dependency vite to v2.9.14 ([#616](https://github.com/lbenie/reading-time-estimator/issues/616)) ([4554dbd](https://github.com/lbenie/reading-time-estimator/commit/4554dbde16ec54e5d9d951bedebcb38e8f9211c0))
* **deps:** update dependency vite to v3 ([#626](https://github.com/lbenie/reading-time-estimator/issues/626)) ([8584a2d](https://github.com/lbenie/reading-time-estimator/commit/8584a2da6613567dc48647ac468c0f9bca7b8ad2))
* **deps:** update dependency vite to v3.0.1 ([74c467a](https://github.com/lbenie/reading-time-estimator/commit/74c467a66bf9c7ac749b7183fb8a76b4d0936440))
* **deps:** update dependency vite to v3.0.2 ([423c0cc](https://github.com/lbenie/reading-time-estimator/commit/423c0cc3d217403fb664883bb2a1d8364d7a5be3))
* **deps:** update dependency vite to v3.0.3 ([f49d111](https://github.com/lbenie/reading-time-estimator/commit/f49d111507c0f38c1e482988513303109d920f95))
* **deps:** update dependency vite to v3.0.4 ([494044f](https://github.com/lbenie/reading-time-estimator/commit/494044f9330b6866b804f85d3fe0d10815483407))
* **deps:** update dependency vite to v3.0.5 ([#659](https://github.com/lbenie/reading-time-estimator/issues/659)) ([ac81968](https://github.com/lbenie/reading-time-estimator/commit/ac819687ab5010cf090015427e57b54d1c04b5c0))
* **deps:** update dependency vite to v3.0.6 ([b157d57](https://github.com/lbenie/reading-time-estimator/commit/b157d57d7a5363937b868fece9a949fa33cd71da))
* **deps:** update dependency vite to v3.0.7 ([0e710d4](https://github.com/lbenie/reading-time-estimator/commit/0e710d48d62b829a94d298595d40c0e6dea78091))
* **deps:** update dependency vite to v3.0.8 ([9b28cd6](https://github.com/lbenie/reading-time-estimator/commit/9b28cd63186ab1ee8bc993d622843f03f5849a62))
* **deps:** update dependency vite to v3.0.9 ([7b8f49f](https://github.com/lbenie/reading-time-estimator/commit/7b8f49f5b399a1a4e7341931a9e52e34624ed341))
* **deps:** update dependency vitest to ^0.19.0 ([0e41234](https://github.com/lbenie/reading-time-estimator/commit/0e4123413addec46387b5df84481cd04fb8b3c4c))
* **deps:** update dependency vitest to ^0.20.0 ([ad3eed4](https://github.com/lbenie/reading-time-estimator/commit/ad3eed4a9d9c600a64cfbe8a45e0e106ef6a94d9))
* **deps:** update dependency vitest to ^0.21.0 ([b999927](https://github.com/lbenie/reading-time-estimator/commit/b9999274def086c3487fe60d84928f3ab84cf34a))
* **deps:** update dependency vitest to ^0.22.0 ([#670](https://github.com/lbenie/reading-time-estimator/issues/670)) ([de2b7ea](https://github.com/lbenie/reading-time-estimator/commit/de2b7ea90b928e92e2f5333826d8c03a7ea07e41))

## [1.5.3](https://github.com/lbenie/reading-time-estimator/compare/v1.5.2...v1.5.3) (2022-07-11)


### :white_check_mark: Chores

* add vuepress deploy ([b956148](https://github.com/lbenie/reading-time-estimator/commit/b95614808063c8f80c32fac9f39146b5f779b012))
* add vuepress deploy ([a6318f4](https://github.com/lbenie/reading-time-estimator/commit/a6318f48c14f2f6378b347e4a40c3fa6d2baa300))
* fix test pipeline ([c907b96](https://github.com/lbenie/reading-time-estimator/commit/c907b967440f658ee9e1f0d617417383a0d342fd))
* fix test pipeline ([719b884](https://github.com/lbenie/reading-time-estimator/commit/719b8846da718106f712837f09738a2251d84721))
* fix vuepress deploy ([d33fc9d](https://github.com/lbenie/reading-time-estimator/commit/d33fc9d322b52e0f21eed4389712ea5417130306))
* **deps:** update dependency @semantic-release/github to v8.0.5 ([#623](https://github.com/lbenie/reading-time-estimator/issues/623)) ([3c85383](https://github.com/lbenie/reading-time-estimator/commit/3c853837e02f6a314e6f1622c7a2a96a9089e38e))
* **deps:** update dependency @types/node to v18.0.3 ([#622](https://github.com/lbenie/reading-time-estimator/issues/622)) ([6fe24c2](https://github.com/lbenie/reading-time-estimator/commit/6fe24c2b855d3c629b9d820c049701f0e14dd422))
* **deps:** update dependency @typescript-eslint/parser to v5.30.5 ([#620](https://github.com/lbenie/reading-time-estimator/issues/620)) ([3855501](https://github.com/lbenie/reading-time-estimator/commit/3855501b0d9c12e350775ac903aca1aeb512ee84))
* **deps:** update dependency eslint to v8.19.0 ([#621](https://github.com/lbenie/reading-time-estimator/issues/621)) ([11c2235](https://github.com/lbenie/reading-time-estimator/commit/11c22350f68c68aced03e872ef2721ab3d37c3af))
* **deps:** update dependency eslint-plugin-prettier to v4.2.1 ([#618](https://github.com/lbenie/reading-time-estimator/issues/618)) ([3ca148d](https://github.com/lbenie/reading-time-estimator/commit/3ca148de1c9628940f8c9d630c07f9d18ecad709))
* **deps:** update dependency vitest to ^0.18.0 ([#617](https://github.com/lbenie/reading-time-estimator/issues/617)) ([1e35405](https://github.com/lbenie/reading-time-estimator/commit/1e35405f409c491c2cecf9b666f087579a9ff61c))


### :bug: Fixes

* properly parse japanese and chinese characters ([a4fb277](https://github.com/lbenie/reading-time-estimator/commit/a4fb27761cb2ead8ecc1b821c3ceb5e52cff98da))

## [1.5.2](https://github.com/lbenie/reading-time-estimator/compare/v1.5.1...v1.5.2) (2022-06-23)


### :memo: Documenation

* add typedoc ([91f5b1a](https://github.com/lbenie/reading-time-estimator/commit/91f5b1a4b1c1d57bef25bbceea4a7d32ef964540))
* fix documentation supported languages number ([8e849c8](https://github.com/lbenie/reading-time-estimator/commit/8e849c8d42d8e89226d834da2403c7def18f2a2a))
* remove mutation testing badge ([cfdfd5d](https://github.com/lbenie/reading-time-estimator/commit/cfdfd5dd97526f6108851a6f34cb9ae3406ef529))
* replaces javscript with typescript ([d913b45](https://github.com/lbenie/reading-time-estimator/commit/d913b45c03b5591903c3470f80d304d593494cc0))


### :white_check_mark: Chores

* fix deps ([96f0c76](https://github.com/lbenie/reading-time-estimator/commit/96f0c761f2803521debc91b258cdd6e586102360))
* update deps ([fd1bd77](https://github.com/lbenie/reading-time-estimator/commit/fd1bd77c44c3eed63f8a91df70c01303b3316de7))
* update lock file ([5096b9d](https://github.com/lbenie/reading-time-estimator/commit/5096b9d979a63e2e46f1bbdf92b28e65bb04d595))

## [1.5.1](https://github.com/lbenie/reading-time-estimator/compare/v1.5.0...v1.5.1) (2022-06-22)


### :white_check_mark: Chores

* **deps:** bump async from 2.6.3 to 2.6.4 ([#529](https://github.com/lbenie/reading-time-estimator/issues/529)) ([09a5e11](https://github.com/lbenie/reading-time-estimator/commit/09a5e11a25c4c772a475c19122df5cd8b3ba8211))
* **deps:** bump eventsource from 1.1.0 to 1.1.1 ([#577](https://github.com/lbenie/reading-time-estimator/issues/577)) ([60b48ad](https://github.com/lbenie/reading-time-estimator/commit/60b48ad82c3cf57c41521c826fa77878530a1bf5))
* **deps:** bump follow-redirects from 1.14.7 to 1.14.8 ([#477](https://github.com/lbenie/reading-time-estimator/issues/477)) ([7df104a](https://github.com/lbenie/reading-time-estimator/commit/7df104aea3435d517b517b2afc5e564b8e153e16))
* **deps:** bump minimist from 1.2.5 to 1.2.6 ([#510](https://github.com/lbenie/reading-time-estimator/issues/510)) ([5dcc642](https://github.com/lbenie/reading-time-estimator/commit/5dcc6428d790d81900f7083bec96c9712850cfe6))
* **deps:** bump prismjs from 1.25.0 to 1.27.0 ([#491](https://github.com/lbenie/reading-time-estimator/issues/491)) ([ae19078](https://github.com/lbenie/reading-time-estimator/commit/ae19078458e2a6d92d565b7833103f4ea06bb678))
* **deps:** bump url-parse from 1.5.3 to 1.5.10 ([#492](https://github.com/lbenie/reading-time-estimator/issues/492)) ([4795097](https://github.com/lbenie/reading-time-estimator/commit/479509719c307ae3fe93373b22024f95e677dac4))
* fix codeql ([797e4e6](https://github.com/lbenie/reading-time-estimator/commit/797e4e65844b19e98e4601a2121985151d748f8d))
* **deps:** update actions/cache action to v3 ([#505](https://github.com/lbenie/reading-time-estimator/issues/505)) ([3430186](https://github.com/lbenie/reading-time-estimator/commit/3430186dce506112011414926dad49c6d2c01a5f))
* **deps:** update actions/checkout action to v3 ([#496](https://github.com/lbenie/reading-time-estimator/issues/496)) ([8c787f5](https://github.com/lbenie/reading-time-estimator/commit/8c787f54881559604eb7c11c4452e10f374d214e))
* **deps:** update actions/setup-node action to v3 ([#489](https://github.com/lbenie/reading-time-estimator/issues/489)) ([d4a2ea4](https://github.com/lbenie/reading-time-estimator/commit/d4a2ea4c9bbd15d9f3b707f2e8d64e8dde92b0ad))
* **deps:** update dependency @stryker-mutator/core to v6.0.1 ([4a2e2bd](https://github.com/lbenie/reading-time-estimator/commit/4a2e2bd52b2936dc6b2521dcd294307df40b9410))
* **deps:** update dependency @stryker-mutator/core to v6.0.2 ([1eb9719](https://github.com/lbenie/reading-time-estimator/commit/1eb971968030b4ff491c77056534146e7ac408a3))
* **deps:** update dependency @stryker-mutator/core to v6 ([2558c1a](https://github.com/lbenie/reading-time-estimator/commit/2558c1a788a54b3595d0f5fea2fda10013a4034d))
* **deps:** update dependency @stryker-mutator/jest-runner to v6.0.1 ([6c5d444](https://github.com/lbenie/reading-time-estimator/commit/6c5d44440f8b51b2b806dac80b027009e2848553))
* **deps:** update dependency @stryker-mutator/jest-runner to v6.0.2 ([f01495d](https://github.com/lbenie/reading-time-estimator/commit/f01495d73c2d27c1d2ebae6d7f2e2b767f4de839))
* **deps:** update dependency @stryker-mutator/jest-runner to v6 ([82fba9c](https://github.com/lbenie/reading-time-estimator/commit/82fba9c1aed9d7c72d92d580f6633958dbfee3f2))
* **deps:** update dependency @types/jest to v27.4.1 ([3bf85ff](https://github.com/lbenie/reading-time-estimator/commit/3bf85ff62ea87693c47d2e209662655edf949bb7))
* **deps:** update dependency @types/jest to v27.5.0 ([077a369](https://github.com/lbenie/reading-time-estimator/commit/077a36940c6f400ccb5e9d00bb4d2519dfcdc6d2))
* **deps:** update dependency @types/jest to v27.5.1 ([1a5ddb1](https://github.com/lbenie/reading-time-estimator/commit/1a5ddb180636787a05916f362a633c287e5b2419))
* **deps:** update dependency @types/jest to v27.5.2 ([c32d9cc](https://github.com/lbenie/reading-time-estimator/commit/c32d9cc07f0130f3c5c5b87690e5793ba14604ca))
* **deps:** update dependency @types/jest to v28.1.1 ([ba64a22](https://github.com/lbenie/reading-time-estimator/commit/ba64a22e9381b5471d727a5fd6c049ade66e93e7))
* **deps:** update dependency @types/jest to v28.1.2 ([e435425](https://github.com/lbenie/reading-time-estimator/commit/e4354254a7f9dab0688e5ba10c5da497b8fa884d))
* **deps:** update dependency @types/jest to v28.1.3 ([4d7598d](https://github.com/lbenie/reading-time-estimator/commit/4d7598d81071a2aa18dbd3129258d7ae9b08083d))
* **deps:** update dependency @types/jest to v28 ([becb8b3](https://github.com/lbenie/reading-time-estimator/commit/becb8b35f1f41f70c100c2e684a68da7cb62eb70))
* **deps:** update dependency @types/node to v17.0.13 ([a386bc6](https://github.com/lbenie/reading-time-estimator/commit/a386bc6d52f9ac08c0e0d05bc7ff677ebddf6b13))
* **deps:** update dependency @types/node to v17.0.14 ([d00aac6](https://github.com/lbenie/reading-time-estimator/commit/d00aac67113545a8b7d37b49cc15fb1af28faace))
* **deps:** update dependency @types/node to v17.0.15 ([b68a66a](https://github.com/lbenie/reading-time-estimator/commit/b68a66a8a9cd792f27d1c8f7fe4097a5d09066a2))
* **deps:** update dependency @types/node to v17.0.16 ([b10d241](https://github.com/lbenie/reading-time-estimator/commit/b10d241b99fe073a4d45e8dc322478fe6f45df06))
* **deps:** update dependency @types/node to v17.0.17 ([c1a4577](https://github.com/lbenie/reading-time-estimator/commit/c1a4577aed520c964223708b138ebb74041c67b5))
* **deps:** update dependency @types/node to v17.0.18 ([46f06f3](https://github.com/lbenie/reading-time-estimator/commit/46f06f3221aa043cda3ca91d62289d2e55994d7b))
* **deps:** update dependency @types/node to v17.0.19 ([a1fee50](https://github.com/lbenie/reading-time-estimator/commit/a1fee503743130ee5b9ea5b2a1ebfc339e55d2a9))
* **deps:** update dependency @types/node to v17.0.20 ([1ec00ca](https://github.com/lbenie/reading-time-estimator/commit/1ec00cad3769b13751f12ee4927e3bfeae32ea8c))
* **deps:** update dependency @types/node to v17.0.21 ([2b501e7](https://github.com/lbenie/reading-time-estimator/commit/2b501e737dd25891ebb836ec812fb59363c66058))
* **deps:** update dependency @types/node to v17.0.22 ([d8c3b57](https://github.com/lbenie/reading-time-estimator/commit/d8c3b57b364235c35d58c5af34d631b4cff6e367))
* **deps:** update dependency @types/node to v17.0.23 ([15e412e](https://github.com/lbenie/reading-time-estimator/commit/15e412ed26399022f573e932c23c758d372721df))
* **deps:** update dependency @types/node to v17.0.24 ([8af72f6](https://github.com/lbenie/reading-time-estimator/commit/8af72f6474d02a6a338155dba09852c6a1426aea))
* **deps:** update dependency @types/node to v17.0.25 ([38a7d7b](https://github.com/lbenie/reading-time-estimator/commit/38a7d7b19f6cc7e6406c307bbd5f95bff5c67941))
* **deps:** update dependency @types/node to v17.0.27 ([475f296](https://github.com/lbenie/reading-time-estimator/commit/475f296fa5c6c3ac3585748f92b3c627cbc37e7a))
* **deps:** update dependency @types/node to v17.0.29 ([3634e4b](https://github.com/lbenie/reading-time-estimator/commit/3634e4b8aac04bccb6fa7e84b28a19a28783f828))
* **deps:** update dependency @types/node to v17.0.30 ([461dc6b](https://github.com/lbenie/reading-time-estimator/commit/461dc6ba64256dbd5e30fbc5727f10adedd410b2))
* **deps:** update dependency @types/node to v17.0.31 ([66c096b](https://github.com/lbenie/reading-time-estimator/commit/66c096b2cb1134e7b28b12bf10129ba4af9b1747))
* **deps:** update dependency @types/node to v17.0.32 ([2fa7133](https://github.com/lbenie/reading-time-estimator/commit/2fa71332ca487177586a60c075cf811ae53d7de6))
* **deps:** update dependency @types/node to v17.0.33 ([643c4c7](https://github.com/lbenie/reading-time-estimator/commit/643c4c70020e2edcd9bcf6f46af4db10f9079333))
* **deps:** update dependency @types/node to v17.0.34 ([919090e](https://github.com/lbenie/reading-time-estimator/commit/919090eb6b424a0cf8d664ef01eca6a5492cb830))
* **deps:** update dependency @types/node to v17.0.35 ([2b6d841](https://github.com/lbenie/reading-time-estimator/commit/2b6d841766c5f7fafa17502a026becfaeff489a3))
* **deps:** update dependency @types/node to v17.0.36 ([d707851](https://github.com/lbenie/reading-time-estimator/commit/d7078515ae6d9dfba7117c96759471123a207bb3))
* **deps:** update dependency @types/node to v17.0.38 ([598845a](https://github.com/lbenie/reading-time-estimator/commit/598845ae695b8d164eb10645af48f56685d0239f))
* **deps:** update dependency @types/node to v17.0.39 ([cb4e4cc](https://github.com/lbenie/reading-time-estimator/commit/cb4e4ccd3306c01c824b23c86d9e32433f21b709))
* **deps:** update dependency @types/node to v17.0.40 ([26e9f87](https://github.com/lbenie/reading-time-estimator/commit/26e9f871fcc8a707c47d07cfe3eb8f651fb25651))
* **deps:** update dependency @types/node to v17.0.41 ([12e0789](https://github.com/lbenie/reading-time-estimator/commit/12e078964a1af605f13bf9e937f160516e4fc9dd))
* **deps:** update dependency @types/node to v17.0.42 ([28e0776](https://github.com/lbenie/reading-time-estimator/commit/28e0776f877e1097a76ac11fb9b59cc09722796c))
* **deps:** update dependency @types/node to v17.0.43 ([6c7f529](https://github.com/lbenie/reading-time-estimator/commit/6c7f5290a32e471c097888d2f901c43f2acecb5b))
* **deps:** update dependency @types/node to v17.0.44 ([a5cdaef](https://github.com/lbenie/reading-time-estimator/commit/a5cdaef615d2b02a90d80a2783c9d15abf8a10c9))
* **deps:** update dependency @types/node to v17.0.45 ([ec6579b](https://github.com/lbenie/reading-time-estimator/commit/ec6579b2e7baa4b34fb9afaa913e183ca43d312e))
* **deps:** update dependency @types/node to v18 ([d40894d](https://github.com/lbenie/reading-time-estimator/commit/d40894d46853f5d77f45fbfeeeed9415fb606e88))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.10.2 ([788c3d9](https://github.com/lbenie/reading-time-estimator/commit/788c3d997b09845a65a124ac1192c96f3e09389a))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.11.0 ([b845e27](https://github.com/lbenie/reading-time-estimator/commit/b845e27c70efcb42ea3c1e93eeb1aabfe9cddcec))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.12.0 ([c6762ab](https://github.com/lbenie/reading-time-estimator/commit/c6762abe163ad2f435f22e59269f3fbcf7647aa1))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.12.1 ([dce6d15](https://github.com/lbenie/reading-time-estimator/commit/dce6d150c0645d9898ef0bac5a1e27a53cee06bb))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.13.0 ([aa28b7c](https://github.com/lbenie/reading-time-estimator/commit/aa28b7c100bf55257d7599fbec43155474ac1f47))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.14.0 ([d148726](https://github.com/lbenie/reading-time-estimator/commit/d148726cea5099ea53bccbc4e0da490af3d8e512))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.15.0 ([f44ce32](https://github.com/lbenie/reading-time-estimator/commit/f44ce32c71bda34c40859e62f76e1d2922684543))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.16.0 ([f86b8e5](https://github.com/lbenie/reading-time-estimator/commit/f86b8e574c43d912b673e2ead71f6a12d69275dd))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.17.0 ([95238c4](https://github.com/lbenie/reading-time-estimator/commit/95238c4def8d7579bfb302db9868c598ee085608))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.18.0 ([461c423](https://github.com/lbenie/reading-time-estimator/commit/461c42323df1275eb747a630c23e6cf6f63670ae))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.19.0 ([70a7296](https://github.com/lbenie/reading-time-estimator/commit/70a7296f7e1e92055dac506e82eee7cceeef0f15))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.20.0 ([0fcf868](https://github.com/lbenie/reading-time-estimator/commit/0fcf86844bb5e3fffcca48df391490f5c10da775))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.21.0 ([d9c2835](https://github.com/lbenie/reading-time-estimator/commit/d9c283591a05d8b8eac29f04cd12112986e106ba))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.22.0 ([d88a24a](https://github.com/lbenie/reading-time-estimator/commit/d88a24a5cf457293dfbf6ff30fdfec2c1b29b1c9))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.23.0 ([693f699](https://github.com/lbenie/reading-time-estimator/commit/693f69958767ae1187418e777d2741f1bd4fdc0c))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.24.0 ([6e42444](https://github.com/lbenie/reading-time-estimator/commit/6e424443c6378712cdc5fd5c756cfa110689f925))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.25.0 ([25ded5a](https://github.com/lbenie/reading-time-estimator/commit/25ded5a76c712729a3787c96f6a4cc275fc298cb))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.26.0 ([7965fd2](https://github.com/lbenie/reading-time-estimator/commit/7965fd249ee3a1635265cee05657d60fb6f14c26))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.27.0 ([d320833](https://github.com/lbenie/reading-time-estimator/commit/d320833ad4c2b1505fa7f8ec6c42361f9a810806))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.27.1 ([f9f65b5](https://github.com/lbenie/reading-time-estimator/commit/f9f65b5b59f6aef4d7ae0914cbdf8e944deddbef))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.28.0 ([992b4ac](https://github.com/lbenie/reading-time-estimator/commit/992b4acc9753281c4d3d41813c883e725378c535))
* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.29.0 ([66d8b5d](https://github.com/lbenie/reading-time-estimator/commit/66d8b5de64a82a8553c3ddc94f8bee3e13be46de))
* **deps:** update dependency @typescript-eslint/parser to v5.10.2 ([04fd435](https://github.com/lbenie/reading-time-estimator/commit/04fd4355abdd938842248f62698831a3f1a5719f))
* **deps:** update dependency @typescript-eslint/parser to v5.11.0 ([c844edc](https://github.com/lbenie/reading-time-estimator/commit/c844edc312a0eaf2a619dc764c42c45f788ec110))
* **deps:** update dependency @typescript-eslint/parser to v5.12.0 ([0c48011](https://github.com/lbenie/reading-time-estimator/commit/0c480114f9c159192206d110ff9e24fe1c8484f0))
* **deps:** update dependency @typescript-eslint/parser to v5.12.1 ([2048532](https://github.com/lbenie/reading-time-estimator/commit/20485324e246909871169b83725cdd065229ddeb))
* **deps:** update dependency @typescript-eslint/parser to v5.13.0 ([94cc25d](https://github.com/lbenie/reading-time-estimator/commit/94cc25d701e16d322a7dc85a474de6b11b782e90))
* **deps:** update dependency @typescript-eslint/parser to v5.14.0 ([01d4924](https://github.com/lbenie/reading-time-estimator/commit/01d49249307e28652fc7379038ef7151ac67a355))
* **deps:** update dependency @typescript-eslint/parser to v5.15.0 ([4abca33](https://github.com/lbenie/reading-time-estimator/commit/4abca338140a1dd895ef57a63c444258014423e7))
* **deps:** update dependency @typescript-eslint/parser to v5.16.0 ([#508](https://github.com/lbenie/reading-time-estimator/issues/508)) ([1c918bb](https://github.com/lbenie/reading-time-estimator/commit/1c918bb5d545d8911367e5f2e35b13ae06a5fbdb))
* **deps:** update dependency @typescript-eslint/parser to v5.17.0 ([4bf38b7](https://github.com/lbenie/reading-time-estimator/commit/4bf38b76c543ce849f2c7c84f7064260d6aef20e))
* **deps:** update dependency @typescript-eslint/parser to v5.18.0 ([f826f65](https://github.com/lbenie/reading-time-estimator/commit/f826f65fedc7e320d42b82e6acc6306eec9371ee))
* **deps:** update dependency @typescript-eslint/parser to v5.19.0 ([d26c7c9](https://github.com/lbenie/reading-time-estimator/commit/d26c7c93e085a1673770d9fa8f516144bfd37274))
* **deps:** update dependency @typescript-eslint/parser to v5.20.0 ([d89380e](https://github.com/lbenie/reading-time-estimator/commit/d89380ec83a88d940bf1622b85914f50e9191a88))
* **deps:** update dependency @typescript-eslint/parser to v5.21.0 ([b6d1165](https://github.com/lbenie/reading-time-estimator/commit/b6d11658c9fba064b1c1ea52b4444c1d12827cf8))
* **deps:** update dependency @typescript-eslint/parser to v5.22.0 ([733f6a8](https://github.com/lbenie/reading-time-estimator/commit/733f6a80dd68f1b62a31cdb852125049de772680))
* **deps:** update dependency @typescript-eslint/parser to v5.23.0 ([0ad2e7f](https://github.com/lbenie/reading-time-estimator/commit/0ad2e7f72eb7224d3b2d9b875141bc987238635c))
* **deps:** update dependency @typescript-eslint/parser to v5.24.0 ([5aa0771](https://github.com/lbenie/reading-time-estimator/commit/5aa07710b1b6f7b56a6ee8e0919018f68046a235))
* **deps:** update dependency @typescript-eslint/parser to v5.25.0 ([96b4d40](https://github.com/lbenie/reading-time-estimator/commit/96b4d40e325557174fc9788d54996935d2e25bc5))
* **deps:** update dependency @typescript-eslint/parser to v5.26.0 ([b2d5d76](https://github.com/lbenie/reading-time-estimator/commit/b2d5d769385bc23289b38024286b602b0745bfd0))
* **deps:** update dependency @typescript-eslint/parser to v5.27.0 ([252b7ae](https://github.com/lbenie/reading-time-estimator/commit/252b7ae526da028779176292aa828e1ba23aab18))
* **deps:** update dependency @typescript-eslint/parser to v5.27.1 ([7a8087f](https://github.com/lbenie/reading-time-estimator/commit/7a8087f74ff9b707cc224976a7bfb97f96e3e554))
* **deps:** update dependency @typescript-eslint/parser to v5.28.0 ([3cea091](https://github.com/lbenie/reading-time-estimator/commit/3cea09146d140fae212fbb40210d69f6e8c4e087))
* **deps:** update dependency @typescript-eslint/parser to v5.29.0 ([0e7cd17](https://github.com/lbenie/reading-time-estimator/commit/0e7cd178ec6dd7225aeed0fbbdeeefb26c42c25f))
* **deps:** update dependency concurrently to v7.1.0 ([2d508b5](https://github.com/lbenie/reading-time-estimator/commit/2d508b5cad694d1db9bdd98c598dc32d4d6dbf4c))
* **deps:** update dependency concurrently to v7.2.0 ([7c02fbb](https://github.com/lbenie/reading-time-estimator/commit/7c02fbb9413b5f69b8f0f6510e0c15db6a690b55))
* **deps:** update dependency concurrently to v7.2.1 ([a925e6c](https://github.com/lbenie/reading-time-estimator/commit/a925e6cf5183b9ecc0bb3d4f147cf84dd777237e))
* **deps:** update dependency concurrently to v7.2.2 ([eecddac](https://github.com/lbenie/reading-time-estimator/commit/eecddacb0b434d6f34e86c9b1de5f0a344cd9fc2))
* **deps:** update dependency conventional-changelog-conventionalcommits to v5 ([442b28f](https://github.com/lbenie/reading-time-estimator/commit/442b28fd724e3c2f1ccc6ccb66890cc4d01c4bd6))
* **deps:** update dependency eslint to v8.10.0 ([c2729e6](https://github.com/lbenie/reading-time-estimator/commit/c2729e692b1b5f788ac4ef129f601ecb5ac24869))
* **deps:** update dependency eslint to v8.11.0 ([2bc39aa](https://github.com/lbenie/reading-time-estimator/commit/2bc39aa1b7e754c75932b2332e004b1a762ef8c5))
* **deps:** update dependency eslint to v8.12.0 ([8425872](https://github.com/lbenie/reading-time-estimator/commit/84258726145e7dbc61490937194f284cedd41ef0))
* **deps:** update dependency eslint to v8.13.0 ([d27a1fd](https://github.com/lbenie/reading-time-estimator/commit/d27a1fdd5be7026234e4e227276a6f15f4a5b629))
* **deps:** update dependency eslint to v8.14.0 ([0f12ddc](https://github.com/lbenie/reading-time-estimator/commit/0f12ddcacde80b5cef3faab563b2284540a25c1b))
* **deps:** update dependency eslint to v8.15.0 ([9d47f0c](https://github.com/lbenie/reading-time-estimator/commit/9d47f0c48f3c0878c01ea4d6292db690dcc40c30))
* **deps:** update dependency eslint to v8.16.0 ([34a7860](https://github.com/lbenie/reading-time-estimator/commit/34a7860c40fe3a7e53b91df65c1137dc18bceebb))
* **deps:** update dependency eslint to v8.17.0 ([24ef3ea](https://github.com/lbenie/reading-time-estimator/commit/24ef3ea80b6800a1458a7ce6a9c1c5df2fd97acf))
* **deps:** update dependency eslint to v8.18.0 ([ddb1bfb](https://github.com/lbenie/reading-time-estimator/commit/ddb1bfb0a9ae409b6d22c6a88d4f8348127697b6))
* **deps:** update dependency eslint to v8.8.0 ([6a487b0](https://github.com/lbenie/reading-time-estimator/commit/6a487b0b784c2ef402646d603d54f436733f802b))
* **deps:** update dependency eslint to v8.9.0 ([779756c](https://github.com/lbenie/reading-time-estimator/commit/779756c2f5b4645e5a76cb9d3b10859764d2320a))
* **deps:** update dependency eslint-config-prettier to v8.4.0 ([409f861](https://github.com/lbenie/reading-time-estimator/commit/409f8614e1d9ec309cb58b9d54ce6c761d312e9a))
* **deps:** update dependency eslint-config-prettier to v8.5.0 ([e958c81](https://github.com/lbenie/reading-time-estimator/commit/e958c81df33c845c2a4c16d29b73f9cc90eac9f2))
* **deps:** update dependency jest to v27.5.0 ([977a68a](https://github.com/lbenie/reading-time-estimator/commit/977a68a9635b159e826f0298363da2cfdd14e6a1))
* **deps:** update dependency jest to v27.5.1 ([6431401](https://github.com/lbenie/reading-time-estimator/commit/643140110f2de6a3766b34e842a143ac2a4ad72d))
* **deps:** update dependency jest to v28.1.0 ([bec6dfb](https://github.com/lbenie/reading-time-estimator/commit/bec6dfb7849d36f46c07e57978779fac8dd3f8cd))
* **deps:** update dependency jest to v28.1.1 ([ebcb87c](https://github.com/lbenie/reading-time-estimator/commit/ebcb87c76792503875a18bfc95a9552f5a9394fa))
* **deps:** update dependency jest to v28 ([45d6212](https://github.com/lbenie/reading-time-estimator/commit/45d6212c4200ed047417f4a357fb3fe5dae507a2))
* **deps:** update dependency prettier to v2.6.0 ([c814d63](https://github.com/lbenie/reading-time-estimator/commit/c814d63ea6772b0fc1456f7639e53d0d3a6a303f))
* **deps:** update dependency prettier to v2.6.1 ([20d28e9](https://github.com/lbenie/reading-time-estimator/commit/20d28e9e53a472c70e0bbac424f52fb253d5b364))
* **deps:** update dependency prettier to v2.6.2 ([0ac8c3f](https://github.com/lbenie/reading-time-estimator/commit/0ac8c3f83b8a9ba01b8112c3114bc9afcedb12e7))
* **deps:** update dependency prettier to v2.7.0 ([a438d01](https://github.com/lbenie/reading-time-estimator/commit/a438d01da95572c656116ba168804b1cf9987c93))
* **deps:** update dependency prettier to v2.7.1 ([3033408](https://github.com/lbenie/reading-time-estimator/commit/3033408b6d9e12bfe85779c9bbbc80e5f14555c6))
* **deps:** update dependency rollup-plugin-typescript2 to v0.31.2 ([cf28521](https://github.com/lbenie/reading-time-estimator/commit/cf28521695590718889dbc7ee3b9f5e7510ae767))
* **deps:** update dependency rollup-plugin-typescript2 to v0.32.0 ([f933a8e](https://github.com/lbenie/reading-time-estimator/commit/f933a8ee3bb4cd31664450063bdf063988e6e1b1))
* **deps:** update dependency rollup-plugin-typescript2 to v0.32.1 ([9ebebb0](https://github.com/lbenie/reading-time-estimator/commit/9ebebb05074a0ce0108074989be244793678dfcf))
* **deps:** update dependency semantic-release to v19.0.3 [security] ([8640cd6](https://github.com/lbenie/reading-time-estimator/commit/8640cd66a764eff34ffc8c17592a082affd9d3e0))
* **deps:** update dependency ts-jest to v27.1.4 ([ead282c](https://github.com/lbenie/reading-time-estimator/commit/ead282c581538fdd3d6e5c7f0bd908450240ca70))
* **deps:** update dependency ts-jest to v28.0.1 ([49fb712](https://github.com/lbenie/reading-time-estimator/commit/49fb71274b4bb41e5acd7a57af40b6f3aa749755))
* **deps:** update dependency ts-jest to v28.0.2 ([cf43f67](https://github.com/lbenie/reading-time-estimator/commit/cf43f676bf9d6418be65d01f1ce7ee62d8aef610))
* **deps:** update dependency ts-jest to v28.0.3 ([1f1e639](https://github.com/lbenie/reading-time-estimator/commit/1f1e639d79fc4d85f60265b34ba42b776a18943a))
* **deps:** update dependency ts-jest to v28.0.4 ([57599d7](https://github.com/lbenie/reading-time-estimator/commit/57599d7050413d2625cc7d8bf5689e66509ffd03))
* **deps:** update dependency ts-jest to v28.0.5 ([62a6a25](https://github.com/lbenie/reading-time-estimator/commit/62a6a258625a4743bd7475dae43a38fc322562dc))
* **deps:** update dependency ts-jest to v28 ([bebc1c0](https://github.com/lbenie/reading-time-estimator/commit/bebc1c02c17f297d24f458af4b5619f2dd64dd9e))
* **deps:** update dependency typescript to v4.6.2 ([cf89f4a](https://github.com/lbenie/reading-time-estimator/commit/cf89f4ada59d54e2d84c8eaa28f3e555bab5b5f6))
* **deps:** update dependency typescript to v4.6.3 ([e2ffc83](https://github.com/lbenie/reading-time-estimator/commit/e2ffc83308c79edb02f6c2d250bdd5fca51f001f))
* **deps:** update dependency typescript to v4.6.4 ([105e090](https://github.com/lbenie/reading-time-estimator/commit/105e09068b22d902f4389ee32c9f4405b40483d4))
* **deps:** update dependency typescript to v4.7.2 ([bb1e72e](https://github.com/lbenie/reading-time-estimator/commit/bb1e72ea23e0f17eab51b639369ee912a9860916))
* **deps:** update dependency typescript to v4.7.3 ([ef5d818](https://github.com/lbenie/reading-time-estimator/commit/ef5d818b0d7194dcf8ebc41d7a312a2c6f5a02bc))
* **deps:** update dependency typescript to v4.7.4 ([c8d3b40](https://github.com/lbenie/reading-time-estimator/commit/c8d3b407ee71d40aff571fd89518953f550bca70))
* **deps:** update github/codeql-action action to v2 ([#533](https://github.com/lbenie/reading-time-estimator/issues/533)) ([ad4ee53](https://github.com/lbenie/reading-time-estimator/commit/ad4ee53dcaf476b67538e363f4656ab425ec223c))
* **deps:** update stefanzweifel/git-auto-commit-action action to v4.14.0 ([#504](https://github.com/lbenie/reading-time-estimator/issues/504)) ([23c36fd](https://github.com/lbenie/reading-time-estimator/commit/23c36fdc4bffa0902703bbd76c7eecc0ac5ce869))
* **deps:** update stefanzweifel/git-auto-commit-action action to v4.14.1 ([#524](https://github.com/lbenie/reading-time-estimator/issues/524)) ([5bc9a6e](https://github.com/lbenie/reading-time-estimator/commit/5bc9a6e1956b4006fba694ebf96477b9f36d035e))
* **deps:** update wagoid/commitlint-github-action action to v5 ([#607](https://github.com/lbenie/reading-time-estimator/issues/607)) ([932b039](https://github.com/lbenie/reading-time-estimator/commit/932b039adc7f407a0e002ce4c6730f4cb3e41d71))


### :bug: Fixes

* add types for node 16 imports ([997a1b7](https://github.com/lbenie/reading-time-estimator/commit/997a1b7113b1e8f0fc0d66536190c94557735933))

## [1.5.0](https://github.com/lbenie/reading-time-estimator/compare/v1.4.55...v1.5.0) (2022-01-27)


### :white_check_mark: Chores

* **deps:** bump follow-redirects from 1.14.1 to 1.14.7 ([#442](https://github.com/lbenie/reading-time-estimator/issues/442)) ([15a8a86](https://github.com/lbenie/reading-time-estimator/commit/15a8a862f7829ef3d17fb866b4c82247983b617f))
* **deps:** bump nanoid from 3.1.30 to 3.2.0 ([#455](https://github.com/lbenie/reading-time-estimator/issues/455)) ([e56409d](https://github.com/lbenie/reading-time-estimator/commit/e56409d72af3048ce9d320a7cc3f0eb14af21ef3))
* **deps:** bump node-fetch from 2.6.6 to 2.6.7 ([#458](https://github.com/lbenie/reading-time-estimator/issues/458)) ([06e7dbd](https://github.com/lbenie/reading-time-estimator/commit/06e7dbdab0e62f992651fdf680f60bda640e6626))
* **deps:** update stefanzweifel/git-auto-commit-action action to v4.13.1 ([#441](https://github.com/lbenie/reading-time-estimator/issues/441)) ([2baedb1](https://github.com/lbenie/reading-time-estimator/commit/2baedb12b5d88556cb198c7f5c046efdbbb039b4))


### :sparkles: Features

* readonly returned interface ([9ad5b2c](https://github.com/lbenie/reading-time-estimator/commit/9ad5b2cf48bb9442628754b55595ec2d639a1e34))

### [1.4.55](https://github.com/lbenie/reading-time-estimator/compare/v1.4.54...v1.4.55) (2022-01-25)


### :white_check_mark: Chores

* **deps:** update dependency @types/node to v17.0.12 ([a8e75ce](https://github.com/lbenie/reading-time-estimator/commit/a8e75ce411dd9f52f4656cd7f5588dfffe91bd71))

### [1.4.54](https://github.com/lbenie/reading-time-estimator/compare/v1.4.53...v1.4.54) (2022-01-25)


### :white_check_mark: Chores

* **deps:** update dependency @types/node to v17.0.11 ([65ccfde](https://github.com/lbenie/reading-time-estimator/commit/65ccfdef81c7785ec34ac3ce2633b3053255ec62))

### [1.4.53](https://github.com/lbenie/reading-time-estimator/compare/v1.4.52...v1.4.53) (2022-01-24)


### :white_check_mark: Chores

* **deps:** update dependency @typescript-eslint/parser to v5.10.1 ([6fa222e](https://github.com/lbenie/reading-time-estimator/commit/6fa222e60fcbef275a677d7cbedf814a96fd9d00))

### [1.4.52](https://github.com/lbenie/reading-time-estimator/compare/v1.4.51...v1.4.52) (2022-01-24)


### :white_check_mark: Chores

* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.10.1 ([73d37b7](https://github.com/lbenie/reading-time-estimator/commit/73d37b705f4148934c277ceab3ee8f7e0eac9248))

### [1.4.51](https://github.com/lbenie/reading-time-estimator/compare/v1.4.50...v1.4.51) (2022-01-24)


### :white_check_mark: Chores

* **deps:** update dependency @stryker-mutator/jest-runner to v5.6.1 ([8aa1f8f](https://github.com/lbenie/reading-time-estimator/commit/8aa1f8fbe5527a9e2a8f22b5b0214d9625a2d4da))

### [1.4.50](https://github.com/lbenie/reading-time-estimator/compare/v1.4.49...v1.4.50) (2022-01-23)


### :white_check_mark: Chores

* **deps:** update dependency @stryker-mutator/core to v5.6.1 ([2199192](https://github.com/lbenie/reading-time-estimator/commit/21991929079ad6059d35ad7f55b2f5c02e04a084))

### [1.4.49](https://github.com/lbenie/reading-time-estimator/compare/v1.4.48...v1.4.49) (2022-01-20)


### :white_check_mark: Chores

* **deps:** update dependency typescript to v4.5.5 ([c67d39d](https://github.com/lbenie/reading-time-estimator/commit/c67d39d7892a923abb3733a26c11fe2303746f4f))

### [1.4.48](https://github.com/lbenie/reading-time-estimator/compare/v1.4.47...v1.4.48) (2022-01-18)


### :white_check_mark: Chores

* **deps:** update dependency @types/node to v17.0.10 ([2df6eb8](https://github.com/lbenie/reading-time-estimator/commit/2df6eb859d28de7124f028faaa96a0c2f0938330))

### [1.4.47](https://github.com/lbenie/reading-time-estimator/compare/v1.4.46...v1.4.47) (2022-01-18)


### :white_check_mark: Chores

* **deps:** update dependency semantic-release to v19 ([2d5f119](https://github.com/lbenie/reading-time-estimator/commit/2d5f11984b8dbe3c0855213b3ff25804f60585c7))

### [1.4.46](https://github.com/lbenie/reading-time-estimator/compare/v1.4.45...v1.4.46) (2022-01-18)


### :white_check_mark: Chores

* **deps:** update dependency vuepress to v1.9.7 ([116f237](https://github.com/lbenie/reading-time-estimator/commit/116f2373f2910f599b501e108e9e5e005109388f))

### [1.4.45](https://github.com/lbenie/reading-time-estimator/compare/v1.4.44...v1.4.45) (2022-01-18)


### :white_check_mark: Chores

* **deps:** update dependency @vuepress/plugin-google-analytics to v1.9.7 ([02faceb](https://github.com/lbenie/reading-time-estimator/commit/02facebab530d8cc4fbfd9370a9fc0c5d00209bb))

### [1.4.44](https://github.com/lbenie/reading-time-estimator/compare/v1.4.43...v1.4.44) (2022-01-18)


### :white_check_mark: Chores

* **deps:** update dependency @typescript-eslint/parser to v5.10.0 ([4ea3601](https://github.com/lbenie/reading-time-estimator/commit/4ea3601c91f10830b19c80bc123916635d88c82a))

### [1.4.43](https://github.com/lbenie/reading-time-estimator/compare/v1.4.42...v1.4.43) (2022-01-18)


### :white_check_mark: Chores

* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.10.0 ([8c409a2](https://github.com/lbenie/reading-time-estimator/commit/8c409a270ac44ed5078566bc96dbf1b8a10fc22c))

### [1.4.42](https://github.com/lbenie/reading-time-estimator/compare/v1.4.41...v1.4.42) (2022-01-17)


### :white_check_mark: Chores

* **deps:** update dependency vuepress to v1.9.6 ([206bb46](https://github.com/lbenie/reading-time-estimator/commit/206bb46b4e15bcbf3cc0a74f73d35f808bcaf40d))

### [1.4.41](https://github.com/lbenie/reading-time-estimator/compare/v1.4.40...v1.4.41) (2022-01-17)


### :white_check_mark: Chores

* **deps:** update dependency @vuepress/plugin-google-analytics to v1.9.6 ([c453c34](https://github.com/lbenie/reading-time-estimator/commit/c453c3408c2f2ee8a1fc25abbb6c298574e2da7b))

### [1.4.40](https://github.com/lbenie/reading-time-estimator/compare/v1.4.39...v1.4.40) (2022-01-17)


### :white_check_mark: Chores

* **deps:** update dependency @types/node to v17.0.9 ([2f5b6d9](https://github.com/lbenie/reading-time-estimator/commit/2f5b6d96cd003f08a7cc08557bf6d2c2a5e8a4ee))

### [1.4.39](https://github.com/lbenie/reading-time-estimator/compare/v1.4.38...v1.4.39) (2022-01-16)


### :white_check_mark: Chores

* **deps:** update dependency eslint to v8.7.0 ([949fa30](https://github.com/lbenie/reading-time-estimator/commit/949fa306d1d38742eb7ba681a7b72b1637b85e3e))

### [1.4.38](https://github.com/lbenie/reading-time-estimator/compare/v1.4.37...v1.4.38) (2022-01-15)


### :white_check_mark: Chores

* **deps:** update dependency ts-jest to v27.1.3 ([96ed5ee](https://github.com/lbenie/reading-time-estimator/commit/96ed5ee269df437899c8eb9e15bd53cb1faacfb2))

### [1.4.37](https://github.com/lbenie/reading-time-estimator/compare/v1.4.36...v1.4.37) (2022-01-10)


### :white_check_mark: Chores

* **deps:** update dependency @typescript-eslint/parser to v5.9.1 ([cd83e6d](https://github.com/lbenie/reading-time-estimator/commit/cd83e6d6ad822ddf5afafa66c1540329f465303e))

### [1.4.36](https://github.com/lbenie/reading-time-estimator/compare/v1.4.35...v1.4.36) (2022-01-10)


### :white_check_mark: Chores

* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.9.1 ([a3ba069](https://github.com/lbenie/reading-time-estimator/commit/a3ba0694950bc07d5ebd00409dd005752640bb56))

### [1.4.35](https://github.com/lbenie/reading-time-estimator/compare/v1.4.34...v1.4.35) (2022-01-10)


### :white_check_mark: Chores

* **deps:** update dependency @stryker-mutator/jest-runner to v5.6.0 ([97e7019](https://github.com/lbenie/reading-time-estimator/commit/97e7019ed839231f7ea4e807b960aa117ae7f146))

### [1.4.34](https://github.com/lbenie/reading-time-estimator/compare/v1.4.33...v1.4.34) (2022-01-10)


### :white_check_mark: Chores

* **deps:** update dependency @stryker-mutator/core to v5.6.0 ([64ca53f](https://github.com/lbenie/reading-time-estimator/commit/64ca53fe631f8ec880ee8a1c47bea181c185b592))

### [1.4.33](https://github.com/lbenie/reading-time-estimator/compare/v1.4.32...v1.4.33) (2022-01-05)


### :white_check_mark: Chores

* **deps:** update dependency jest to v27.4.7 ([5883a39](https://github.com/lbenie/reading-time-estimator/commit/5883a393629975404bb8af9f3472ed4d743ef6e8))

### [1.4.32](https://github.com/lbenie/reading-time-estimator/compare/v1.4.31...v1.4.32) (2022-01-05)


### :white_check_mark: Chores

* **deps:** update dependency jest to v27.4.6 ([0e51463](https://github.com/lbenie/reading-time-estimator/commit/0e51463c361ba8ada42afc7d45adbcf48f97b56a))

### [1.4.31](https://github.com/lbenie/reading-time-estimator/compare/v1.4.30...v1.4.31) (2022-01-04)


### :white_check_mark: Chores

* **deps:** update dependency @types/node to v17.0.8 ([053a6fd](https://github.com/lbenie/reading-time-estimator/commit/053a6fd0ed23c554321a6de4b4ba4549cadd5459))

### [1.4.30](https://github.com/lbenie/reading-time-estimator/compare/v1.4.29...v1.4.30) (2022-01-04)


### :white_check_mark: Chores

* **deps:** update dependency @typescript-eslint/parser to v5.9.0 ([d1bf7bf](https://github.com/lbenie/reading-time-estimator/commit/d1bf7bf14ee5f53e4e3ec6800ed0ed9ae61a5766))

### [1.4.29](https://github.com/lbenie/reading-time-estimator/compare/v1.4.28...v1.4.29) (2022-01-03)


### :white_check_mark: Chores

* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.9.0 ([7b3aaf2](https://github.com/lbenie/reading-time-estimator/commit/7b3aaf2f043f680097b079e2bd69928971012e41))

### [1.4.28](https://github.com/lbenie/reading-time-estimator/compare/v1.4.27...v1.4.28) (2022-01-03)


### :white_check_mark: Chores

* **deps:** update dependency @types/node to v17.0.7 ([7c838eb](https://github.com/lbenie/reading-time-estimator/commit/7c838eb189a52f21c02a9edbd59ffe20a3a0faa6))

### [1.4.27](https://github.com/lbenie/reading-time-estimator/compare/v1.4.26...v1.4.27) (2022-01-03)


### :white_check_mark: Chores

* **deps:** update dependency concurrently to v7 ([6cdc673](https://github.com/lbenie/reading-time-estimator/commit/6cdc673d594cac0f46d14cc13cb42992f4eec2b2))

### [1.4.26](https://github.com/lbenie/reading-time-estimator/compare/v1.4.25...v1.4.26) (2022-01-01)


### :white_check_mark: Chores

* **deps:** update dependency @types/node to v17.0.6 ([8a40d9d](https://github.com/lbenie/reading-time-estimator/commit/8a40d9d826a497c0e5876cfa319c99b06f95e5c6))

### [1.4.25](https://github.com/lbenie/reading-time-estimator/compare/v1.4.24...v1.4.25) (2022-01-01)


### :white_check_mark: Chores

* **deps:** update dependency eslint to v8.6.0 ([97ce338](https://github.com/lbenie/reading-time-estimator/commit/97ce3389084ec5d32eb830929b8e682c862d1813))

### [1.4.24](https://github.com/lbenie/reading-time-estimator/compare/v1.4.23...v1.4.24) (2021-12-30)


### :white_check_mark: Chores

* **deps:** update dependency @types/jest to v27.4.0 ([c49e27e](https://github.com/lbenie/reading-time-estimator/commit/c49e27e2d3458b87a411c4624d14675e08f356e1))

### [1.4.23](https://github.com/lbenie/reading-time-estimator/compare/v1.4.22...v1.4.23) (2021-12-27)


### :white_check_mark: Chores

* **deps:** update dependency @typescript-eslint/parser to v5.8.1 ([68b0b9b](https://github.com/lbenie/reading-time-estimator/commit/68b0b9b063f67cd8bab05a16ba526a67096e0b07))

### [1.4.22](https://github.com/lbenie/reading-time-estimator/compare/v1.4.21...v1.4.22) (2021-12-27)


### :white_check_mark: Chores

* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.8.1 ([b69fa73](https://github.com/lbenie/reading-time-estimator/commit/b69fa739bda1f098fabdc5bdd7bbf931c87be7f7))

### [1.4.21](https://github.com/lbenie/reading-time-estimator/compare/v1.4.20...v1.4.21) (2021-12-26)


### :white_check_mark: Chores

* **deps:** update dependency @types/node to v17.0.5 ([d036912](https://github.com/lbenie/reading-time-estimator/commit/d036912241b7c5ea98c1ea73490ab80098d3289b))

### [1.4.20](https://github.com/lbenie/reading-time-estimator/compare/v1.4.19...v1.4.20) (2021-12-26)


### :white_check_mark: Chores

* **deps:** update dependency vuepress to v1.9.5 ([fb32fcd](https://github.com/lbenie/reading-time-estimator/commit/fb32fcdff5cb57dd2990d877ba2bcba6bd686193))

### [1.4.19](https://github.com/lbenie/reading-time-estimator/compare/v1.4.18...v1.4.19) (2021-12-26)


### :white_check_mark: Chores

* **deps:** update dependency @vuepress/plugin-google-analytics to v1.9.5 ([bb9a38b](https://github.com/lbenie/reading-time-estimator/commit/bb9a38b3ba2dfd4ef8bafc2f7b5888b609b32be0))

### [1.4.18](https://github.com/lbenie/reading-time-estimator/compare/v1.4.17...v1.4.18) (2021-12-24)


### :white_check_mark: Chores

* **deps:** update dependency vuepress to v1.9.4 ([2c19e7e](https://github.com/lbenie/reading-time-estimator/commit/2c19e7ecaf700faee0afa3e18e3643436b9734b5))

### [1.4.17](https://github.com/lbenie/reading-time-estimator/compare/v1.4.16...v1.4.17) (2021-12-24)


### :white_check_mark: Chores

* **deps:** update dependency @vuepress/plugin-google-analytics to v1.9.4 ([5777512](https://github.com/lbenie/reading-time-estimator/commit/5777512900356e0f2734d2531caeca81752078c5))

### [1.4.16](https://github.com/lbenie/reading-time-estimator/compare/v1.4.15...v1.4.16) (2021-12-24)


### :white_check_mark: Chores

* **deps:** update dependency vuepress to v1.9.3 ([5e5df0f](https://github.com/lbenie/reading-time-estimator/commit/5e5df0f1c008a181086bc960629e2bf03a9336fb))

### [1.4.15](https://github.com/lbenie/reading-time-estimator/compare/v1.4.14...v1.4.15) (2021-12-23)


### :white_check_mark: Chores

* **deps:** update dependency @vuepress/plugin-google-analytics to v1.9.3 ([ce93add](https://github.com/lbenie/reading-time-estimator/commit/ce93adde3cd3a6bbae7e789ae90882881cc24809))

### [1.4.14](https://github.com/lbenie/reading-time-estimator/compare/v1.4.13...v1.4.14) (2021-12-23)


### :white_check_mark: Chores

* **deps:** update dependency @types/node to v17.0.4 ([4c1b56a](https://github.com/lbenie/reading-time-estimator/commit/4c1b56a50a7feb4bfbc152cba9ac42f555be346e))

### [1.4.13](https://github.com/lbenie/reading-time-estimator/compare/v1.4.12...v1.4.13) (2021-12-23)


### :white_check_mark: Chores

* **deps:** update dependency @types/node to v17.0.3 ([5b3808d](https://github.com/lbenie/reading-time-estimator/commit/5b3808d86c040b7e9ce1b61f7d0bd0ebbfc63d44))

### [1.4.12](https://github.com/lbenie/reading-time-estimator/compare/v1.4.11...v1.4.12) (2021-12-23)


### :white_check_mark: Chores

* **deps:** update dependency vuepress to v1.9.1 ([261f1d8](https://github.com/lbenie/reading-time-estimator/commit/261f1d87aff36d20d1e40c3d14f15fbc8a6ffab4))

### [1.4.11](https://github.com/lbenie/reading-time-estimator/compare/v1.4.10...v1.4.11) (2021-12-23)


### :white_check_mark: Chores

* **deps:** update dependency @vuepress/plugin-google-analytics to v1.9.1 ([dbcbc5f](https://github.com/lbenie/reading-time-estimator/commit/dbcbc5fa9295a5524ba9c113d92742ad0cabe797))

### [1.4.10](https://github.com/lbenie/reading-time-estimator/compare/v1.4.9...v1.4.10) (2021-12-21)


### :white_check_mark: Chores

* **deps:** update dependency @typescript-eslint/parser to v5.8.0 ([ebbe9df](https://github.com/lbenie/reading-time-estimator/commit/ebbe9dfc0a1b2d4af7946e77963ddaaa99ea9f9c))

### [1.4.9](https://github.com/lbenie/reading-time-estimator/compare/v1.4.8...v1.4.9) (2021-12-21)


### :white_check_mark: Chores

* **deps:** update dependency vuepress to v1.8.3 ([a4bec13](https://github.com/lbenie/reading-time-estimator/commit/a4bec135687ac41a3158b45149eca4dded35e589))

### [1.4.8](https://github.com/lbenie/reading-time-estimator/compare/v1.4.7...v1.4.8) (2021-12-21)


### :white_check_mark: Chores

* **deps:** update dependency @types/node to v17.0.2 ([9ce74b3](https://github.com/lbenie/reading-time-estimator/commit/9ce74b307f76ab2fa10909447e92ea4c045e52aa))

### [1.4.7](https://github.com/lbenie/reading-time-estimator/compare/v1.4.6...v1.4.7) (2021-12-20)


### :white_check_mark: Chores

* **deps:** update dependency @vuepress/plugin-google-analytics to v1.8.3 ([c126d0d](https://github.com/lbenie/reading-time-estimator/commit/c126d0d7ba3bbb6feee618aa99c9b3667b7c9e2a))

### [1.4.6](https://github.com/lbenie/reading-time-estimator/compare/v1.4.5...v1.4.6) (2021-12-20)


### :white_check_mark: Chores

* **deps:** update dependency @typescript-eslint/eslint-plugin to v5.8.0 ([46a6f71](https://github.com/lbenie/reading-time-estimator/commit/46a6f7179f38d1882eae735d694e145a7028e136))

### [1.4.5](https://github.com/lbenie/reading-time-estimator/compare/v1.4.4...v1.4.5) (2021-12-19)


### :white_check_mark: Chores

* **deps:** update dependency @types/node to v17.0.1 ([9430971](https://github.com/lbenie/reading-time-estimator/commit/9430971287f019484b39d81af0b01087baf059b5))

### [1.4.4](https://github.com/lbenie/reading-time-estimator/compare/v1.4.3...v1.4.4) (2021-12-19)


### :white_check_mark: Chores

* generate notes ([ebddbcc](https://github.com/lbenie/reading-time-estimator/commit/ebddbcc869f15a614e56508deb36bcddcbb569eb))
* **deps:** update dependency concurrently to v6.5.1 ([19c8008](https://github.com/lbenie/reading-time-estimator/commit/19c800813349dc3424809617b5ed6f29a441d649))

## [1.4.3](https://github.com/lbenie/reading-time-estimator/compare/v1.4.2...v1.4.3) (2021-12-19)

## [1.4.2](https://github.com/lbenie/reading-time-estimator/compare/v1.4.1...v1.4.2) (2021-12-18)


### Bug Fixes

* remove stuff leftover from bad merge ([1297e8f](https://github.com/lbenie/reading-time-estimator/commit/1297e8f80c4fe0f2e58e36dd80bb672b5aea21f5))
