(function (_0x585baa, _0x26483b) {
    var _0x33f512 = _0x585baa();
    while (true) {
        try {
            var _0x174f2 = parseInt(_0x49ac(0x21a)) / 0x1 + -parseInt(_0x49ac(0x1ec)) / 0x2 + -parseInt(_0x49ac(0x176)) / 0x3 * (-parseInt(_0x49ac(0x222)) / 0x4) + -parseInt(_0x49ac(0x18b)) / 0x5 + -parseInt(_0x49ac(0x1fd)) / 0x6 * (-parseInt(_0x49ac(0x209)) / 0x7) + -parseInt(_0x49ac(0x1cb)) / 0x8 * (parseInt(_0x49ac(0x1ac)) / 0x9) + parseInt(_0x49ac(0x244)) / 0xa * (-parseInt(_0x49ac(0x1b7)) / 0xb);
            if (_0x174f2 === _0x26483b) {
                break;
            } else {
                _0x33f512.push(_0x33f512.shift());
            }
        } catch (_0x3792b1) {
            _0x33f512.push(_0x33f512.shift());
        }
    }
})(_0x1e41, 0x942a7);
var cheerio = require(_0x49ac(0x20a));
var PROVIDER_NAME = _0x49ac(0x23a);
var DOMAINS_URL = _0x49ac(0x18e);
var TMDB_API_KEY = _0x49ac(0x1da);
var FALLBACK_DOMAINS = ['https://4khdhub.dad'];
var KNOWN_URLS = {
    "The Drama 2026": _0x49ac(0x1dc)
};
var DEFAULT_HEADERS = {
    'User-Agent': _0x49ac(0x1d3),
    'Accept': _0x49ac(0x1cf),
    'Accept-Language': _0x49ac(0x24d),
    'Connection': _0x49ac(0x16b),
    'Upgrade-Insecure-Requests': '1'
};
var cachedDomains = null;
var domainCacheTs = 0x0;
var cachedActiveMainUrl = null;
var activeMainUrlTs = 0x0;
function dbg() {
    return;
    console[_0x49ac(0x1a1)][_0x49ac(0x173)](console, arguments);
}
function assign(_0x1769b6, _0x1900b0) {
    var _0x4ad265 = {};
    var _0x2a3994;
    _0x1769b6 = _0x1769b6 || {};
    _0x1900b0 = _0x1900b0 || {};
    for (_0x2a3994 in _0x1769b6) _0x4ad265[_0x2a3994] = _0x1769b6[_0x2a3994];
    for (_0x2a3994 in _0x1900b0) _0x4ad265[_0x2a3994] = _0x1900b0[_0x2a3994];
    return _0x4ad265;
}
function _0x49ac(_0x295de7, _0xbe556b) {
    _0x295de7 = _0x295de7 - 0x164;
    var _0x1e41b6 = _0x1e41();
    var _0x49ac3a = _0x1e41b6[_0x295de7];
    if (_0x49ac.zdtuxz === undefined) {
        var _0x586924 = function (_0x365b03) {
            var _0x1769b6 = '';
            var _0x1900b0 = '';
            var _0x4ad265 = 0x0;
            var _0x2a3994;
            var _0x5c01e4;
            for (var _0x3529ba = 0x0; _0x5c01e4 = _0x365b03.charAt(_0x3529ba++); ~_0x5c01e4 && (_0x2a3994 = _0x4ad265 % 0x4 ? _0x2a3994 * 0x40 + _0x5c01e4 : _0x5c01e4, _0x4ad265++ % 0x4) ? _0x1769b6 += String.fromCharCode(0xff & _0x2a3994 >> (-0x2 * _0x4ad265 & 0x6)) : 0x0) {
                _0x5c01e4 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x5c01e4);
            }
            var _0x2952f6 = 0x0;
            for (var _0x400ad5 = _0x1769b6.length; _0x2952f6 < _0x400ad5; _0x2952f6++) {
                _0x1900b0 += '%' + ('00' + _0x1769b6.charCodeAt(_0x2952f6).toString(0x10)).slice(-0x2);
            }
            return decodeURIComponent(_0x1900b0);
        };
        _0x49ac.CNyuFw = _0x586924;
        _0x49ac.NodaKo = {};
        _0x49ac.zdtuxz = true;
    }
    var _0x5948ee = _0x1e41b6[0x0];
    var _0x51d3fb = _0x295de7 + _0x5948ee;
    var _0x36cd99 = _0x49ac.NodaKo[_0x51d3fb];
    if (!_0x36cd99) {
        _0x49ac3a = _0x49ac.CNyuFw(_0x49ac3a);
        _0x49ac.NodaKo[_0x51d3fb] = _0x49ac3a;
    } else {
        _0x49ac3a = _0x36cd99;
    }
    return _0x49ac3a;
}
function fetchText(_0x5c01e4, _0x3529ba) {
    _0x3529ba = _0x3529ba || {};
    return fetch(_0x5c01e4, {
        'method': _0x3529ba[_0x49ac(0x248)] || _0x49ac(0x1c4),
        'redirect': _0x3529ba[_0x49ac(0x259)] || 'follow',
        'headers': assign(DEFAULT_HEADERS, _0x3529ba[_0x49ac(0x1e4)] || {}),
        'body': _0x3529ba.body
    })[_0x49ac(0x18d)](function (_0x2952f6) {
        if (!_0x2952f6.ok && _0x2952f6[_0x49ac(0x1fb)] !== 0x12d && _0x2952f6[_0x49ac(0x1fb)] !== 0x12e) {
            throw new Error(_0x49ac(0x1ff) + _0x2952f6[_0x49ac(0x1fb)] + " -> " + _0x5c01e4);
        }
        return _0x2952f6[_0x49ac(0x206)]();
    });
}
function fetchJson(_0x400ad5, _0x40d613) {
    _0x40d613 = _0x40d613 || {};
    return fetch(_0x400ad5, {
        'method': _0x40d613[_0x49ac(0x248)] || 'GET',
        'redirect': _0x40d613[_0x49ac(0x259)] || _0x49ac(0x20b),
        'headers': assign(DEFAULT_HEADERS, _0x40d613[_0x49ac(0x1e4)] || {}),
        'body': _0x40d613[_0x49ac(0x242)]
    })[_0x49ac(0x18d)](function (_0x5e3067) {
        if (!_0x5e3067.ok) {
            throw new Error(_0x49ac(0x1ff) + _0x5e3067[_0x49ac(0x1fb)] + _0x49ac(0x20c) + _0x400ad5);
        }
        return _0x5e3067[_0x49ac(0x1fa)]();
    });
}
function fetchResponse(_0x2eb7c4, _0x148880) {
    _0x148880 = _0x148880 || {};
    return fetch(_0x2eb7c4, {
        'method': _0x148880.method || 'GET',
        'redirect': _0x148880[_0x49ac(0x259)] || 'follow',
        'headers': assign(DEFAULT_HEADERS, _0x148880[_0x49ac(0x1e4)] || {}),
        'body': _0x148880.body
    });
}
function fixUrl(_0x2ed7ab, _0x5cdca1) {
    if (!_0x2ed7ab) {
        return '';
    }
    if (_0x2ed7ab[_0x49ac(0x16d)]('http://') === 0x0 || _0x2ed7ab[_0x49ac(0x16d)](_0x49ac(0x224)) === 0x0) {
        return _0x2ed7ab;
    }
    if (_0x2ed7ab[_0x49ac(0x16d)]('//') === 0x0) {
        return _0x49ac(0x1d1) + _0x2ed7ab;
    }
    try {
        return new URL(_0x2ed7ab, _0x5cdca1)[_0x49ac(0x219)]();
    } catch (_0xb765f6) {
        return _0x2ed7ab;
    }
}
function normalizeTitle(_0x4049e6) {
    return String(_0x4049e6 || '')[_0x49ac(0x212)]()[_0x49ac(0x186)](/[^a-z0-9]+/g, " ")[_0x49ac(0x180)]();
}
function decodeBase64(_0x4f9853) {
    try {
        return Buffer[_0x49ac(0x171)](_0x4f9853, _0x49ac(0x16e))[_0x49ac(0x219)](_0x49ac(0x243));
    } catch (_0x52baac) {
        return '';
    }
}
function levenshteinDistance(_0x1d7ed8, _0x15868f) {
    if (_0x1d7ed8 === _0x15868f) {
        return 0x0;
    }
    var _0x5a7721 = _0x1d7ed8.length;
    var _0x3e7fbd = _0x15868f[_0x49ac(0x254)];
    if (_0x5a7721 === 0x0) {
        return _0x3e7fbd;
    }
    if (_0x3e7fbd === 0x0) {
        return _0x5a7721;
    }
    var _0x53b94c = [];
    var _0x432ad3;
    var _0x4d68e6;
    var _0x3001b6;
    for (_0x432ad3 = 0x0; _0x432ad3 <= _0x5a7721; _0x432ad3 += 0x1) {
        _0x53b94c[_0x432ad3] = [];
        _0x53b94c[_0x432ad3][0x0] = _0x432ad3;
    }
    for (_0x4d68e6 = 0x0; _0x4d68e6 <= _0x3e7fbd; _0x4d68e6 += 0x1) {
        _0x53b94c[0x0][_0x4d68e6] = _0x4d68e6;
    }
    for (_0x432ad3 = 0x1; _0x432ad3 <= _0x5a7721; _0x432ad3 += 0x1) {
        for (_0x4d68e6 = 0x1; _0x4d68e6 <= _0x3e7fbd; _0x4d68e6 += 0x1) {
            _0x3001b6 = _0x1d7ed8.charAt(_0x432ad3 - 0x1) === _0x15868f.charAt(_0x4d68e6 - 0x1) ? 0x0 : 0x1;
            _0x53b94c[_0x432ad3][_0x4d68e6] = Math[_0x49ac(0x1ad)](_0x53b94c[_0x432ad3 - 0x1][_0x4d68e6] + 0x1, _0x53b94c[_0x432ad3][_0x4d68e6 - 0x1] + 0x1, _0x53b94c[_0x432ad3 - 0x1][_0x4d68e6 - 0x1] + _0x3001b6);
        }
    }
    return _0x53b94c[_0x5a7721][_0x3e7fbd];
}
function detectQualityFromSources(_0x1f9c93) {
    var _0x39ab70 = Array.isArray(_0x1f9c93) ? _0x1f9c93 : [_0x1f9c93];
    var _0x59eea6;
    var _0x237f86;
    var _0x44fbf6;
    for (_0x59eea6 = 0x0; _0x59eea6 < _0x39ab70[_0x49ac(0x254)]; _0x59eea6 += 0x1) {
        _0x237f86 = String(_0x39ab70[_0x59eea6] || '')[_0x49ac(0x212)]();
        _0x44fbf6 = _0x237f86[_0x49ac(0x17c)](/\b(2160p|1440p|1080p|720p|480p)\b/);
        if (_0x44fbf6) {
            return _0x44fbf6[0x1];
        }
        if (/\b4k\b|\buhd\b/[_0x49ac(0x220)](_0x237f86) && !/\b1080p\b/[_0x49ac(0x220)](_0x237f86)) {
            return _0x49ac(0x20e);
        }
    }
    return 'Auto';
}
function inferLang(_0x53511e) {
    var _0x2b19f2 = String(_0x53511e || '').toLowerCase();
    var _0x24dd9e = [];
    if (_0x2b19f2[_0x49ac(0x16d)](_0x49ac(0x24a)) !== -0x1) {
        _0x24dd9e.push(_0x49ac(0x1ab));
    }
    if (_0x2b19f2[_0x49ac(0x16d)](_0x49ac(0x226)) !== -0x1) {
        _0x24dd9e[_0x49ac(0x1b8)](_0x49ac(0x16a));
    }
    if (_0x2b19f2.indexOf('telugu') !== -0x1) {
        _0x24dd9e[_0x49ac(0x1b8)](_0x49ac(0x1e6));
    }
    if (_0x2b19f2[_0x49ac(0x16d)](_0x49ac(0x249)) !== -0x1) {
        _0x24dd9e[_0x49ac(0x1b8)]('Malayalam');
    }
    if (_0x2b19f2[_0x49ac(0x16d)](_0x49ac(0x22b)) !== -0x1) {
        _0x24dd9e.push(_0x49ac(0x1c7));
    }
    if (_0x2b19f2[_0x49ac(0x16d)](_0x49ac(0x23c)) !== -0x1) {
        _0x24dd9e[_0x49ac(0x1b8)](_0x49ac(0x22f));
    }
    if (_0x2b19f2[_0x49ac(0x16d)](_0x49ac(0x22c)) !== -0x1) {
        _0x24dd9e[_0x49ac(0x1b8)](_0x49ac(0x245));
    }
    if (_0x2b19f2[_0x49ac(0x16d)](_0x49ac(0x1d5)) !== -0x1 || /\beng\b/[_0x49ac(0x220)](_0x2b19f2)) {
        _0x24dd9e.push(_0x49ac(0x239));
    }
    _0x24dd9e = uniqueBy(_0x24dd9e, function (_0x2ff902) {
        return _0x2ff902;
    });
    if (_0x24dd9e.length > 0x2) {
        return "Multi Audio";
    }
    if (_0x24dd9e.length === 0x2) {
        return _0x24dd9e[_0x49ac(0x178)]('-');
    }
    if (_0x24dd9e[_0x49ac(0x254)] === 0x1) {
        return _0x24dd9e[0x0];
    }
    if (_0x2b19f2[_0x49ac(0x16d)](_0x49ac(0x190)) !== -0x1 || _0x2b19f2[_0x49ac(0x16d)]('dual') !== -0x1) {
        return _0x49ac(0x257);
    }
    return 'EN';
}
function cleanTech(_0x61bfb5) {
    var _0x639ca7 = String(_0x61bfb5 || '').replace(/\.[a-z0-9]{2,4}$/i, '').replace(/WEB[-_. ]?DL/gi, _0x49ac(0x221))[_0x49ac(0x186)](/WEB[-_. ]?RIP/gi, _0x49ac(0x217))[_0x49ac(0x186)](/H[ .]?265/gi, 'H265')[_0x49ac(0x186)](/H[ .]?264/gi, _0x49ac(0x252))[_0x49ac(0x186)](/DDP[ .]?([0-9]\.[0-9])/gi, _0x49ac(0x167)).replace(/DTS[-_. ]?HD[-_. ]?MA/gi, _0x49ac(0x22e)).replace(/DOLBY[-_. ]?VISION/gi, _0x49ac(0x1ae));
    var _0x4fa236 = {
        'WEB-DL': 0x1,
        'WEBRIP': 0x1,
        'BLURAY': 0x1,
        'HDRIP': 0x1,
        'DVDRIP': 0x1,
        'HDTV': 0x1,
        'CAM': 0x1,
        'TS': 0x1,
        'BRRIP': 0x1,
        'BDRIP': 0x1,
        'REMUX': 0x1,
        'H264': 0x1,
        'H265': 0x1,
        'X264': 0x1,
        'X265': 0x1,
        'HEVC': 0x1,
        'AVC': 0x1,
        'AAC': 0x1,
        'AC3': 0x1,
        'DTS': 0x1,
        'DTSHDMA': 0x1,
        'TRUEHD': 0x1,
        'ATMOS': 0x1,
        'DD': 0x1,
        'HDR': 0x1,
        'HDR10': 0x1,
        'HDR10+': 0x1,
        'DV': 0x1,
        'DOLBYVISION': 0x1,
        'NF': 0x1,
        'CR': 0x1,
        'SDR': 0x1
    };
    var _0x1076ac = _0x639ca7[_0x49ac(0x229)](/[ ._()\[\]+-]+/);
    var _0x2e6bc6 = [];
    var _0x2d9101 = {};
    var _0x3c220d;
    var _0x24eaa9;
    for (_0x3c220d = 0x0; _0x3c220d < _0x1076ac[_0x49ac(0x254)]; _0x3c220d += 0x1) {
        _0x24eaa9 = String(_0x1076ac[_0x3c220d] || '')[_0x49ac(0x253)]();
        if (!_0x24eaa9) {
            continue;
        }
        if (_0x4fa236[_0x24eaa9] || /^DDP\d\.\d$/[_0x49ac(0x220)](_0x24eaa9)) {
            if (!_0x2d9101[_0x24eaa9]) {
                _0x2d9101[_0x24eaa9] = 0x1;
                _0x2e6bc6[_0x49ac(0x1b8)](_0x24eaa9);
            }
        }
    }
    return _0x2e6bc6[_0x49ac(0x178)](" ");
}
function cleanLabelText(_0x3baca3) {
    return String(_0x3baca3 || '')[_0x49ac(0x186)](/\s+/g, " ")[_0x49ac(0x186)](/Download HubDrive/gi, '')[_0x49ac(0x186)](/Download HubCloud/gi, '')[_0x49ac(0x186)](/Download PixelDrain/gi, '')[_0x49ac(0x186)](/Download BuzzServer/gi, '')[_0x49ac(0x186)](/4kHDHub\.Com/gi, '')[_0x49ac(0x186)](/4kHdHub\.com/gi, '')[_0x49ac(0x180)]();
}
function buildStream(_0x390e92, _0x33e1d7, _0x25d98f, _0x4428f1, _0x19e302, _0x14a8c3, _0x167db2, _0x222683) {
    var _0x5f3922 = buildMeta(_0x222683, _0x390e92, _0x25d98f, _0x19e302, _0x14a8c3, _0x167db2);
    return {
        'name': _0x5f3922[_0x49ac(0x1a7)],
        'title': _0x5f3922[_0x49ac(0x1ca)],
        'url': _0x33e1d7,
        'quality': _0x25d98f,
        'headers': Object[_0x49ac(0x1f0)](_0x4428f1 || {})[_0x49ac(0x254)] ? _0x4428f1 : undefined,
        'behaviorHints': {
            'bingeGroup': _0x49ac(0x21d) + String(_0x25d98f || 'auto')[_0x49ac(0x212)]()
        }
    };
}
function buildMeta(_0x563a34, _0x4ac94a, _0x3ec001, _0x4cc720, _0x2be57d, _0x242eb8) {
    var _0x17bd5f = String(_0x4ac94a || '')[_0x49ac(0x186)](/\s+/g, " ")[_0x49ac(0x186)](/Download HubDrive/gi, '')[_0x49ac(0x186)](/Download HubCloud/gi, '')[_0x49ac(0x186)](/Download PixelDrain/gi, '')[_0x49ac(0x186)](/Download BuzzServer/gi, '')[_0x49ac(0x186)](/4kHDHub\.Com/gi, '')[_0x49ac(0x186)](/4kHdHub\.com/gi, '')[_0x49ac(0x180)]();
    var _0x3ca48a = inferLang((_0x242eb8 || '') + " " + _0x17bd5f);
    var _0x32488f = !!(_0x563a34 && (_0x563a34[_0x49ac(0x1e0)] || _0x563a34.episode));
    var _0x4d7fe1 = _0x563a34 && _0x563a34[_0x49ac(0x1ca)] ? _0x563a34[_0x49ac(0x1ca)] : _0x32488f ? _0x49ac(0x18a) : _0x49ac(0x1b6);
    var _0x4f9eae = _0x563a34 && _0x563a34[_0x49ac(0x207)] ? _0x49ac(0x1d4) + _0x563a34.year : '';
    var _0x51c116;
    if (_0x32488f) {
        var _0x47fd46 = _0x563a34.episodeTitle ? _0x49ac(0x1d4) + _0x563a34[_0x49ac(0x216)] : '';
        _0x51c116 = "📺 S" + _0x563a34.season + 'E' + _0x563a34[_0x49ac(0x1ef)] + _0x47fd46 + _0x49ac(0x24f) + _0x4d7fe1 + _0x4f9eae;
    } else {
        _0x51c116 = _0x49ac(0x23b) + _0x4d7fe1 + _0x4f9eae;
    }
    var _0x4129ef = _0x3ec001[_0x49ac(0x16d)](_0x49ac(0x1a3)) !== -0x1 || _0x3ec001[_0x49ac(0x16d)]('4K') !== -0x1 ? '💎' : '📺';
    var _0x5567bc = _0x4129ef + " " + _0x3ec001 + _0x49ac(0x1df) + _0x3ca48a + (_0x4cc720 ? _0x49ac(0x200) + _0x4cc720 : '');
    var _0x37a92a = _0x17bd5f[_0x49ac(0x17c)](/\.(mkv|mp4|m4v|avi|mov)$/i);
    var _0x19ab9e = _0x37a92a ? _0x37a92a[0x1][_0x49ac(0x253)]() : 'MKV';
    var _0x4f34a8 = _0x49ac(0x25a) + _0x19ab9e + _0x49ac(0x25c) + (_0x2be57d || _0x49ac(0x221));
    return {
        'name': "4KHDHub | " + _0x3ec001 + (_0x4cc720 ? " | " + _0x4cc720 : ''),
        'title': _0x51c116 + "\n" + _0x5567bc + "\n" + _0x4f34a8
    };
}
function uniqueBy(_0x5a1608, _0x4f385d) {
    var _0xf0fef4 = {};
    var _0x169083 = [];
    var _0x4e8027;
    var _0x1e64b2;
    for (_0x4e8027 = 0x0; _0x4e8027 < _0x5a1608[_0x49ac(0x254)]; _0x4e8027 += 0x1) {
        _0x1e64b2 = _0x4f385d(_0x5a1608[_0x4e8027]);
        if (_0xf0fef4[_0x1e64b2]) {
            continue;
        }
        _0xf0fef4[_0x1e64b2] = 0x1;
        _0x169083[_0x49ac(0x1b8)](_0x5a1608[_0x4e8027]);
    }
    return _0x169083;
}
function dedupeStreams(_0x521dc0) {
    return uniqueBy(_0x521dc0, function (_0x24ea92) {
        var _0x2c88ed = String(_0x24ea92.title || '').toLowerCase()[_0x49ac(0x186)](/[^a-z0-9]/g, '');
        var _0x470dbb = String(_0x24ea92[_0x49ac(0x1e3)] || '')[_0x49ac(0x212)]();
        if (!_0x470dbb) {
            var _0x5586e9 = _0x2c88ed[_0x49ac(0x17c)](/(2160p|1080p|720p|480p)/);
            _0x470dbb = _0x5586e9 ? _0x5586e9[0x1] : _0x49ac(0x1d6);
        }
        var _0x2b87b1 = _0x470dbb[_0x49ac(0x186)](/[^a-z0-9]/g, '');
        var _0x2eff6d = String(_0x24ea92.url || '')[_0x49ac(0x210)](0x0, 0x3c)[_0x49ac(0x186)](/[^a-z0-9]/g, '');
        return _0x2c88ed + '|' + _0x2b87b1 + '|' + _0x2eff6d;
    });
}
function isPlayableMediaUrl(_0x3cdc50) {
    var _0x5d9e7d = String(_0x3cdc50 || '')[_0x49ac(0x212)]();
    if (!_0x5d9e7d) {
        return false;
    }
    if (/\.(mkv|mp4|m3u8)(\?|#|$)/[_0x49ac(0x220)](_0x5d9e7d)) {
        return true;
    }
    if (_0x5d9e7d[_0x49ac(0x16d)](_0x49ac(0x1bf)) !== -0x1) {
        return true;
    }
    if (_0x5d9e7d.indexOf(_0x49ac(0x1c5)) !== -0x1) {
        return true;
    }
    if (_0x5d9e7d[_0x49ac(0x16d)]('.workers.dev/') !== -0x1) {
        return true;
    }
    if (_0x5d9e7d[_0x49ac(0x16d)](_0x49ac(0x198)) !== -0x1) {
        return true;
    }
    if (_0x5d9e7d[_0x49ac(0x16d)](_0x49ac(0x1aa)) !== -0x1) {
        return true;
    }
    if (_0x5d9e7d[_0x49ac(0x16d)](_0x49ac(0x1f4)) !== -0x1) {
        return true;
    }
    if (_0x5d9e7d[_0x49ac(0x16d)](_0x49ac(0x208)) !== -0x1) {
        return true;
    }
    if (_0x5d9e7d.indexOf(_0x49ac(0x21e)) !== -0x1) {
        return true;
    }
    if (_0x5d9e7d[_0x49ac(0x16d)](_0x49ac(0x237)) !== -0x1) {
        return true;
    }
    if (/\/drive\/admin(?:[/?#]|$)/.test(_0x5d9e7d)) {
        return false;
    }
    if (/^https?:\/\/(?:www\.)?google\.com\/search\?/i[_0x49ac(0x220)](_0x5d9e7d)) {
        return false;
    }
    if (/^https?:\/\/t\.me\//i.test(_0x5d9e7d)) {
        return false;
    }
    if (/^https?:\/\/one\.one\.one\.one\/?$/i.test(_0x5d9e7d)) {
        return false;
    }
    if (/^https?:\/\/(?:www\.)?hdhub4u\./i[_0x49ac(0x220)](_0x5d9e7d)) {
        return false;
    }
    if (/tinyurl\.com\/unblock-ban-site/i.test(_0x5d9e7d)) {
        return false;
    }
    if (/hubcloud\.[^\/]+\/tg\/go\?/i[_0x49ac(0x220)](_0x5d9e7d)) {
        return false;
    }
    if (/hubcloud\.[^\/]+\/drive\/[^\/?#]+$/i[_0x49ac(0x220)](_0x5d9e7d)) {
        return false;
    }
    if (_0x5d9e7d.indexOf('goldmines') !== -0x1 && _0x5d9e7d[_0x49ac(0x16d)](_0x49ac(0x1c2)) !== -0x1) {
        return true;
    }
    if (_0x5d9e7d[_0x49ac(0x16d)](_0x49ac(0x235)) !== -0x1 && _0x5d9e7d[_0x49ac(0x16d)]('.r2.dev/') !== -0x1) {
        return true;
    }
    return false;
}
function hostConfidence(_0x52f593) {
    var _0x1e86dd = String(_0x52f593 || '')[_0x49ac(0x212)]();
    if (_0x1e86dd[_0x49ac(0x16d)](_0x49ac(0x1d2)) !== -0x1) {
        return 0x5f;
    }
    if (_0x1e86dd[_0x49ac(0x16d)](_0x49ac(0x20f)) !== -0x1) {
        return 0x5f;
    }
    if (_0x1e86dd[_0x49ac(0x16d)](_0x49ac(0x1a5)) !== -0x1) {
        return 0x5f;
    }
    if (_0x1e86dd[_0x49ac(0x16d)](_0x49ac(0x1b0)) !== -0x1) {
        return 0x5e;
    }
    if (_0x1e86dd.indexOf('cdn.fukggl.buzz') !== -0x1) {
        return 0x5d;
    }
    if (_0x1e86dd[_0x49ac(0x16d)](_0x49ac(0x1ee)) !== -0x1) {
        return 0x5d;
    }
    if (_0x1e86dd.indexOf(_0x49ac(0x22a)) !== -0x1) {
        return 0x50;
    }
    if (_0x1e86dd[_0x49ac(0x16d)](_0x49ac(0x1e2)) !== -0x1) {
        return 0x3c;
    }
    if (_0x1e86dd[_0x49ac(0x16d)](_0x49ac(0x181)) !== -0x1) {
        return 0x32;
    }
    if (_0x1e86dd[_0x49ac(0x16d)](_0x49ac(0x17e)) !== -0x1) {
        return 0x1e;
    }
    if (_0x1e86dd[_0x49ac(0x16d)]('.workers.dev') !== -0x1) {
        return 0x19;
    }
    if (_0x1e86dd[_0x49ac(0x16d)]('.r2.dev') !== -0x1) {
        return 0x16;
    }
    if (_0x1e86dd[_0x49ac(0x16d)](_0x49ac(0x1bf)) !== -0x1) {
        return 0xa;
    }
    return 0xa;
}
function _0x1e41() {
    var _0x3dd28b = ['AhvIy2XVDwq', 'ywnJB3vUDhmUz29Vz2XLlMnVBs9ZAwDUAw4', 'yvTOCMvMkJ0NAhvIy2XVDwqNxq', 'zMLUza', 'w3bYB2jLqwn0AxzLrg9TywLUxq', 'CMvWBgfJzq', 'CMvSzwfZzv9KyxrL', 'zgL2lMvWAxnVzgvZlwXPC3qGzgL2lNnLyxnVBI1PDgvT', 'B3jPz2LUywW', 'u2vYAwvZ', 'mty4mtu4nurMqvPhza', 'w2nVBgXLy3rnB3zPzuXPBMTZxsbmmJO', 'DgHLBG', 'Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29Tl1H5CJbUwc9or0vyl3jLzNmVAgvHzhmVBwfPBI9Tyw5PzMvZDc5QC29U', 'DgfIBguUDgfIBguGyvTOCMvMxq', 'zhvHBcbHDwrPBW', 'Cg9W', 'zgL2lM1VDMLLlwrVD25SB2fKigfBAhjLzL0', 'Bw92Awu', 'w3nLyxjJAenVBNrLBNrDiezVDw5K', 'w3jLC29SDMviDwjKCML2zv0GBgLUAZO', 'ys5IDg4', 'C29YDa', 'AhvIlMXVDhvZy2rUlMnSDwiV', 'EwvHCKrPC3rHBMnL', 'rKfjta', 'w3jLC29SDMviDwjKCML2zv0Grvjst1i6', 'Ahr0Chm6lY9HCgKUDgHLBw92AwvKyI5VCMCVmY90DI8', 'DwWUtw92AwvmAxn0igXPige', 'zhjPDMuUz29Vz2XL', 'C3jJ', 'w2nVBgXLy3rnB3zPzuXPBMTZxsbmyxLLCIaXigvTChr5ic0+ieXHEwvYidi', 'Bg9N', 'y2fUzgLKyxrLCYbMB3i6', 'mJe2ma', 'Aw5JBhvKzxm', 'AhvIlM9KExnZzxKUC3vYzG', 'Fcb0ExbLoG', 'BMfTzq', 'yxj0AwnSzs5WB3n0igeUBg5RlwjSAW', 'rxbPC29Kzs0/xhmQmcO', 'AhvIlNL1Bw15lM1VBNn0zxiV', 'sgLUzgK', 'mZmYmdu5nxzqvhj4Ba', 'BwLU', 're9mqLLwsvnjt04', 'ywjZ', 'AhvIlM1HDMvYAwnRlMXHDa', 'zg93BMXVywq', 'CMf3shrTBa', 'DMLKzw8V', 'zgL2lNjLC3vSDc1PDgvTige', 'zwfJAa', 'tw92Awu', 'mtm1mduZnMvHv3zvwG', 'ChvZAa', 'yNv6ENnLCNzLCG', 'AhrTBa', 'CgfYzw50', 'zgL2lMvWAxnVzguTBNvTyMvY', 'w3jLC29SDMviDwjKCML2zv0Gu0TjufbfrdOGAhvIzhjPDMuGBg9NAw4GCMvKAxjLy3qGlsbUBYbKB3DUBg9HzcbJB250zw50', 'Ahr0Chm6lY9HCgKUDgHLBw92AwvKyI5VCMCVmY8', 'DMLKzw8Tzg93BMXVywrZlMDVB2DSzxvZzxjJB250zw50lMnVBs8', 'zgL2lMDKBgLUAYbHw2HYzwzD', 'zgL2lMvUDhj5lwnVBNrLBNqGCcbHw2HYzwzD', 'lNDVCMTLCNmUzgv2', 'Fcb0zxH0oG', 'r0vu', 'lNiYlMrLDI8', 'w2v4DhjHy3rgCM9TugfNzv0GCMvZB2X2zuXPBMSGrKfjteveoG', 's2fUBMfKyq', 'Aw1N', 'ideWr2jWCW', 'DgL0Bgu', 'ogTQzuDnrG', 'zgL2lMvWAxnVzgvZlwXPC3qSigrPDI5LCgLZB2rLBgLZDcWGDwWUzxbPC29KAw9ZlcbKAxyUC2vHC29UlwL0zw0', 'i3nPEMu', 'Ag9ZDg5HBwu', 'Dgv4Dc9ODg1SlgfWCgXPy2f0Aw9Ul3HODg1Sk3HTBcXHChbSAwnHDgLVBI94BwW7Ct0WlJKSAw1Hz2uVyxzPzIXPBwfNzs93zwjWlcOVkJTXptaUoa', 'w2zPBMrdB250zw50vxjSxsbgB3vUzcbPBIbltK9xtL9vuKXtoG', 'Ahr0Chm6', 'AhvIlMXVDhvZy2rUlMnSDwi', 'tw96AwXSys81lJaGkfDPBMrVD3mGtLqGmtaUmdSGv2LUnJq7ihG2ncKGqxbWBgvxzwjlAxqVntm3lJm2icHlsfrntcWGBgLRzsbhzwnRBYKGq2HYB21LlZeYnc4WlJaUmcbtywzHCMKVntm3lJm2', 'ic0G', 'zw5NBgLZAa', 'yxv0BW', 'zMLYC3q', 'zgL2lLrqB3n0ige', 'lZ9Zpq', 'ndm5yZq3oge3nZfMmZvJmduWmJjMowzLywjJy2eWmwm', 'w3jLC29SDMviDwjKCML2zv0GDhj5Aw5NigzVCM0Gywn0Aw9UoG', 'Ahr0Chm6lY80A2HKAhvIlMXPBMSVDgHLlwrYyw1Hlw1VDMLLlty3mJKV', 'ywn0Aw9U', 'sevbra', 'ihWG8j+mJsa', 'C2vHC29U', 'w2DLDe1HAw5vCMXDie1HBMLMzxn0igrVBwfPBIbHBgL2ztO', 'AgjSAw5RCW', 'CxvHBgL0Eq', 'AgvHzgvYCW', 'zgL2lLrqB3n0txyGyq', 'vgvSDwD1', 'AwzYyw1Lw3nYyYO9j2H1yMnSB3vKj10', 'D29YA2vYCY5Kzxy', 'zgL2lM1VDMLLlwnHCMqTy29UDgvUDcbHw2HYzwzD', 'BwfUDwfS', 'y29Uy2f0', 'mtyYmtG4wNf3tfrV', 'FcbKAxn0oG', 'AhvIlMrPC2TJzg4UyNv6EG', 'zxbPC29Kzq', 'A2v5CW', 'xgjfxhmQmcO', 'zg9TywLU', 'w2nVBgXLy3rnB3zPzuXPBMTZxsbmmtO', 'AhvIlM9KExnZzxKUC3vYzI8', 'Bg9JyxrPB24', 'lNiYlMrLDG', 'BwfW', 'BgLUAZ0', 'w2nVBgXLy3rnB3zPzuXPBMTZxsbmmZO', 'ANnVBG', 'C3rHDhvZ', 'zgL2lMnHCMqTz3jPzcbHlM1VDMLLlwnHCMq', 'mtaWmde4mLbeAMjVBG', 'BM93', 'sfruuca', 'ihWG8j+sVIa', 'zgL2lMrVD25SB2fKlwXPBMTZigfBAhjLzL0', 'icbHBMnOB3i6', 'Bg9NB3v0', 'y29UDgvUDc10ExbL', 'BJrRAgrODwi', 'Dgv4Da', 'EwvHCG', 'AhvIlM1HDMvYAwnRlMXHDc8', 'mZv0wLDfq2i', 'y2HLzxjPBY13AxrOB3v0lw5VzguTBMf0AxzL', 'zM9SBg93', 'ic0+ia', 'AhjLzG', 'mJe2mha', 'AhvIlNL1Bw15lM1VBNn0zxi', 'C2XPy2u', 'C2nVCMu', 'Dg9mB3DLCKnHC2u', 'FcbZzxjPzxm6', 'y2XVC2vZDa', 'w3jLC29SDMviDwjKCML2zv0Gu0TjufbfrdOGAhvIzhjPDMuUC3bHy2uGCMvXDwLYzxmGBg9NAw4GlsbJyw5UB3qGCMvZB2X2zsbWCM9NCMfTBwf0AwnHBgX5', 'zxbPC29KzvrPDgXL', 'v0vcuKLq', 'w3jLC29SDMviDwjKCML2zv0GDgL0Bgu6', 'Dg9tDhjPBMC', 'nZqYmtG4v2XxDhnO', 'y2f0y2G', 'yxjPys1SywjLBa', 'ngTOzgH1yI0', 'y2rUlMz1A2DNBc5IDxP6lW', 'B3jPz2LUywXFBMfTzq', 'DgvZDa', 'v0vclurm', 'neLVvKD3uG', 'p3i9', 'Ahr0Chm6lY8', 'ywnJB3vUDhmUz29Vz2XLlMnVBq', 'DgfTAwW', 'CNvUDgLTzq', 'zgL2lMjVEc1JB250zw50igfBAhjLzL0', 'C3bSAxq', 'AhvIy2rU', 'A2fUBMfKyq', 'ChvUAMfIAq', 'lMzPBguTDgL0Bgu', 'rfrtsernqq', 'qMvUz2fSAq', 'z3bKBc5ODwjJBg91za', 'zxHWB3j0CW', 'w3nLyxjJAenVBNrLBNrDifvstdO', 'zgL2lMvWAxnVzguTzg93BMXVywqTAxrLBq', 'yxr0CG', 'ChvIlq', 'CMvZB2X2zq', 'AhvIlMrPC2TJzg4UyNv6EI8', 'p2fWAv9RzxK9', 'rw5NBgLZAa', 'ngTOzgH1yG', '8j+oRca', 'yMvUz2fSAq', 'zgL2lNDWlwjSB2nRlwj1DhrVBNmGyvTOCMvMxq', 'lNDVCMTLCNmUzgv2lW', 'w3bYB2jLqwn0AxzLrg9TywLUxsbqCM9IAw5N', 'ywXS', 'w2DLDe1HAw5vCMXDifvZAw5NignHy2HLzcbHy3rPDMuGvvjmoG', 'yM9KEq', 'yMLUyxj5', 'mteWyKrpsvnh', 'uhvUAMfIAq', 'mtbNyNbZ', 'w2nVBgXLy3rnB3zPzuXPBMTZxsbmyxLLCIaYigvTChr5ic0+ieXHEwvYidmGzNvSBcbZy2fU', 'Bwv0Ag9K', 'BwfSyxLHBgfT', 'AgLUzgK', 'l2vWAxnVzguV', 'AhvIzhjPDMuUC3bHy2u', 'zw4TvvmSzw47Ct0WlJK', 'lMzPBguTDgL0BguSic5LCgLZB2rLlwzPBguTDgL0Bgu', 'ihWG', 'l3jLz2LZDgvY', 'BwvZC2fNzq', 'sdi2na', 'Dg9vChbLCKnHC2u', 'BgvUz3rO', 'B3jPz2LUywXFDgL0Bgu', 'zMLSzvrPDgXL', 'rhvHBcbbDwrPBW', 'w3nLyxjJAenVBNrLBNrDiejLC3q6', 'CMvKAxjLy3q', '8j+oNU+4JYa', 'ys5TB3zPzs1JyxjK', 'ihWG4Os577Ipia', 'CJiUzgv2', 'zgL2lMrVD25SB2fKlwL0zw0SigrPDLTKyxrHlwzPBguTAwrD', 'Bg9Hza', 'CcWGzgL2lcbSAsWGDhiSihrK', 'rerqjde', 'Fcbive1migXLBJO', 'BgfIzwW', 'vgfTAwW', 'A2vLCc1HBgL2zq', 'z3bKBc4', 'Aw5KzxHpzG', 'yMfZzty0', 'yvTOCMvMxq', 'z2v0', 'zNjVBq', 'lMnHCMqTAgvHzgvY', 'yxbWBhK', 'z29Vz2XLDxnLCMnVBNrLBNq', 'zMLYC3rFywLYx2rHDgu', 'mZuWndm0oeneC0vbrq', 'w3jLC29SDMviDwjKCML2zv0GyMvZDcbJyw5KAwrHDgu6', 'AM9PBG', 'ys5IDg5BAhjLzL0', 'AMf2yxnJCMLWDa', 'DxjS', 'Bwf0y2G', 'w2nVBgXLy3rnB3zPzuXPBMTZxsbbteWGBgf5zxjZigvTChr5ic0GzhvTCgLUzYbHBgWGyw5JAg9YCYbMB3iGzgvIDwC6', 'AhvIzhjPDMu', 'ywX0', 'DhjPBq'];
    _0x1e41 = function () {
        return _0x3dd28b;
    };
    return _0x1e41();
}
function sortLinksByPriority(_0x37413a) {
    return (_0x37413a || [])[_0x49ac(0x210)]()[_0x49ac(0x197)](function (_0x354d52, _0x14cca6) {
        return hostConfidence(_0x14cca6[_0x49ac(0x17b)]) - hostConfidence(_0x354d52[_0x49ac(0x17b)]);
    });
}
function getDomains() {
    var _0x38bc67 = Date[_0x49ac(0x1fe)]();
    if (cachedDomains && _0x38bc67 - domainCacheTs < 3600000) {
        return Promise[_0x49ac(0x236)](cachedDomains);
    }
    return fetchJson(DOMAINS_URL)[_0x49ac(0x18d)](function (_0x3795b0) {
        cachedDomains = _0x3795b0 || {};
        domainCacheTs = _0x38bc67;
        return cachedDomains;
    })[_0x49ac(0x21b)](function () {
        cachedDomains = cachedDomains || {};
        domainCacheTs = _0x38bc67;
        return cachedDomains;
    });
}
function probeActiveDomain() {
    dbg(_0x49ac(0x23f), FALLBACK_DOMAINS[_0x49ac(0x254)], 'domains...');
    return Promise[_0x49ac(0x240)](FALLBACK_DOMAINS[_0x49ac(0x1f7)](function (_0x5d991c) {
        return fetch(_0x5d991c + '/', {
            'method': _0x49ac(0x1de),
            'redirect': _0x49ac(0x20b),
            'headers': DEFAULT_HEADERS
        })[_0x49ac(0x18d)](function (_0x50e6d0) {
            var _0x331952 = _0x50e6d0.ok || _0x50e6d0[_0x49ac(0x1fb)] === 0xc8 || _0x50e6d0[_0x49ac(0x1fb)] === 0x12d || _0x50e6d0[_0x49ac(0x1fb)] === 0x12e;
            dbg(_0x49ac(0x185), _0x5d991c, '->', _0x50e6d0.status, _0x331952 ? 'OK' : _0x49ac(0x19a));
            return {
                'domain': _0x5d991c,
                'ok': _0x331952
            };
        })[_0x49ac(0x21b)](function (_0x4c78c5) {
            dbg(_0x49ac(0x185), _0x5d991c, "-> FAIL:", _0x4c78c5[_0x49ac(0x251)]);
            return {
                'domain': _0x5d991c,
                'ok': false
            };
        });
    }))[_0x49ac(0x18d)](function (_0x23dad7) {
        for (var _0xc25818 = 0x0; _0xc25818 < _0x23dad7[_0x49ac(0x254)]; _0xc25818++) {
            if (_0x23dad7[_0xc25818].ok) {
                dbg("[probeActiveDomain] Winner:", _0x23dad7[_0xc25818].domain);
                return _0x23dad7[_0xc25818][_0x49ac(0x1f2)];
            }
        }
        return 'https://4khdhub.dad';
    });
}
function getMainUrl() {
    var _0x5e5671 = Date[_0x49ac(0x1fe)]();
    if (cachedActiveMainUrl && _0x5e5671 - activeMainUrlTs < 1800000) {
        dbg(_0x49ac(0x241), cachedActiveMainUrl);
        return Promise[_0x49ac(0x236)](cachedActiveMainUrl);
    }
    return getDomains()[_0x49ac(0x18d)](function (_0x31d527) {
        var _0x3df85f = _0x31d527['4khdhub'] || _0x31d527[_0x49ac(0x205)] || '';
        if (_0x3df85f) {
            return fetch(_0x3df85f + '/', {
                'method': _0x49ac(0x1de),
                'redirect': _0x49ac(0x20b),
                'headers': DEFAULT_HEADERS
            })[_0x49ac(0x18d)](function (_0x538ecc) {
                if (_0x538ecc.ok || _0x538ecc[_0x49ac(0x1fb)] === 0xc8) {
                    dbg(_0x49ac(0x1e1), _0x3df85f);
                    cachedActiveMainUrl = _0x3df85f;
                    activeMainUrlTs = _0x5e5671;
                    return _0x3df85f;
                }
                return probeActiveDomain()[_0x49ac(0x18d)](function (_0x45f8ac) {
                    cachedActiveMainUrl = _0x45f8ac;
                    activeMainUrlTs = _0x5e5671;
                    return _0x45f8ac;
                });
            })[_0x49ac(0x21b)](function () {
                return probeActiveDomain().then(function (_0x38943a) {
                    cachedActiveMainUrl = _0x38943a;
                    activeMainUrlTs = _0x5e5671;
                    return _0x38943a;
                });
            });
        }
        return probeActiveDomain().then(function (_0x1cc922) {
            cachedActiveMainUrl = _0x1cc922;
            activeMainUrlTs = _0x5e5671;
            return _0x1cc922;
        });
    })[_0x49ac(0x21b)](function () {
        return probeActiveDomain()[_0x49ac(0x18d)](function (_0x36857b) {
            cachedActiveMainUrl = _0x36857b;
            activeMainUrlTs = _0x5e5671;
            return _0x36857b;
        });
    });
}
function getTmdbNames(_0x446b95, _0x910b0f) {
    var _0x59cea6 = _0x910b0f === 'movie' ? _0x49ac(0x193) : 'tv';
    var _0x2a68fc = _0x49ac(0x1be) + _0x59cea6 + '/' + _0x446b95 + _0x49ac(0x238) + TMDB_API_KEY;
    return fetchJson(_0x2a68fc)[_0x49ac(0x18d)](function (_0x53c552) {
        var _0x5ea69b = _0x53c552[_0x49ac(0x1a7)] || _0x53c552[_0x49ac(0x1ca)] || '';
        var _0x69bc69 = (_0x53c552[_0x49ac(0x187)] || _0x53c552[_0x49ac(0x175)] || '')[_0x49ac(0x229)]('-')[0x0];
        var _0x5d64fb = _0x53c552.runtime ? _0x53c552[_0x49ac(0x227)] + 'm' : '';
        return {
            'title': _0x5ea69b,
            'original': _0x53c552[_0x49ac(0x21f)] || _0x53c552[_0x49ac(0x255)] || _0x5ea69b,
            'year': _0x69bc69,
            'duration': _0x5d64fb
        };
    })[_0x49ac(0x21b)](function () {
        return {
            'title': '',
            'original': '',
            'year': '',
            'duration': ''
        };
    });
}
function getTmdbEpisodeName(_0x476674, _0x164200, _0x35d6a6) {
    if (!_0x164200 || !_0x35d6a6) {
        return Promise[_0x49ac(0x236)]('');
    }
    var _0x2a3168 = _0x49ac(0x19c) + _0x476674 + '/season/' + _0x164200 + _0x49ac(0x24b) + _0x35d6a6 + '?api_key=' + TMDB_API_KEY;
    return fetchJson(_0x2a3168)[_0x49ac(0x18d)](function (_0x49cae3) {
        return _0x49cae3[_0x49ac(0x1a7)] || '';
    })[_0x49ac(0x21b)](function () {
        return '';
    });
}
function searchContent(_0x2c9ed9, _0x31a077, _0x58ae02) {
    return getMainUrl()[_0x49ac(0x18d)](function (_0x272040) {
        var _0x581589 = _0x2c9ed9;
        if (_0x58ae02) {
            _0x581589 += " " + _0x58ae02;
        }
        var _0x402272 = _0x272040 + _0x49ac(0x1d9) + encodeURIComponent(_0x581589);
        dbg(_0x49ac(0x232), _0x402272, _0x49ac(0x1a6), _0x31a077, "| year:", _0x58ae02);
        return fetchText(_0x402272)[_0x49ac(0x18d)](function (_0x4b64ef) {
            var _0x18001c = cheerio[_0x49ac(0x165)](_0x4b64ef);
            var _0x384128 = [];
            var _0x444407 = [_0x49ac(0x1fc), _0x49ac(0x25b), "div.card-grid a[href]", _0x49ac(0x1b4), _0x49ac(0x1a8), _0x49ac(0x1d8), _0x49ac(0x1e5), _0x49ac(0x19d)][_0x49ac(0x178)](", ");
            _0x18001c(_0x444407)[_0x49ac(0x1b5)](function (_0x50032b, _0x1c1d99) {
                var _0x419ee5 = fixUrl(_0x18001c(_0x1c1d99)[_0x49ac(0x234)]('href'), _0x272040);
                if (!_0x419ee5) {
                    return;
                }
                if (/\/(category|tag|author|page|feed|wp-admin|wp-login|about|contact|dmca|privacy)/i[_0x49ac(0x220)](_0x419ee5)) {
                    return;
                }
                if (_0x419ee5 === _0x272040 + '/' || _0x419ee5 === _0x272040) {
                    return;
                }
                try {
                    if (new URL(_0x419ee5)[_0x49ac(0x1ce)] !== new URL(_0x272040)[_0x49ac(0x1ce)]) {
                        return;
                    }
                } catch (_0x45dab1) {}
                var _0x345b59 = _0x18001c(_0x1c1d99)[_0x49ac(0x184)](".movie-card-title, h2, h3, h4, .entry-title, .title")[_0x49ac(0x1d7)]()[_0x49ac(0x206)]().trim() || _0x18001c(_0x1c1d99).attr(_0x49ac(0x1ca)) || _0x18001c(_0x1c1d99)[_0x49ac(0x234)](_0x49ac(0x21c)) || _0x18001c(_0x1c1d99)[_0x49ac(0x184)](_0x49ac(0x1c8))[_0x49ac(0x234)](_0x49ac(0x17f)) || _0x18001c(_0x1c1d99)[_0x49ac(0x206)]().trim();
                if (!_0x345b59 || _0x345b59.length < 0x2) {
                    return;
                }
                var _0x43ff30 = (_0x345b59 + " " + _0x419ee5)[_0x49ac(0x212)]();
                var _0x52e5f0 = /\bseries\b/i.test(_0x345b59) || /-series-?\d*/i[_0x49ac(0x220)](_0x419ee5) || /\/series\//i[_0x49ac(0x220)](_0x419ee5) || /\bseason\s*\d+\b/i[_0x49ac(0x220)](_0x43ff30);
                if (_0x31a077 === _0x49ac(0x193) && _0x52e5f0) {
                    return;
                }
                if (_0x31a077 !== _0x49ac(0x193) && !_0x52e5f0) {
                    return;
                }
                var _0x4a8916 = String(_0x345b59)[_0x49ac(0x186)](/[.*?[\]()]/g, '').replace(/\s+details$/i, '')[_0x49ac(0x180)]();
                var _0x2b8b5d = _0x43ff30[_0x49ac(0x17c)](/\b(19|20)\d{2}\b/);
                var _0x217ffb = _0x2b8b5d ? parseInt(_0x2b8b5d[0x0], 0xa) : 0x0;
                var _0x540583 = levenshteinDistance(String(_0x4a8916 || '')[_0x49ac(0x212)]()[_0x49ac(0x186)](/[^a-z0-9]+/g, " ")[_0x49ac(0x180)](), String(_0x2c9ed9 || '')[_0x49ac(0x212)]()[_0x49ac(0x186)](/[^a-z0-9]+/g, " ")[_0x49ac(0x180)]());
                var _0x5648d7 = _0x58ae02 && _0x217ffb ? Math[_0x49ac(0x1af)](_0x217ffb - _0x58ae02) : 0x0;
                var _0x32b7f3 = String(_0x4a8916 || '')[_0x49ac(0x212)]()[_0x49ac(0x186)](/[^a-z0-9]+/g, " ")[_0x49ac(0x180)]() === String(_0x2c9ed9 || '')[_0x49ac(0x212)]()[_0x49ac(0x186)](/[^a-z0-9]+/g, " ")[_0x49ac(0x180)]() ? -0x64 : 0x0;
                var _0x3fffb1 = String(_0x4a8916 || '')[_0x49ac(0x212)]()[_0x49ac(0x186)](/[^a-z0-9]+/g, " ")[_0x49ac(0x180)]()[_0x49ac(0x16d)](String(_0x2c9ed9 || '')[_0x49ac(0x212)]()[_0x49ac(0x186)](/[^a-z0-9]+/g, " ")[_0x49ac(0x180)]()) !== -0x1 ? -0xa : 0x0;
                dbg("[searchContent] +Candidate:", _0x4a8916, _0x49ac(0x213), _0x52e5f0, _0x49ac(0x1ed), _0x540583);
                _0x384128.push({
                    'href': _0x419ee5,
                    'title': _0x4a8916,
                    'year': _0x217ffb,
                    'distance': _0x540583,
                    'yearDistance': _0x5648d7,
                    'score': _0x540583 + _0x5648d7 + _0x32b7f3 + _0x3fffb1
                });
            });
            dbg(_0x49ac(0x194), _0x384128[_0x49ac(0x254)], _0x49ac(0x1a2), _0x2c9ed9, '(type:', _0x31a077 + ')');
            if (!_0x384128[_0x49ac(0x254)]) {
                return null;
            }
            _0x384128[_0x49ac(0x197)](function (_0x2b44f4, _0x296147) {
                return _0x2b44f4[_0x49ac(0x211)] - _0x296147[_0x49ac(0x211)] || _0x2b44f4.distance - _0x296147.distance || _0x2b44f4[_0x49ac(0x199)] - _0x296147[_0x49ac(0x199)];
            });
            dbg(_0x49ac(0x258), _0x384128[0x0][_0x49ac(0x1ca)], '->', _0x384128[0x0][_0x49ac(0x20d)]);
            return _0x384128[0x0][_0x49ac(0x20d)] || null;
        });
    });
}
function collectMovieLinks(_0x4f2eeb, _0x13df51) {
    var _0xee75f5 = [];
    _0x4f2eeb(_0x49ac(0x164))[_0x49ac(0x1b5)](function (_0x1bd151, _0x335408) {
        var _0x4a74ac = _0x4f2eeb(_0x335408);
        var _0x386bf3 = fixUrl(_0x4a74ac.find('a[href]')[_0x49ac(0x1d7)]()[_0x49ac(0x234)](_0x49ac(0x20d)), _0x13df51);
        var _0x36a04f = String(_0x4a74ac.text()[_0x49ac(0x180)]() || _0x49ac(0x1b6) || '')[_0x49ac(0x186)](/\s+/g, " ")[_0x49ac(0x186)](/Download HubDrive/gi, '')[_0x49ac(0x186)](/Download HubCloud/gi, '')[_0x49ac(0x186)](/Download PixelDrain/gi, '')[_0x49ac(0x186)](/Download BuzzServer/gi, '')[_0x49ac(0x186)](/4kHDHub\.Com/gi, '')[_0x49ac(0x186)](/4kHdHub\.com/gi, '')[_0x49ac(0x180)]();
        var _0x318c52 = String(_0x4a74ac[_0x49ac(0x184)](_0x49ac(0x22d))[_0x49ac(0x1d7)]()[_0x49ac(0x206)]().trim() || '' || '')[_0x49ac(0x186)](/\s+/g, " ")[_0x49ac(0x186)](/Download HubDrive/gi, '')[_0x49ac(0x186)](/Download HubCloud/gi, '')[_0x49ac(0x186)](/Download PixelDrain/gi, '')[_0x49ac(0x186)](/Download BuzzServer/gi, '')[_0x49ac(0x186)](/4kHDHub\.Com/gi, '')[_0x49ac(0x186)](/4kHdHub\.com/gi, '')[_0x49ac(0x180)]();
        if (!_0x386bf3) {
            return;
        }
        dbg(_0x49ac(0x1f3), _0x386bf3);
        _0xee75f5[_0x49ac(0x1b8)]({
            'url': _0x386bf3,
            'label': _0x36a04f,
            'fileTitle': _0x318c52,
            'rawHtml': _0x4a74ac[_0x49ac(0x1ba)]() || ''
        });
    });
    if (!_0xee75f5[_0x49ac(0x254)]) {
        dbg(_0x49ac(0x1a0));
        var _0xcb3c6f = [_0x49ac(0x201), _0x49ac(0x1c0), "div.dllinks a[href]", _0x49ac(0x192), _0x49ac(0x1e9), _0x49ac(0x1c1), "div.thecontent p a[href]", _0x49ac(0x18f), _0x49ac(0x228), _0x49ac(0x23d), "p > a[href]"][_0x49ac(0x178)](", ");
        _0x4f2eeb(_0xcb3c6f).each(function (_0x5394a4, _0x396c46) {
            var _0x4d3793 = fixUrl(_0x4f2eeb(_0x396c46)[_0x49ac(0x234)]('href'), _0x13df51);
            if (!_0x4d3793) {
                return;
            }
            var _0x28227d = _0x4d3793.toLowerCase();
            var _0x35c18b = _0x28227d.indexOf(_0x49ac(0x181)) !== -0x1 || _0x28227d.indexOf(_0x49ac(0x17e)) !== -0x1 || _0x28227d[_0x49ac(0x16d)]('hubcdn') !== -0x1 || _0x28227d.indexOf(_0x49ac(0x1e8)) !== -0x1 || _0x28227d[_0x49ac(0x16d)](_0x49ac(0x25d)) !== -0x1 || /\.(mp4|mkv|m3u8)(\?|$)/i[_0x49ac(0x220)](_0x28227d);
            if (!_0x35c18b) {
                return;
            }
            var _0x93c504 = String(_0x4f2eeb(_0x396c46)[_0x49ac(0x214)](_0x49ac(0x166))[_0x49ac(0x1d7)]()[_0x49ac(0x206)]()[_0x49ac(0x180)]() || _0x4f2eeb(_0x396c46)[_0x49ac(0x206)]()[_0x49ac(0x180)]() || _0x49ac(0x1b6) || '')[_0x49ac(0x186)](/\s+/g, " ")[_0x49ac(0x186)](/Download HubDrive/gi, '')[_0x49ac(0x186)](/Download HubCloud/gi, '')[_0x49ac(0x186)](/Download PixelDrain/gi, '')[_0x49ac(0x186)](/Download BuzzServer/gi, '')[_0x49ac(0x186)](/4kHDHub\.Com/gi, '')[_0x49ac(0x186)](/4kHdHub\.com/gi, '')[_0x49ac(0x180)]();
            dbg(_0x49ac(0x18c), _0x4d3793);
            _0xee75f5[_0x49ac(0x1b8)]({
                'url': _0x4d3793,
                'label': _0x93c504,
                'fileTitle': String(_0x4f2eeb(_0x396c46)[_0x49ac(0x206)]()[_0x49ac(0x180)]() || '' || '')[_0x49ac(0x186)](/\s+/g, " ")[_0x49ac(0x186)](/Download HubDrive/gi, '')[_0x49ac(0x186)](/Download HubCloud/gi, '')[_0x49ac(0x186)](/Download PixelDrain/gi, '')[_0x49ac(0x186)](/Download BuzzServer/gi, '')[_0x49ac(0x186)](/4kHDHub\.Com/gi, '')[_0x49ac(0x186)](/4kHdHub\.com/gi, '')[_0x49ac(0x180)](),
                'rawHtml': _0x4f2eeb(_0x396c46)[_0x49ac(0x1bb)]().html() || ''
            });
        });
    }
    if (!_0xee75f5[_0x49ac(0x254)]) {
        dbg(_0x49ac(0x247));
        _0x4f2eeb(_0x49ac(0x16f))[_0x49ac(0x1b5)](function (_0x53a56e, _0x40856b) {
            var _0x46bbb5 = fixUrl(_0x4f2eeb(_0x40856b)[_0x49ac(0x234)](_0x49ac(0x20d)), _0x13df51);
            if (!_0x46bbb5) {
                return;
            }
            var _0x3c23ad = _0x46bbb5.toLowerCase();
            var _0x4e2c4a = _0x3c23ad[_0x49ac(0x16d)](_0x49ac(0x181)) !== -0x1 || _0x3c23ad[_0x49ac(0x16d)](_0x49ac(0x17e)) !== -0x1 || _0x3c23ad[_0x49ac(0x16d)](_0x49ac(0x22a)) !== -0x1 || _0x3c23ad[_0x49ac(0x16d)](_0x49ac(0x1e8)) !== -0x1 || _0x3c23ad.indexOf(_0x49ac(0x25d)) !== -0x1 || /\.(mp4|mkv|m3u8)(\?|$)/i[_0x49ac(0x220)](_0x3c23ad);
            if (!_0x4e2c4a) {
                return;
            }
            var _0x1b8a01 = String(_0x4f2eeb(_0x40856b)[_0x49ac(0x214)]("p, div, li").first().text()[_0x49ac(0x180)]() || _0x4f2eeb(_0x40856b).text()[_0x49ac(0x180)]() || _0x49ac(0x1b6) || '')[_0x49ac(0x186)](/\s+/g, " ")[_0x49ac(0x186)](/Download HubDrive/gi, '')[_0x49ac(0x186)](/Download HubCloud/gi, '')[_0x49ac(0x186)](/Download PixelDrain/gi, '')[_0x49ac(0x186)](/Download BuzzServer/gi, '')[_0x49ac(0x186)](/4kHDHub\.Com/gi, '')[_0x49ac(0x186)](/4kHdHub\.com/gi, '')[_0x49ac(0x180)]();
            dbg(_0x49ac(0x1f9), _0x46bbb5);
            _0xee75f5[_0x49ac(0x1b8)]({
                'url': _0x46bbb5,
                'label': _0x1b8a01,
                'fileTitle': String(_0x4f2eeb(_0x40856b).text()[_0x49ac(0x180)]() || '' || '')[_0x49ac(0x186)](/\s+/g, " ")[_0x49ac(0x186)](/Download HubDrive/gi, '')[_0x49ac(0x186)](/Download HubCloud/gi, '')[_0x49ac(0x186)](/Download PixelDrain/gi, '')[_0x49ac(0x186)](/Download BuzzServer/gi, '')[_0x49ac(0x186)](/4kHDHub\.Com/gi, '')[_0x49ac(0x186)](/4kHdHub\.com/gi, '')[_0x49ac(0x180)](),
                'rawHtml': _0x4f2eeb(_0x40856b)[_0x49ac(0x1bb)]()[_0x49ac(0x1ba)]() || ''
            });
        });
    }
    if (!_0xee75f5.length && false) {
        dbg(_0x49ac(0x17d));
        _0x4f2eeb('a[href]')[_0x49ac(0x1b5)](function (_0x3fc80c, _0x4c019b) {
            var _0x3f94d0 = _0x4f2eeb(_0x4c019b)[_0x49ac(0x234)]('href') || '';
            var _0x2a8e2a = _0x4f2eeb(_0x4c019b)[_0x49ac(0x206)]().trim();
            dbg(_0x49ac(0x202), _0x3f94d0, _0x49ac(0x1c3), _0x2a8e2a);
        });
    }
    dbg("[collectMovieLinks] Total links found:", _0xee75f5[_0x49ac(0x254)]);
    return uniqueBy(_0xee75f5, function (_0x4b807a) {
        return String(_0x4b807a[_0x49ac(0x17b)] || '')[_0x49ac(0x212)]();
    });
}
function collectEpisodeLinks(_0x40554d, _0xcc7c94, _0x22c869, _0x1ceb43) {
    var _0x494e45 = Number(_0x22c869);
    var _0x1966e6 = Number(_0x1ceb43);
    var _0x448bbd = 'S' + _0x494e45 + " E" + _0x1966e6;
    var _0x2382f6 = [];
    _0x40554d(_0x49ac(0x188))[_0x49ac(0x1b5)](function (_0x30191e, _0x211390) {
        var _0x48c041 = _0x40554d(_0x211390)[_0x49ac(0x184)](_0x49ac(0x1bc))[_0x49ac(0x1d7)]()[_0x49ac(0x206)]();
        var _0x13bd35 = _0x48c041[_0x49ac(0x17c)](/S(?:eason)?\s*([0-9]+)/i);
        if (!_0x13bd35 || Number(_0x13bd35[0x1]) !== _0x494e45) {
            return;
        }
        _0x40554d(_0x211390)[_0x49ac(0x184)](_0x49ac(0x233)).each(function (_0x406ffe, _0x18f721) {
            var _0x7cd598 = _0x40554d(_0x18f721).text();
            var _0x436f9c = _0x7cd598.match(/Episode-?\s*0*([0-9]+)/i) || _0x7cd598[_0x49ac(0x17c)](/\bE\s*0*([0-9]+)/i);
            if (!_0x436f9c || Number(_0x436f9c[0x1]) !== _0x1966e6) {
                return;
            }
            _0x40554d(_0x18f721)[_0x49ac(0x184)](_0x49ac(0x16f))[_0x49ac(0x1b5)](function (_0x381b0f, _0x2037e8) {
                var _0x442354 = fixUrl(_0x40554d(_0x2037e8).attr(_0x49ac(0x20d)), _0xcc7c94);
                if (!_0x442354) {
                    return;
                }
                _0x2382f6[_0x49ac(0x1b8)]({
                    'url': _0x442354,
                    'label': _0x448bbd,
                    'fileTitle': String(_0x40554d(_0x18f721)[_0x49ac(0x184)](_0x49ac(0x24e))[_0x49ac(0x1d7)]()[_0x49ac(0x206)]().trim() || '' || '')[_0x49ac(0x186)](/\s+/g, " ")[_0x49ac(0x186)](/Download HubDrive/gi, '')[_0x49ac(0x186)](/Download HubCloud/gi, '')[_0x49ac(0x186)](/Download PixelDrain/gi, '')[_0x49ac(0x186)](/Download BuzzServer/gi, '')[_0x49ac(0x186)](/4kHDHub\.Com/gi, '')[_0x49ac(0x186)](/4kHdHub\.com/gi, '')[_0x49ac(0x180)](),
                    'rawHtml': _0x40554d(_0x18f721)[_0x49ac(0x1ba)]() || ''
                });
            });
        });
    });
    if (!_0x2382f6[_0x49ac(0x254)]) {
        _0x40554d('div.episode-download-item')[_0x49ac(0x1b5)](function (_0x541e33, _0x1a2db3) {
            var _0x4510a9 = _0x40554d(_0x1a2db3)[_0x49ac(0x206)]();
            if (!new RegExp(_0x49ac(0x1a9) + _0x1966e6 + "\\b", 'i')[_0x49ac(0x220)](_0x4510a9) && !new RegExp(_0x49ac(0x1f1) + _0x1966e6 + "\\b", 'i').test(_0x4510a9)) {
                return;
            }
            _0x40554d(_0x1a2db3)[_0x49ac(0x184)](_0x49ac(0x16f))[_0x49ac(0x1b5)](function (_0x54efea, _0x467f94) {
                var _0x4fb603 = fixUrl(_0x40554d(_0x467f94)[_0x49ac(0x234)]('href'), _0xcc7c94);
                if (!_0x4fb603) {
                    return;
                }
                _0x2382f6[_0x49ac(0x1b8)]({
                    'url': _0x4fb603,
                    'label': _0x448bbd,
                    'fileTitle': String(_0x40554d(_0x1a2db3).find(_0x49ac(0x24e)).first().text()[_0x49ac(0x180)]() || '' || '')[_0x49ac(0x186)](/\s+/g, " ")[_0x49ac(0x186)](/Download HubDrive/gi, '')[_0x49ac(0x186)](/Download HubCloud/gi, '')[_0x49ac(0x186)](/Download PixelDrain/gi, '')[_0x49ac(0x186)](/Download BuzzServer/gi, '')[_0x49ac(0x186)](/4kHDHub\.Com/gi, '')[_0x49ac(0x186)](/4kHdHub\.com/gi, '')[_0x49ac(0x180)](),
                    'rawHtml': _0x40554d(_0x1a2db3)[_0x49ac(0x1ba)]() || ''
                });
            });
        });
    }
    return uniqueBy(_0x2382f6, function (_0x320284) {
        return String(_0x320284[_0x49ac(0x17b)] || '')[_0x49ac(0x212)]();
    });
}
function resolveHubcdn(_0x3ef1b4, _0x377bc6, _0x1abc28, _0x40e5ea, _0x3ce43d, _0x1298ff) {
    return fetchText(_0x3ef1b4, {
        'headers': {
            'Referer': _0x3ef1b4
        }
    }).then(function (_0x12990d) {
        var _0x2d1730 = '';
        var _0x1a0d67 = _0x12990d[_0x49ac(0x17c)](/r=([A-Za-z0-9+/=]+)/);
        var _0x14ce3e = _0x12990d.match(/reurl\s*=\s*"([^"]+)"/);
        if (_0x1a0d67 && _0x1a0d67[0x1]) {
            _0x2d1730 = _0x1a0d67[0x1];
        } else {
            if (_0x14ce3e && _0x14ce3e[0x1]) {
                _0x2d1730 = _0x14ce3e[0x1][_0x49ac(0x229)](_0x49ac(0x223))[_0x49ac(0x191)]();
            }
        }
        if (!_0x2d1730) {
            return [];
        }
        var _0x395988 = decodeBase64(_0x2d1730);
        if (!_0x395988) {
            return [];
        }
        var _0x17ec71 = _0x395988[_0x49ac(0x229)](_0x49ac(0x1f8))[_0x49ac(0x191)]();
        if (!_0x17ec71 || _0x17ec71 === _0x2d1730) {
            return [];
        }
        return [buildStream(_0x377bc6 + " HUBCDN", _0x17ec71, _0x1abc28, {
            'Referer': _0x3ef1b4
        }, _0x40e5ea, _0x3ce43d, _0x1298ff)];
    })[_0x49ac(0x21b)](function () {
        return [];
    });
}
function resolveHubdrive(_0x3ca4be, _0x2dbd2b, _0x44309f) {
    var _0x166686 = String(_0x3ca4be || '')[_0x49ac(0x212)]();
    if (_0x166686[_0x49ac(0x16d)](_0x49ac(0x24c)) !== -0x1) {
        dbg(_0x49ac(0x215));
        return Promise.resolve([]);
    }
    return fetchText(_0x3ca4be, {
        'headers': {
            'Referer': _0x3ca4be
        }
    })[_0x49ac(0x18d)](function (_0x4b1a00) {
        var _0x30a195 = cheerio[_0x49ac(0x165)](_0x4b1a00);
        var _0x50801a = _0x30a195(_0x49ac(0x1ca))[_0x49ac(0x1d7)]()[_0x49ac(0x206)]()[_0x49ac(0x180)]();
        dbg(_0x49ac(0x218), _0x50801a, _0x49ac(0x168), _0x4b1a00.length);
        if (_0x50801a[_0x49ac(0x16d)]("Sign in - Google") !== -0x1 || _0x50801a[_0x49ac(0x16d)](_0x49ac(0x225)) !== -0x1 || _0x4b1a00[_0x49ac(0x16d)](_0x49ac(0x182)) !== -0x1) {
            dbg("[resolveHubdrive] SKIPPED: Google login wall detected");
            return [];
        }
        if (/hubdrive.*G-Drive File Sharing/i[_0x49ac(0x220)](_0x50801a) && _0x4b1a00.indexOf(_0x49ac(0x203)) !== -0x1 && _0x4b1a00[_0x49ac(0x16d)](_0x49ac(0x1b1)) === -0x1) {
            dbg(_0x49ac(0x1bd));
            return [];
        }
        var _0x4b8dad = [];
        _0x30a195('a[href]')[_0x49ac(0x1b5)](function (_0x444d79, _0x404f54) {
            var _0x59a9f4 = fixUrl(_0x30a195(_0x404f54).attr(_0x49ac(0x20d)), _0x3ca4be);
            var _0x1df3d9 = _0x30a195(_0x404f54)[_0x49ac(0x206)]().trim()[_0x49ac(0x212)]();
            if (!_0x59a9f4) {
                return;
            }
            var _0x2e122c = _0x59a9f4[_0x49ac(0x212)]();
            dbg(_0x49ac(0x195), _0x59a9f4, _0x49ac(0x1c3), _0x1df3d9);
            if (_0x2e122c[_0x49ac(0x16d)](_0x49ac(0x19e)) !== -0x1 || _0x2e122c[_0x49ac(0x16d)](_0x49ac(0x174)) !== -0x1 || _0x2e122c[_0x49ac(0x16d)](_0x49ac(0x181)) !== -0x1 || _0x2e122c.indexOf('workers.dev') !== -0x1 || _0x2e122c.indexOf(_0x49ac(0x1f6)) !== -0x1 || _0x2e122c[_0x49ac(0x16d)]('/download') !== -0x1 || /\.(mkv|mp4|m3u8)(\?|#|$)/i[_0x49ac(0x220)](_0x2e122c) || _0x1df3d9[_0x49ac(0x16d)](_0x49ac(0x1b1)) !== -0x1) {
                if (_0x2e122c.indexOf('/login') !== -0x1 || _0x2e122c[_0x49ac(0x16d)](_0x49ac(0x250)) !== -0x1 || _0x2e122c[_0x49ac(0x16d)](_0x49ac(0x17a)) !== -0x1 || _0x59a9f4 === _0x3ca4be) {
                    return;
                }
                _0x4b8dad[_0x49ac(0x1b8)](_0x59a9f4);
            }
        });
        dbg("[resolveHubdrive] candidates:", _0x4b8dad[_0x49ac(0x254)]);
        if (!_0x4b8dad[_0x49ac(0x254)]) {
            var _0xb711a3 = _0x30a195('form[action]')[_0x49ac(0x234)](_0x49ac(0x1dd)) || _0x30a195(_0x49ac(0x179))[_0x49ac(0x1d7)]()[_0x49ac(0x234)](_0x49ac(0x20d));
            if (_0xb711a3) {
                var _0x41997f = fixUrl(_0xb711a3, _0x3ca4be);
                dbg(_0x49ac(0x1db), _0x41997f);
                return resolveLink(_0x41997f, _0x2dbd2b, _0x3ca4be, _0x44309f);
            }
            return [];
        }
        _0x4b8dad[_0x49ac(0x197)](function (_0x56c86b, _0x4b947c) {
            return hostConfidence(_0x4b947c) - hostConfidence(_0x56c86b);
        });
        var _0x25a893 = _0x4b8dad[0x0];
        dbg(_0x49ac(0x177), _0x25a893);
        if (_0x25a893[_0x49ac(0x212)]()[_0x49ac(0x16d)](_0x49ac(0x17e)) !== -0x1 && _0x25a893 !== _0x3ca4be) {
            return resolveHubdrive(_0x25a893, _0x2dbd2b, _0x44309f);
        }
        return resolveLink(_0x25a893, _0x2dbd2b, _0x3ca4be, _0x44309f);
    })[_0x49ac(0x21b)](function (_0x36961e) {
        dbg(_0x49ac(0x19b), _0x36961e[_0x49ac(0x251)]);
        return [];
    });
}
function resolve10Gbps(_0x1b724b, _0x5ee4b8, _0x5d302e, _0x59ddd4, _0x545924, _0x1d8582, _0x321b5d) {
    function _0x54cca0(_0x17686b, _0x1889d7) {
        if (_0x1889d7 >= 0x6) {
            return Promise[_0x49ac(0x236)]([]);
        }
        return fetchResponse(_0x17686b, {
            'redirect': _0x49ac(0x1ea),
            'headers': {
                'Referer': _0x17686b
            }
        })[_0x49ac(0x18d)](function (_0x3d8aa5) {
            var _0x1032f0 = _0x3d8aa5.url || _0x17686b;
            var _0x1d1ea5 = String(_0x3d8aa5.headers[_0x49ac(0x170)](_0x49ac(0x204)) || '')[_0x49ac(0x212)]();
            var _0xda9116 = _0x3d8aa5[_0x49ac(0x1e4)][_0x49ac(0x170)](_0x49ac(0x1f5)) || '';
            if (_0xda9116) {
                return _0x54cca0(fixUrl(_0xda9116, _0x17686b), _0x1889d7 + 0x1);
            }
            if (isPlayableMediaUrl(_0x1032f0) || _0x1d1ea5[_0x49ac(0x16d)](_0x49ac(0x1b3)) !== -0x1) {
                return [buildStream(_0x5ee4b8 + _0x49ac(0x1c9), _0x1032f0, _0x5d302e, {
                    'Referer': _0x17686b
                }, _0x59ddd4, _0x545924, _0x1d8582, _0x321b5d)];
            }
            return [];
        })[_0x49ac(0x21b)](function () {
            return [];
        });
    }
    return _0x54cca0(_0x1b724b, 0x0);
}
function isTrustedDirectCandidate(_0x4ba23d) {
    var _0x4aabaf = String(_0x4ba23d || '').toLowerCase();
    if (!_0x4aabaf) {
        return false;
    }
    if (_0x4aabaf[_0x49ac(0x16d)](_0x49ac(0x1bf)) !== -0x1) {
        return true;
    }
    if (_0x4aabaf[_0x49ac(0x16d)](_0x49ac(0x1c5)) !== -0x1) {
        return true;
    }
    if (_0x4aabaf[_0x49ac(0x16d)](_0x49ac(0x23e)) !== -0x1) {
        if (_0x4aabaf[_0x49ac(0x16d)]('pixel.') !== -0x1) {
            return false;
        }
        if (_0x4aabaf.indexOf(_0x49ac(0x16c)) !== -0x1) {
            return false;
        }
        return true;
    }
    if (_0x4aabaf.indexOf(_0x49ac(0x198)) !== -0x1) {
        return true;
    }
    if (_0x4aabaf[_0x49ac(0x16d)](_0x49ac(0x1aa)) !== -0x1) {
        return true;
    }
    if (_0x4aabaf[_0x49ac(0x16d)](_0x49ac(0x1f4)) !== -0x1) {
        return true;
    }
    if (_0x4aabaf[_0x49ac(0x16d)]('hub.maverick.lat/') !== -0x1) {
        return true;
    }
    if (_0x4aabaf[_0x49ac(0x16d)](_0x49ac(0x21e)) !== -0x1) {
        return true;
    }
    if (_0x4aabaf[_0x49ac(0x16d)](_0x49ac(0x237)) !== -0x1) {
        return true;
    }
    if (/\.(mkv|mp4|m3u8)(\?|#|$)/[_0x49ac(0x220)](_0x4aabaf)) {
        return true;
    }
    return false;
}
function resolveHubcloud(_0x3b4cf1, _0x340c10, _0x12ef5b, _0x29f991, _0x3f9c7d, _0x31b9fc) {
    var _0x52ddfe = _0x12ef5b ? {
        'Referer': _0x12ef5b
    } : {};
    return fetchText(_0x3b4cf1, {
        'headers': _0x52ddfe
    })[_0x49ac(0x18d)](function (_0x53c9d5) {
        var _0x5e02e8 = cheerio[_0x49ac(0x165)](_0x53c9d5);
        var _0x2e9ce5 = _0x5e02e8('#download').attr(_0x49ac(0x20d)) || _0x5e02e8(_0x49ac(0x183)).attr(_0x49ac(0x20d)) || _0x5e02e8(_0x49ac(0x1e7))[_0x49ac(0x234)](_0x49ac(0x19f));
        var _0x32eaae = fixUrl(_0x2e9ce5, _0x3b4cf1);
        if (!_0x32eaae) {
            return [];
        }
        return fetchText(_0x32eaae, {
            'headers': {
                'Referer': _0x3b4cf1
            }
        })[_0x49ac(0x18d)](function (_0x42ccac) {
            var _0x63d948 = cheerio[_0x49ac(0x165)](_0x42ccac);
            var _0x144600 = _0x63d948(_0x49ac(0x1cd))[_0x49ac(0x206)]()[_0x49ac(0x180)]() || '';
            var _0x2b3cd5 = _0x63d948(_0x49ac(0x172)).text().trim() || '';
            var _0x3e1ddc = cleanTech(_0x2b3cd5);
            var _0x139f3d = detectQualityFromSources([_0x2b3cd5, _0x29f991]);
            var _0x2a8f2d = [];
            var _0x27569b = [];
            _0x63d948(_0x49ac(0x196))[_0x49ac(0x1b5)](function (_0x55135f, _0x130cf9) {
                var _0x3600bc = fixUrl(_0x63d948(_0x130cf9)[_0x49ac(0x234)]('href'), _0x32eaae);
                var _0x1c20a2 = _0x63d948(_0x130cf9).text()[_0x49ac(0x212)]();
                if (!_0x3600bc) {
                    return;
                }
                if (_0x1c20a2[_0x49ac(0x16d)](_0x49ac(0x1b9)) !== -0x1) {
                    _0x2a8f2d[_0x49ac(0x1b8)](fetchResponse(_0x3600bc + '/download', {
                        'headers': {
                            'Referer': _0x3600bc
                        },
                        'redirect': _0x49ac(0x1ea)
                    })[_0x49ac(0x18d)](function (_0x31115f) {
                        var _0x5314c7 = _0x31115f[_0x49ac(0x1e4)][_0x49ac(0x170)](_0x49ac(0x1f5));
                        return _0x5314c7 ? [buildStream(_0x340c10 + " Buzz", _0x5314c7, _0x139f3d, {
                            'Referer': _0x3600bc
                        }, _0x144600, _0x3e1ddc, _0x3f9c7d, _0x31b9fc)] : [];
                    })[_0x49ac(0x21b)](function () {
                        return [];
                    }));
                } else {
                    if (_0x1c20a2.indexOf(_0x49ac(0x246)) !== -0x1 || _0x3600bc[_0x49ac(0x1a4)](_0x49ac(0x230))) {
                        _0x2a8f2d[_0x49ac(0x1b8)](resolve10Gbps(_0x3600bc, _0x340c10, _0x139f3d, _0x144600, _0x3e1ddc, _0x3f9c7d, _0x31b9fc));
                    } else if (isTrustedDirectCandidate(_0x3600bc)) {
                        _0x27569b[_0x49ac(0x1b8)](buildStream(_0x340c10, _0x3600bc, _0x139f3d, {
                            'Referer': _0x32eaae
                        }, _0x144600, _0x3e1ddc, _0x3f9c7d, _0x31b9fc));
                    }
                }
            });
            return Promise[_0x49ac(0x240)](_0x2a8f2d)[_0x49ac(0x18d)](function (_0x1164ae) {
                var _0x41381c = _0x27569b[_0x49ac(0x210)]();
                for (var _0xef1143 = 0x0; _0xef1143 < _0x1164ae[_0x49ac(0x254)]; _0xef1143++) {
                    _0x41381c = _0x41381c[_0x49ac(0x1eb)](_0x1164ae[_0xef1143] || []);
                }
                return _0x41381c;
            });
        });
    })[_0x49ac(0x21b)](function () {
        return [];
    });
}
function resolveLink(_0x18165b, _0x3e1a45, _0x55cd10, _0xf813fe, _0x3ce42d, _0x491bf4) {
    if (!_0x18165b) {
        return Promise[_0x49ac(0x236)]([]);
    }
    var _0x239715 = String(_0x18165b)[_0x49ac(0x212)]();
    if (_0x239715[_0x49ac(0x16d)]('hubcloud') !== -0x1) {
        return resolveHubcloud(_0x18165b, _0x3e1a45, _0x55cd10, _0xf813fe, _0x3ce42d, _0x491bf4);
    }
    if (_0x239715[_0x49ac(0x16d)](_0x49ac(0x22a)) !== -0x1) {
        return resolveHubcdn(_0x18165b, _0x3e1a45, _0xf813fe, '', '', _0x3ce42d, _0x491bf4);
    }
    if (isTrustedDirectCandidate(_0x18165b)) {
        return Promise[_0x49ac(0x236)]([buildStream(_0x3e1a45, _0x18165b, _0xf813fe, {
            'Referer': _0x55cd10
        }, '', '', _0x3ce42d, _0x491bf4)]);
    }
    if (_0x239715[_0x49ac(0x16d)](_0x49ac(0x17e)) !== -0x1) {
        return resolveHubdrive(_0x18165b, _0x3e1a45, _0xf813fe, _0x491bf4);
    }
    return Promise[_0x49ac(0x236)]([]);
}
function extractCandidateQuality(_0x3546fe) {
    return detectQualityFromSources([_0x3546fe[_0x49ac(0x256)] || '', _0x3546fe.label || '', _0x3546fe[_0x49ac(0x1b2)] || '']);
}
function extractLangHint(_0xd9de0f) {
    return [_0xd9de0f[_0x49ac(0x256)] || '', _0xd9de0f[_0x49ac(0x169)] || '', _0xd9de0f[_0x49ac(0x1b2)] || ''][_0x49ac(0x178)](" ");
}
function extractFromPage(_0x3ed54a, _0x2755c9, _0x49b7ab, _0x12ea3b, _0x1fd4e3) {
    return fetchText(_0x3ed54a)[_0x49ac(0x18d)](function (_0x4f4776) {
        var _0x103d2a = cheerio[_0x49ac(0x165)](_0x4f4776);
        var _0x3a8460 = _0x103d2a(_0x49ac(0x1cc))[_0x49ac(0x254)] > 0x0;
        var _0x36de90 = !_0x3a8460;
        var _0x443a18 = _0x2755c9 === _0x49ac(0x193) || _0x36de90 ? collectMovieLinks(_0x103d2a, _0x3ed54a) : collectEpisodeLinks(_0x103d2a, _0x3ed54a, _0x49b7ab, _0x12ea3b);
        if (!_0x443a18.length) {
            return [];
        }
        _0x443a18 = sortLinksByPriority(_0x443a18);
        return Promise[_0x49ac(0x240)](_0x443a18[_0x49ac(0x1f7)](function (_0x4409f3) {
            var _0x5aa0b3 = detectQualityFromSources([_0x4409f3[_0x49ac(0x256)] || '', _0x4409f3.label || '', _0x4409f3[_0x49ac(0x1b2)] || '']);
            var _0xdda1f9 = String(_0x4409f3[_0x49ac(0x256)] || _0x4409f3.label || PROVIDER_NAME || '')[_0x49ac(0x186)](/\s+/g, " ")[_0x49ac(0x186)](/Download HubDrive/gi, '')[_0x49ac(0x186)](/Download HubCloud/gi, '')[_0x49ac(0x186)](/Download PixelDrain/gi, '')[_0x49ac(0x186)](/Download BuzzServer/gi, '')[_0x49ac(0x186)](/4kHDHub\.Com/gi, '')[_0x49ac(0x186)](/4kHdHub\.com/gi, '')[_0x49ac(0x180)]();
            var _0x8b4224 = [_0x4409f3[_0x49ac(0x256)] || '', _0x4409f3[_0x49ac(0x169)] || '', _0x4409f3[_0x49ac(0x1b2)] || ''][_0x49ac(0x178)](" ");
            return resolveLink(_0x4409f3[_0x49ac(0x17b)], _0xdda1f9, _0x3ed54a, _0x5aa0b3, _0x8b4224, _0x1fd4e3)[_0x49ac(0x21b)](function (_0x303a2f) {
                dbg(_0x49ac(0x1c6), _0x4409f3[_0x49ac(0x17b)], '|', _0x303a2f.message || _0x303a2f);
                return [];
            });
        }))[_0x49ac(0x18d)](function (_0x54397d) {
            var _0x14a732 = [];
            for (var _0x16da5f = 0x0; _0x16da5f < _0x54397d.length; _0x16da5f += 0x1) {
                _0x14a732 = _0x14a732[_0x49ac(0x1eb)](_0x54397d[_0x16da5f] || []);
            }
            _0x14a732 = dedupeStreams(_0x14a732);
            _0x14a732[_0x49ac(0x197)](function (_0x5dbc91, _0x457323) {
                return hostConfidence(_0x457323[_0x49ac(0x17b)]) - hostConfidence(_0x5dbc91[_0x49ac(0x17b)]);
            });
            return _0x14a732;
        });
    });
}
function findContentUrl(_0x3ddafc, _0x5190a6) {
    return getTmdbNames(_0x3ddafc, _0x5190a6)[_0x49ac(0x18d)](function (_0x51ecdb) {
        if (!_0x51ecdb[_0x49ac(0x1ca)] && !_0x51ecdb[_0x49ac(0x189)]) {
            return null;
        }
        var _0x531094 = _0x51ecdb[_0x49ac(0x1ca)] + " " + _0x51ecdb.year;
        if (KNOWN_URLS[_0x531094]) {
            dbg(_0x49ac(0x1d0), KNOWN_URLS[_0x531094]);
            return KNOWN_URLS[_0x531094];
        }
        return searchContent(_0x51ecdb.title, _0x5190a6, _0x51ecdb.year)[_0x49ac(0x18d)](function (_0x33de0d) {
            if (_0x33de0d) {
                return _0x33de0d;
            }
            if (_0x51ecdb.original && _0x51ecdb.original !== _0x51ecdb[_0x49ac(0x1ca)]) {
                return searchContent(_0x51ecdb[_0x49ac(0x189)], _0x5190a6, _0x51ecdb[_0x49ac(0x207)])[_0x49ac(0x18d)](function (_0x240fc7) {
                    if (_0x240fc7) {
                        return _0x240fc7;
                    }
                    if (_0x51ecdb.alt) {
                        return searchContent(_0x51ecdb[_0x49ac(0x17f)], _0x5190a6, _0x51ecdb.year);
                    }
                    return null;
                });
            }
            if (_0x51ecdb.alt) {
                return searchContent(_0x51ecdb.alt, _0x5190a6, _0x51ecdb[_0x49ac(0x207)]);
            }
            return null;
        });
    });
}
function getStreams(_0x5a7d77, _0x49ceff, _0x28460c, _0x175ead) {
    return getTmdbNames(_0x5a7d77, _0x49ceff)[_0x49ac(0x18d)](function (_0x4ade4f) {
        var _0xdf8bad = _0x49ceff === 'tv' ? getTmdbEpisodeName(_0x5a7d77, _0x28460c, _0x175ead) : Promise[_0x49ac(0x236)]('');
        return _0xdf8bad.then(function (_0x1e4167) {
            return findContentUrl(_0x5a7d77, _0x49ceff)[_0x49ac(0x18d)](function (_0x403dd0) {
                if (!_0x403dd0) {
                    return [];
                }
                var _0x559e2d = {
                    'title': _0x4ade4f.title || _0x49ac(0x1b6),
                    'year': _0x4ade4f[_0x49ac(0x207)] || '',
                    'season': _0x28460c,
                    'episode': _0x175ead,
                    'episodeTitle': _0x1e4167
                };
                return extractFromPage(_0x403dd0, _0x49ceff, _0x28460c, _0x175ead, _0x559e2d);
            });
        });
    })[_0x49ac(0x21b)](function () {
        return [];
    });
}
module[_0x49ac(0x231)] = {
    'getStreams': getStreams
};