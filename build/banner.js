'use strict'

const pkg = require('../package.json')
const year = new Date().getFullYear()

function getBanner() {
  return `/*!
  * LZ String v${pkg.version} (${pkg.homepage})
  * Copyright 2022-${year} ${pkg.author.name}
  * Licensed under MIT (https://github.com/Eonasdan/lz-string/blob/master/LICENSE)
  */`
}

module.exports = getBanner
