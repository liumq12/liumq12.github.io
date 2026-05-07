<div class="section-block">
  <div class="section-heading">
    <p class="section-kicker">Pipeline</p>
    <h2>Under review</h2>
  </div>

  <div class="publications">
    <ul class="prep-list">
      <li><span class="author-highlight">Liu, M.</span>, Wang, B., Wu, B., Guvercin, S., Zhang, L., Yang, Z., Seyler, C., Platt, J., Barbot, S. A rock-centric framework for earthquake dynamics and seismic hazards.</li>
      <li>Chen, Y., Chen, H*., <span class="author-highlight">Liu, M.*</span>, Gerya, T*., An, K., Lin, X., Yang, H., Shi, X. Grain size reduction-induced ductile weakening controls the evolution of vertical slab tearing.</li>
      <li>Journeau, C., Thomas, A., Abercrombie, R., Hirao, B., <span class="author-highlight">Liu, M.</span>, Kuna, V. OBS Data Mining Reveals Seismic Structure and Dynamics of the oceanic Blanco Transform Fault, Northeast Pacific.</li>
    </ul>
  </div>
</div>

<div class="section-block">
  <div class="section-heading">
    <p class="section-kicker">Selected</p>
    <h2>Selected publications</h2>
  </div>

  <div class="publications">
    <ol class="bibliography">
{% for link in site.data.publications.main %}
{% if link.selected %}
<li>
  <div class="pub-row">
    <div class="col-sm-3 abbr" style="position: relative; padding-right: 15px; padding-left: 15px;">
      {% if link.image %}
      <img src="{{ link.image }}" class="teaser img-fluid z-depth-1 zoomable"
           style="width=100;height=40%; object-fit: cover; cursor: pointer; border-radius: 5px;"
           onclick="openModal('{{ link.image }}')">
      {% else %}
      <div class="teaser teaser-placeholder">
        <span>{{ link.journal_short }}</span>
      </div>
      {% endif %}
      <abbr class="badge">{{ link.journal_short }}</abbr>
    </div>
    <div class="col-sm-9" style="position: relative; padding-right: 15px; padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf }}" target="_blank">{{ link.title }}</a></div>
      <div class="author">{{ link.authors | replace: 'Ming-Qi Liu', '<span class="author-highlight">Ming-Qi Liu</span>' | replace: 'Mingqi Liu', '<span class="author-highlight">Mingqi Liu</span>' | replace: 'Liu, M.-Q.', '<span class="author-highlight">Liu, M.-Q.</span>' | replace: 'Liu M-Q', '<span class="author-highlight">Liu M-Q</span>' | replace: 'Liu, M.', '<span class="author-highlight">Liu, M.</span>' | replace: '刘明启', '<span class="author-highlight">刘明启</span>' }}</div>
      <div class="periodical"><em>{{ link.journal }}</em></div>
    </div>
  </div>
</li>
{% endif %}
{% endfor %}
</ol>
  </div>
</div>

