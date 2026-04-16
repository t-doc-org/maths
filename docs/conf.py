# Copyright 2025 Caroline Blank <caro@c-space.org>
# SPDX-License-Identifier: CC-BY-NC-SA-4.0

from tdoc.common.defaults import *

project = "Mathématiques"
author = "Caroline Blank"
license = 'CC-BY-NC-SA-4.0'
language = 'fr'

exclude_patterns = ['_cache/**']
myst_links_external_new_tab = True

html_static_path = ['_cache/_static']
html_css_files = ['site-styles.css']
html_theme_options = {
    'repository_url': 'https://github.com/t-doc-org/maths',
    'show_navbar_depth': 2,
    'show_toc_level': 2,
}

metadata = {
    'points': {
        'text': [" ({0} pt)", " ({0} pts)"],
    },
    'mathjax': {
        'chtml': {'displayAlign': 'left'},
        'svg': {'displayAlign': 'left'},
    },
}

def _srcs(path, repo='informatique'):
    return [
        f'../../{repo}/docs/{path}',
        f'https://github.com/t-doc-org/{repo}/raw/refs/heads/main/docs/{path}',
    ]

cached_files = {
    '_cache/_static/jsxgraph.js': _srcs('_static/jsxgraph.js'),
    '_cache/entete-examen.md': _srcs('_include/entete-examen.md'),
}
