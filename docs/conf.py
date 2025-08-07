# Copyright 2025 Caroline Blank <caro@c-space.org>
# SPDX-License-Identifier: CC-BY-NC-SA-4.0

from tdoc.common.defaults import *

project = "Mathématiques"
copyright = "%Y Caroline Blank"
license = 'CC-BY-NC-SA-4.0'
language = 'fr'

myst_links_external_new_tab = True

html_theme_options = {
    # 'repository_url': 'https://github.com/t-doc-org/maths',
    'show_navbar_depth': 2,
    'show_toc_level': 2,
}

tdoc_solutions = 'dynamic'

mathjax3_config['chtml'] = {'displayAlign': 'left'}