<div class="section-block">
  <div class="section-heading">
    <p class="section-kicker">Full List</p>
    <h2>All publications</h2>
    <p><a href="https://scholar.google.com/citations?user=kEc2UMgAAAAJ&hl=en" target="_blank" rel="noopener">View full Google Scholar profile</a></p>
  </div>

  <div class="publications">
    <ol class="pub-plain-list">
      <li><span class="author-highlight">Liu, M.</span>, Wang B., Guvercin S., Li Z., Wang T., Liu C., Ji L., Babrot S. (2026). Dynamic segmentation of the Sagaing fault. <em>Science</em>. DOI: 10.1126/science.ady3237</li>
      <li><span class="author-highlight">Liu, M.</span>, Gerya, T. V., Li, Z. H., Chen, L., &amp; Connolly, J. A. (2026). Deciphering grain-size reduction as a driver of mid-lithosphere discontinuity formation. <em>Science Advances</em>, 12(17), eaed4229.</li>
      <li><span class="author-highlight">Liu, M.</span>, Barbot, S. (2026). Role of hydrothermal alteration and thermally activated healing on earthquake dynamics along oceanic transform faults. <em>Earth and Planetary Science Letters</em>, 675, 119765.</li>
      <li>Zhang, H., Batbot, S., Yang, Z., <span class="author-highlight">Liu, M.</span>, Zhang, L., Platt, J. (2026). Large megathrust earthquakes in cold mantle wedge corners under lawsonite blueschist facies. <em>Nature Communications</em>, 17, 4007. DOI: 10.1038/s41467-026-70315-4</li>
      <li><span class="author-highlight">Liu, M.</span>, Gerya, T., &amp; Rozel, A. (2025). The effect of brittle-ductile weakening on the formation of faulting patterns at mid-ocean ridges. <em>Tectonics</em>, 44(2), e2024TC008586.</li>
      <li>Chen, Y., Chen, H.*, <span class="author-highlight">Liu, M.*</span>, Gerya, T*. (2023). Vertical tearing of subducting plates controlled by geometry and rheology of oceanic plates. <em>Nature Communications</em>, 14(1), 7931. (Corresponding author).</li>
      <li><span class="author-highlight">Liu, M.</span>, Gerya, T. (2023). Forced subduction initiation near spreading centers: Effects of brittle-ductile damage. <em>Journal of Geophysical Research: Solid Earth</em>, 128(2), e2022JB024701.</li>
      <li>Koulakov, I., Schlindwein, V., <span class="author-highlight">Liu, M.</span>, Gerya, T., Jakovlev, A., Ivanov, A. (2023). Reply to: Increase of P-wave velocity due to melt in the mantle at the Gakkel Ridge. <em>Nature Communications</em>, 14(1), 968.</li>
      <li>Koulakov, I., Schlindwein, V., <span class="author-highlight">Liu, M.</span>, Gerya, T., Jakovlev, A., &amp; Ivanov, A. (2022). Low-degree mantle melting controls the deep seismicity and explosive volcanism of the Gakkel Ridge. <em>Nature Communications</em>, 13(1), 1-10.</li>
      <li><span class="author-highlight">Liu, M.</span>, Gerya, T., Rozel, A. B. (2022). Self-organization of magma supply controls crustal thickness variation and tectonic pattern along melt-poor mid-ocean ridges. <em>Earth and Planetary Science Letters</em>, 584, 117482.</li>
      <li>Li, Z. H., Cui, Q. H., Zhong, X. Y., <span class="author-highlight">Liu, M. Q.</span>, Wang, Y., &amp; Huangfu, P. P. (2021). Numerical modeling of continental dynamics: Questions, progress and perspectives. <em>Acta Geol Sin</em>, 95, 238-258. <em>(In Chinese).</em></li>
      <li>Li, Z. H., Yang, S. T., <span class="author-highlight">Liu, M. Q.</span>, &amp; Huangfu, P. (2019). Aqueous fluid activity and its effects in the subduction zones: A systematic numerical modeling study. <em>Earth Science</em>, 44(12), 3984-3992. <em>(In Chinese).</em></li>
      <li><span class="author-highlight">Liu M.</span>, Li Z. (2018). Dynamics of thinning and destruction of the continental cratonic lithosphere: Numerical modeling. <em>Science China Earth Sciences</em>, 61, 823-852. <em>(In both Chinese and English).</em> (<span class="author-highlight">Cover Article</span>)</li>
      <li>Shi, Y., Wei, D., Li, Z.-H., <span class="author-highlight">Liu, M.-Q.</span>, <span class="author-highlight">Liu, M.</span> (2018). Subduction Mode Selection During Slab and Mantle Transition Zone Interaction: Numerical Modeling. <em>Pure Appl. Geophys.</em> 175, 529-548.</li>
      <li><span class="author-highlight">Liu M-Q</span>, Li Z-H, Yang S-H. (2017). Diapir versus along-channel ascent of crustal material during plate convergence: Constrained by the thermal structure of subduction zones. <em>Journal of Asian Earth Sciences</em>, 145A: 16-36.</li>
      <li>Li Z-H, <span class="author-highlight">Liu M-Q</span>, Gerya T. (2015). Material transportation and fluid-melt activity in the subduction channel: Numerical modeling. <em>Science China Earth Sciences</em>, 58(8): 1251-1268. <em>(In both Chinese and English).</em></li>
    </ol>
  </div>
</div>
