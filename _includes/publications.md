<div class="section-block">
  <div class="section-heading">
    <p class="section-kicker">Pipeline</p>
    <h2>Under review</h2>
  </div>

  <div class="publications">
    <ul class="prep-list">
      <li>Liu, M., Wang B., Guvercin S., Li Z., Wang T., Liu C., Ji L., Babrot S. (2026). Dynamic segmentation of the Sagaing fault. In press.</li>
      <li>Liu, M., Wang, B., Wu, B., Guvercin, S., Zhang, L., Yang, Z., Seyler, C., Platt, J., Barbot, S. A rock-centric framework for earthquake dynamics and seismic hazards.</li>
      <li>Chen, Y., Chen, H*., Liu, M*., Gerya, T*., An, K., Lin, X., Yang, H., Shi, X. Grain size reduction-induced ductile weakening controls the evolution of vertical slab tearing.</li>
      <li>Journeau, C., Thomas, A., Abercrombie, R., Hirao, B., Liu, M., Kuna, V. OBS Data Mining Reveals Seismic Structure and Dynamics of the oceanic Blanco Transform Fault, Northeast Pacific.</li>
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
      <div class="author">{{ link.authors }}</div>
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
      <li>Liu, M., Gerya. T., Li. Z-H., Chen, L., Connolly, J. (2026). Deciphering grain-size reduction as a driver of mid-lithosphere discontinuity formation. <em>Science Advances</em>. DOI: 10.1126/sciadv.aed4229</li>
      <li>Liu, M., Barbot, S. (2026). Role of hydrothermal alteration and thermally activated healing on earthquake dynamics along oceanic transform faults. <em>Earth and Planetary Science Letters</em>, 675, 119765.</li>
      <li>Zhang, H., Batbot, S., Yang, Z., Liu, M., Zhang, L., Platt, J. (2026). Large megathrust earthquakes in cold mantle wedge corners under lawsonite blueschist facies. <em>Nature Communications</em>. DOI: 10.1038/s41467-026-70315-4</li>
      <li>Liu, M., Gerya, T., &amp; Rozel, A. (2025). The effect of brittle-ductile weakening on the formation of faulting patterns at mid-ocean ridges. <em>Tectonics</em>, 44(2), e2024TC008586.</li>
      <li>Chen, Y., Chen, H.*, Liu, M.*, Gerya, T*. (2023). Vertical tearing of subducting plates controlled by geometry and rheology of oceanic plates. <em>Nature Communications</em>, 14(1), 7931. (Corresponding author).</li>
      <li>Liu, M., Gerya, T. (2023). Forced subduction initiation near spreading centers: Effects of brittle-ductile damage. <em>Journal of Geophysical Research: Solid Earth</em>, 128(2), e2022JB024701.</li>
      <li>Koulakov, I., Schlindwein, V., Liu, M., Gerya, T., Jakovlev, A., Ivanov, A. (2023). Reply to: Increase of P-wave velocity due to melt in the mantle at the Gakkel Ridge. <em>Nature Communications</em>, 14(1), 968.</li>
      <li>Koulakov, I., Schlindwein, V., Liu, M., Gerya, T., Jakovlev, A., &amp; Ivanov, A. (2022). Low-degree mantle melting controls the deep seismicity and explosive volcanism of the Gakkel Ridge. <em>Nature Communications</em>, 13(1), 1-10.</li>
      <li>Liu, M., Gerya, T., Rozel, A. B. (2022). Self-organization of magma supply controls crustal thickness variation and tectonic pattern along melt-poor mid-ocean ridges. <em>Earth and Planetary Science Letters</em>, 584, 117482.</li>
      <li>李忠海; 崔起华; 钟辛易; 刘明启; 王杨; 皇甫鹏鹏. (2021). 大陆动力学数值模拟:问题、进展与展望, <em>地质学报</em>, 95(1): 238-258.</li>
      <li>李忠海; 杨舒婷; 刘明启; 皇甫鹏鹏. (2019). 板块俯冲带水流体活动及其效应的定量化数值模拟, <em>地球科学</em>, 44(12): 3984-3992.</li>
      <li>Liu M., Li Z. (2018). Dynamics of thinning and destruction of the continental cratonic lithosphere: Numerical modeling. <em>Science China Earth Sciences</em>, 61, 823-852. (Cover Article)</li>
      <li>刘明启; 李忠海. (2018). 克拉通岩石圈减薄与破坏机制的动力学数值模拟, <em>中国科学. 地球科学</em>, 48(7): 844-877.</li>
      <li>Shi, Y., Wei, D., Li, Z.-H., Liu, M.-Q., Liu, M. (2018). Subduction Mode Selection During Slab and Mantle Transition Zone Interaction: Numerical Modeling. <em>Pure Appl. Geophys.</em> 175, 529-548.</li>
      <li>Liu M-Q, Li Z-H, Yang S-H. (2017). Diapir versus along-channel ascent of crustal material during plate convergence: Constrained by the thermal structure of subduction zones. <em>Journal of Asian Earth Sciences</em>, 145A: 16-36.</li>
      <li>Li Z-H, Liu M-Q, Gerya T. (2015). Material transportation and fluid-melt activity in the subduction channel: Numerical modeling. <em>Science China Earth Sciences</em>, 58(8): 1251-1268.</li>
      <li>李忠海; 刘明启. (2015). 俯冲隧道中物质运移和流体-熔体活动的动力学数值模拟, <em>中国科学. 地球科学</em>, 45(7): 881-899.</li>
    </ol>
  </div>
</div>
