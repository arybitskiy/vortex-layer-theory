// ============================================================================
// VORTEX LAYER THEORY (VLT) - UNIVERSAL PARTICLE CONSTRUCTOR FRAMEWORK
// ============================================================================

// ----------------------------------------------------------------------------
// 1. UNIVERSAL CONSTANTS & NIST REFERENCE DATA
// ----------------------------------------------------------------------------
const CONST = {
  M_E: 0.51099895, // Base Electron Mass (MeV) - The fundamental droplet
  ALPHA: 0.0072973525693, // Fine-Structure Constant (Friction of Layer +4)
  PI: Math.PI,
};

// NIST CODATA 2018/2022 references for Sigma verification
const NIST = {
  PROTON: { mass: 938.27208943, sigma: 0.00000029 },
  PION_CH: { mass: 139.57039, sigma: 0.00018 },
  NEUTRON: { mass: 939.56542052, sigma: 0.00000054 },
  HIGGS: { mass: 125110.0, sigma: 110.0 }, // 125.11 GeV in MeV
  UP_QUARK: { mass: 2.16, sigma: 0.35 },
  DOWN_QUARK: { mass: 4.67, sigma: 0.35 },
  CHARM_QUARK: { mass: 1270.0, sigma: 20.0 },
  STRANGE_QUARK: { mass: 93.4, sigma: 5.0 },
  BOTTOM_QUARK: { mass: 4180.0, sigma: 30.0 },
  TOP_QUARK: { mass: 172690.0, sigma: 300.0 },
  PHOTON: { mass: 0.0, sigma: 1e-24 },
  GLUON: { mass: 0.0, sigma: 1e-24 },
  MUON: { mass: 105.65837, sigma: 0.00002 },
  TAU: { mass: 1776.86, sigma: 0.12 },
  Z_BOSON: { mass: 91187.6, sigma: 2.1 },
  W_BOSON: { mass: 80377.0, sigma: 12.0 },
  NEUTRINO_E: { mass: 0, sigma: 1 },
  NEUTRINO_MU: { mass: 0, sigma: 1 },
  NEUTRINO_TAU: { mass: 0, sigma: 1 },
  DARK_MATTER: { mass: 0, sigma: 1 },
  GRAVITON: { mass: 0, sigma: 1 },
};

// ----------------------------------------------------------------------------
// 2. FRAMEWORK TYPES & INTERFACES
// ----------------------------------------------------------------------------
type TopologicalOperation = {
  code: string;
  description: string;
  // Takes the current accumulated mass, returns the NEW accumulated mass
  apply: (currentMass: number, baseElectronMass: number) => number;
};

type ParticleRecipe = TopologicalOperation[];

// ----------------------------------------------------------------------------
// 3. TOPOLOGICAL OPERATORS (THE LEGO BLOCKS OF THE UNIVERSE)
// ----------------------------------------------------------------------------

// --- HADRONIC CORE OPERATORS ---
const OP_3_ORTHOGONAL_QUARKS: TopologicalOperation = {
  code: 'ADD_3_QUARKS_5D',
  description:
    'Assembles 3 orthogonal constituent quarks (X, Y, Z axes). A 5D vortex volume is 2*Pi^5. Three non-interfering axes sum to 6*Pi^5.',
  apply: (mass, base) => mass + base * (6 * Math.pow(CONST.PI, 5)),
};

const OP_QUARK_ANTIQUARK_COLLAPSE: TopologicalOperation = {
  code: 'CORE_DESTRUCTIVE_COLLAPSE',
  description:
    'Head-on collision of matter (+1) & antimatter (-1). Universal Koide projection (2/3) squared causes destructive interference. Volume: 8/9*Pi^5.',
  apply: (mass, base) => mass + base * ((8 / 9) * Math.pow(CONST.PI, 5)),
};

// --- VACUUM DRAG (QUANTUM FRICTION) OPERATORS ---
const OP_VACUUM_DRAG_3_AXIS: TopologicalOperation = {
  code: 'DRAG_3_ORTHOGONAL_PHASES',
  description:
    '1st-order vacuum polarization. 3 orthogonal axes frictioning against EM Layer (+4) with a Pi/2 phase shift. Adds 1.5*Pi*Alpha.',
  apply: (mass, base) => mass + base * (1.5 * CONST.PI * CONST.ALPHA),
};

const OP_VACUUM_DRAG_10D_SLICE: TopologicalOperation = {
  code: 'DRAG_10D_SPATIAL_SLICE',
  description:
    '2nd-order vacuum correction. Projecting a 10D ocean slice into 3D spatial dimensions. Adds (10/3)*Alpha^2.',
  apply: (mass, base) => mass + base * ((10 / 3) * Math.pow(CONST.ALPHA, 2)),
};

const OP_DIRAC_16_TENSOR_DRAG: TopologicalOperation = {
  code: 'DRAG_16_TENSOR_DIRAC',
  description:
    'Absolute friction of a Meson. Full overlap of matter and antimatter activates all 16 components of the Dirac matrix. Adds 16*Alpha.',
  apply: (mass, base) => mass + base * (16 * CONST.ALPHA),
};

// --- CHARGE AND BINDING OPERATORS ---
const OP_ADD_TOPOLOGICAL_CHARGE: TopologicalOperation = {
  code: 'ADD_LAYER_2_CHARGE',
  description:
    'Adds an intact Layer +2 vortex (Electron/Positron) to provide electrical charge to the collapsed neutral core. Adds 1.0 m_e.',
  apply: (mass, base) => mass + base * 1.0,
};

const OP_BINDING_ENERGY_LAYER_4: TopologicalOperation = {
  code: 'SUBTRACT_EM_BINDING_L4',
  description:
    'Electromagnetic binding energy coupling strictly to Layer +4. Topological projection requires 1/4 factor. Subtracts (1/4)*Alpha.',
  apply: (mass, base) => mass - base * (0.25 * CONST.ALPHA),
};

// --- CONFINEMENT TRAP OPERATORS (NEUTRON) ---
const OP_TRAPPED_ELECTRON_3D: TopologicalOperation = {
  code: 'TRAP_ELECTRON_3D',
  description:
    'Electron trapped inside a proton. Base mass (1.0) + Kinetic tension of 3 spatial degrees of freedom (1.5). Adds 2.5 m_e.',
  apply: (mass, base) => mass + base * 2.5,
};

const OP_SPHERICAL_SWELLING_PRESSURE: TopologicalOperation = {
  code: 'TRAP_VOLUME_PRESSURE',
  description:
    'Hydrodynamic swelling pressure of the trapped electron pushing against the 3D spherical boundary (4/3*Pi) facing EM vacuum friction (Alpha).',
  apply: (mass, base) => mass + base * ((4 / 3) * CONST.PI * CONST.ALPHA),
};

// --- DIMENSIONAL UNPROJECTION (HIGGS) ---
const OP_UNPROJECT_3D_TO_10D: TopologicalOperation = {
  code: 'UNPROJECT_3D_TO_10D',
  description:
    'Unfolding the 3D compressed sphere (4/3) into the full 10-dimensional space of Layer 0 (10^2 = 100). Multiplier: 400/3.',
  apply: (mass, base) => mass * (400 / 3),
};

const OP_ADD_BASE_ANTINEUTRINO: TopologicalOperation = {
  code: 'ADD_BASE_ANTINEUTRINO',
  description:
    'Calculates the exact base mass of the Antineutrino (Layer -3) by unprojecting the Gaussian vortex from the Electron (Layer +2) and Higgs (Layer 0).',
  apply: (mass, base) => {
    // 1. Let’s assemble an ideal proton
    const protonVol =
      6 * Math.pow(Math.PI, 5) + 1.5 * Math.PI * CONST.ALPHA + (10 / 3) * Math.pow(CONST.ALPHA, 2);
    const mProton = base * protonVol;
    // 2. Unfold the Higgs boson into 10 dimensions
    const mHiggs = mProton * (400 / 3);
    // 3. Calculating the width of a Gaussian vortex (sigma^2)
    const sigmaSq = -2 / Math.log(base / mHiggs);
    // 4. Projecting onto Layer 3 (or -3; squaring removes the minus)
    const mNeutrinoBase = mHiggs * Math.exp(-9 / (2 * sigmaSq));

    console.log(
      `   [DEBUG] Computed Base Antineutrino Mass: ${(mNeutrinoBase * 1000000).toFixed(5)} eV`,
    );

    // We add the pure mass of an antineutrino to our neutron
    return mass + mNeutrinoBase;
  },
};

const OP_NEUTRINO_WEAK_TENSION: TopologicalOperation = {
  code: 'TRAP_NEUTRINO_WEAK_TENSION',
  description:
    'Kinetic tension of the neutral Antineutrino. It is confined in the exact same 3D trap geometry (2.5) but interacts via 2nd-order weak coupling (Alpha^2) across a rotational phase (Pi). Adds 2.5 * Pi * Alpha^2.',
  apply: (mass, base) => mass + base * (2.5 * Math.PI * Math.pow(CONST.ALPHA, 2)),
};

const OP_BASE_VORTEX_THROAT: TopologicalOperation = {
  code: 'BASE_1D_VORTEX_THROAT',
  description:
    'The naked, unexpanded throat of a vortex crossing into Layer +1. Pure 1D circular circumference. Adds 2*Pi m_e.',
  apply: (mass, base) => mass + base * (2 * CONST.PI || 2 * Math.PI),
};

const OP_KOIDE_PROJECTION_UP: TopologicalOperation = {
  code: 'PROJECTION_KOIDE_2_3',
  description:
    'Applies the universal Koide spatial diagonal projection (2/3) for the positive (+2/3) charge axis. This compresses the throat into a 3D spherical volume coefficient (4/3*Pi).',
  apply: (mass, base) => mass * (2 / 3),
};

const OP_INVERSE_PROJECTION_DOWN: TopologicalOperation = {
  code: 'PROJECTION_INVERSE_3_2',
  description:
    'Applies the orthogonal inverse projection (3/2) required for the negative (-1/3) axis balance. This expands the throat to 3*Pi.',
  apply: (mass, base) => mass * 1.5,
};

const OP_FULL_5D_VORTEX: TopologicalOperation = {
  code: 'FULL_5D_VORTEX_VOLUME',
  description: 'The fully expanded 5-dimensional vortex volume in the Ocean. Adds 2*Pi^5.',
  apply: (mass, base) => mass + base * (2 * Math.pow(CONST.PI, 5)),
};

const OP_2D_QUADRANT_SWEEP: TopologicalOperation = {
  code: '2D_QUADRANT_SWEEP',
  description:
    'Rotation along the 2D Y-axis sweeps the vortex through 4 geometric quadrants. Multiplies volume by 4.',
  apply: (mass, base) => mass * 4,
};

const OP_EM_BOUNDARY_INVERSE: TopologicalOperation = {
  code: 'EM_BOUNDARY_INVERSE_FRICTION',
  description:
    "The 'Strangeness' mass generation. Mass derived purely from the extreme boundary friction of the EM Layer. Multiplies by Alpha^-1 (137.036).",
  apply: (mass, base) => mass + base * (1 / CONST.ALPHA),
};

const OP_2D_AXIS_MULTIPLIER: TopologicalOperation = {
  code: '2D_AXIS_MULTIPLIER',
  description:
    'Multiplies by 2 to account for the 2-dimensional planar nature of Generation 2 (Y-axis).',
  apply: (mass, base) => mass * 2,
};

const OP_KOIDE_PROJECTION: TopologicalOperation = {
  code: 'UNIVERSAL_KOIDE_PROJECTION',
  description:
    'Applies the Universal Koide 3D spatial diagonal projection (2/3) to collapse the geometry into observable space.',
  apply: (mass, base) => mass * (2 / 3),
};

const OP_3D_10_DIMENSIONAL_EXPANSION: TopologicalOperation = {
  code: '3D_10_DIMENSIONAL_EXPANSION',
  description:
    'The Z-axis fully expands the 5D constituent core into the Ocean. Applies the 3D spherical volume (4/3) across 10 spatial dimensions. Multiplies by 40/3.',
  apply: (mass, base) => mass * (40 / 3),
};

const OP_18_POLE_COLOR_INTERACTION: TopologicalOperation = {
  code: '18_POLE_COLOR_INTERACTION',
  description:
    'Absolute 3D limit of a vortex. 3 spatial axes * 2 poles * 3 quantum colors = 18 degrees of boundary interaction. Adds 18 m_e.',
  apply: (mass, base) => mass + base * 18,
};

const OP_SECOND_ORDER_EM_IMPEDANCE: TopologicalOperation = {
  code: 'SECOND_ORDER_EM_IMPEDANCE',
  description:
    'Extreme 2nd-order vacuum resistance. The Z-axis vortex encounters squared boundary friction. Multiplies by Alpha^-2.',
  apply: (mass, base) => mass * Math.pow(1 / CONST.ALPHA, 2),
};

const OP_LAYER_4_TRANSVERSE_WAVE: TopologicalOperation = {
  code: 'LAYER_4_TRANSVERSE_WAVE',
  description:
    'A purely transverse hydrodynamic ripple propagating entirely within Layer +4. Lacking any vertical anchor to Layer 0 (the Higgs symmetry plane), its 3D geometric cross-section is entirely eliminated.',
  apply: (mass, base) => 0.0, // The mass is multiplied by zero because there is no projection
};

const OP_FLUX_TUBE_CONFINEMENT: TopologicalOperation = {
  code: 'INTER_VORTEX_FLUX_TUBE',
  description:
    'A flux tube representing the sheer hydrodynamic tension connecting Layer +1 vortices (Quarks). It exists purely as lateral pressure with no independent vertical anchor to Layer 0.',
  apply: (mass, base) => 0.0, // Horizontal flow has no rest mass
};

const OP_3D_ROTATION_Y_AXIS: TopologicalOperation = {
  code: '3D_PHASE_ROTATION_Y_AXIS',
  description:
    'Rotates the topological vector by -120 degrees (-2*Pi/3) into the Y-axis. The vortex phase shift is strictly 2/9 radians (Koide projection 2/3 divided by 3 axes). Generates the Muon.',
  apply: (mass, base) => {
    const phaseE = 2 / 9 + (2 * CONST.PI) / 3;
    const scaleM0 = base / Math.pow(1 + Math.SQRT2 * Math.cos(phaseE), 2);

    const phaseMu = 2 / 9 - (2 * CONST.PI) / 3;
    return scaleM0 * Math.pow(1 + Math.SQRT2 * Math.cos(phaseMu), 2);
  },
};

const OP_3D_ROTATION_Z_AXIS: TopologicalOperation = {
  code: '3D_PHASE_ROTATION_Z_AXIS',
  description:
    'Rotates the topological vector into the Z-axis (0 degree rotation relative to the 2/9 phase shift). Fully expands the vector into 3D volume. Generates the Tau.',
  apply: (mass, base) => {
    const phaseE = 2 / 9 + (2 * CONST.PI) / 3;
    const scaleM0 = base / Math.pow(1 + Math.SQRT2 * Math.cos(phaseE), 2);

    const phaseTau = 2 / 9; // Z-axis is n=0
    return scaleM0 * Math.pow(1 + Math.SQRT2 * Math.cos(phaseTau), 2);
  },
};

const OP_PHOTON_LOOP_CORRECTION: TopologicalOperation = {
  code: 'PHOTON_LOOP_3D_EMISSION',
  description:
    'Derives the exact QED self-energy correction from Layer +4 (Photon). The Schwinger loop factor (Alpha/2Pi) is modulated by the photon emitting and reabsorbing through a 3D spherical boundary (4/3 squared = 16/9).',
  apply: (mass, base) => {
    // Фотонная петля: (Alpha / 2*Pi) * (16 / 9)
    const photonLoopFactor = (CONST.ALPHA / (2 * CONST.PI)) * (16 / 9);
    const correction = base * photonLoopFactor;

    console.log(`   [DEBUG] Calculated Photon Loop Drag: - ${correction.toFixed(6)} MeV`);
    return mass - correction;
  },
};

const OP_3D_PHASE_ROTATION_Y_AXIS: TopologicalOperation = {
  code: '3D_PHASE_ROTATION_Y_AXIS',
  description:
    'Rotates the topological vector by -120 degrees (-2*Pi/3). The phase shift is 2/9 radians. Generates the bare Muon mass.',
  apply: (mass, base) => {
    const phaseE = 2 / 9 + (2 * CONST.PI) / 3;
    const scaleM0 = base / Math.pow(1 + Math.SQRT2 * Math.cos(phaseE), 2);

    const phaseMu = 2 / 9 - (2 * CONST.PI) / 3;
    return scaleM0 * Math.pow(1 + Math.SQRT2 * Math.cos(phaseMu), 2);
  },
};

const OP_ELECTROWEAK_10D_COUPLING: TopologicalOperation = {
  code: 'ELECTROWEAK_10D_COUPLING',
  description:
    'Bridges Layer 0 (Higgs) to Layer +4 (EM). Applies EM friction (Alpha) across the fully unprojected 10-dimensional space (10^2 = 100). Multiplies by 100*Alpha.',
  apply: (mass, base) => mass * (100 * CONST.ALPHA),
};

const OP_MUON_PHASE_TWIST_BINDING: TopologicalOperation = {
  code: 'MUON_PHASE_TWIST_BINDING',
  description:
    'The Neutral Weak Current operates strictly at the Koide phase (2/9). Twisting the Higgs structure into this phase costs binding energy exactly equal to the pure 3D phase rotator (the Muon). Subtracts the bare Muon mass.',
  apply: (mass, base) => {
    // Dynamically calculating ideal Muon (Koide)
    const phaseE = 2 / 9 + (2 * CONST.PI) / 3;
    const scaleM0 = base / Math.pow(1 + Math.SQRT2 * Math.cos(phaseE), 2);
    const phaseMu = 2 / 9 - (2 * CONST.PI) / 3;
    const bareMuon = scaleM0 * Math.pow(1 + Math.SQRT2 * Math.cos(phaseMu), 2);

    return mass - bareMuon; // Вычитаем энергию связи
  },
};

const OP_WEINBERG_KOIDE_PROJECTION: TopologicalOperation = {
  code: 'WEINBERG_KOIDE_PROJECTION',
  description:
    'The W-Boson mass derivation. The Standard Model Weinberg angle (sin^2 = ~0.222) is revealed to be exactly the Koide Phase (2/9). Therefore cos(theta) = sqrt(7/9). Multiplies Z-mass by sqrt(7/9).',
  apply: (mass, base) => mass * Math.sqrt(7 / 9),
};

const OP_LAYER_3_GAUSSIAN_SHIFT: TopologicalOperation = {
  code: 'LAYER_3_GAUSSIAN_SHIFT',
  description:
    'Projects the Layer 0 (Higgs) and Layer +2 (Electron) geometry to Layer +3 (Neutrino) using the 11D Gaussian ocean distribution.',
  apply: (mass, base) => {
    // Воссоздаем идеальный протон и хиггс
    const protonVol =
      6 * Math.pow(Math.PI, 5) + 1.5 * Math.PI * CONST.ALPHA + (10 / 3) * Math.pow(CONST.ALPHA, 2);
    const mProton = base * protonVol;
    const mHiggs = mProton * (400 / 3);

    // Вычисляем ширину Океана (Sigma Squared)
    const sigmaSq = -2 / Math.log(base / mHiggs);

    // Сдвиг на Слой 3 (L=3 -> L^2 = 9)
    return mHiggs * Math.exp(-9 / (2 * sigmaSq));
  },
};

const OP_KOIDE_MUON_SCALING: TopologicalOperation = {
  code: 'KOIDE_MUON_AXIAL_SCALING',
  description:
    'Applies the Koide rotation matrix (-120 deg, 2/9 phase) to the Layer 3 slice. Scales identically to the Layer 2 Muon/Electron ratio.',
  apply: (mass, base) => {
    const phaseE = 2 / 9 + (2 * CONST.PI) / 3;
    const scaleM0 = base / Math.pow(1 + Math.SQRT2 * Math.cos(phaseE), 2);
    const phaseMu = 2 / 9 - (2 * CONST.PI) / 3;
    const idealMuon = scaleM0 * Math.pow(1 + Math.SQRT2 * Math.cos(phaseMu), 2);

    return mass * (idealMuon / base);
  },
};

const OP_KOIDE_TAU_SCALING: TopologicalOperation = {
  code: 'KOIDE_TAU_AXIAL_SCALING',
  description:
    'Applies the Koide Z-axis rotation (0 deg, 2/9 phase) to the Layer 3 slice. Scales identically to the Layer 2 Tau/Electron ratio.',
  apply: (mass, base) => {
    const phaseE = 2 / 9 + (2 * CONST.PI) / 3;
    const scaleM0 = base / Math.pow(1 + Math.SQRT2 * Math.cos(phaseE), 2);
    const idealTau = scaleM0 * Math.pow(1 + Math.SQRT2 * Math.cos(2 / 9), 2);

    return mass * (idealTau / base);
  },
};

const OP_LAYER_5_GAUSSIAN_SHIFT: TopologicalOperation = {
  code: 'LAYER_5_GAUSSIAN_SHIFT',
  description:
    'Deep Ocean Dark Matter. Projects the geometric vortex down to Layer 5 using the 11D Gaussian distribution. L^2 = 25.',
  apply: (mass, base) => {
    const protonVol =
      6 * Math.pow(Math.PI, 5) + 1.5 * Math.PI * CONST.ALPHA + (10 / 3) * Math.pow(CONST.ALPHA, 2);
    const mProton = base * protonVol;
    const mHiggs = mProton * (400 / 3);
    const sigmaSq = -2 / Math.log(base / mHiggs);

    // Сдвиг на Слой 5 (L=5 -> L^2 = 25)
    return mHiggs * Math.exp(-25 / (2 * sigmaSq));
  },
};

const OP_LAYER_6_GAUSSIAN_SHIFT: TopologicalOperation = {
  code: 'LAYER_6_GAUSSIAN_SHIFT',
  description:
    'The Absolute Abyss (Graviton). Projects the geometric vortex down to the absolute boundary at Layer 6. L^2 = 36.',
  apply: (mass, base) => {
    const protonVol =
      6 * Math.pow(Math.PI, 5) + 1.5 * Math.PI * CONST.ALPHA + (10 / 3) * Math.pow(CONST.ALPHA, 2);
    const mProton = base * protonVol;
    const mHiggs = mProton * (400 / 3);
    const sigmaSq = -2 / Math.log(base / mHiggs);

    // Сдвиг на Слой 6 (L=6 -> L^2 = 36)
    return mHiggs * Math.exp(-36 / (2 * sigmaSq));
  },
};

// ----------------------------------------------------------------------------
// 4. PARTICLE RECIPES
// ----------------------------------------------------------------------------

const RECIPE_PROTON: ParticleRecipe = [
  OP_3_ORTHOGONAL_QUARKS,
  OP_VACUUM_DRAG_3_AXIS,
  OP_VACUUM_DRAG_10D_SLICE,
];

const RECIPE_PION_CHARGED: ParticleRecipe = [
  OP_QUARK_ANTIQUARK_COLLAPSE,
  OP_ADD_TOPOLOGICAL_CHARGE,
  OP_DIRAC_16_TENSOR_DRAG,
  OP_BINDING_ENERGY_LAYER_4,
];

const RECIPE_NEUTRON: ParticleRecipe = [
  ...RECIPE_PROTON, // Neutron is built ON TOP of the proton
  OP_TRAPPED_ELECTRON_3D,
  OP_SPHERICAL_SWELLING_PRESSURE,
  OP_ADD_BASE_ANTINEUTRINO,
  OP_NEUTRINO_WEAK_TENSION,
];

const RECIPE_HIGGS: ParticleRecipe = [
  ...RECIPE_PROTON, // Higgs is the unprojected Proton
  OP_UNPROJECT_3D_TO_10D,
];

const RECIPE_UP_QUARK: ParticleRecipe = [OP_BASE_VORTEX_THROAT, OP_KOIDE_PROJECTION_UP];

const RECIPE_DOWN_QUARK: ParticleRecipe = [OP_BASE_VORTEX_THROAT, OP_INVERSE_PROJECTION_DOWN];

const RECIPE_CHARM_QUARK: ParticleRecipe = [OP_FULL_5D_VORTEX, OP_2D_QUADRANT_SWEEP];

const RECIPE_STRANGE_QUARK: ParticleRecipe = [
  OP_EM_BOUNDARY_INVERSE,
  OP_2D_AXIS_MULTIPLIER,
  OP_KOIDE_PROJECTION,
];

const RECIPE_BOTTOM_QUARK: ParticleRecipe = [OP_FULL_5D_VORTEX, OP_3D_10_DIMENSIONAL_EXPANSION];

const RECIPE_TOP_QUARK: ParticleRecipe = [
  OP_18_POLE_COLOR_INTERACTION,
  OP_SECOND_ORDER_EM_IMPEDANCE,
];

const RECIPE_PHOTON: ParticleRecipe = [OP_LAYER_4_TRANSVERSE_WAVE];

const RECIPE_GLUON: ParticleRecipe = [OP_FLUX_TUBE_CONFINEMENT];

const RECIPE_MUON: ParticleRecipe = [OP_3D_PHASE_ROTATION_Y_AXIS, OP_PHOTON_LOOP_CORRECTION];

const RECIPE_TAU: ParticleRecipe = [OP_3D_ROTATION_Z_AXIS];

const RECIPE_Z_BOSON: ParticleRecipe = [
  ...RECIPE_HIGGS, // Z-boson is building from Higgs boson
  OP_ELECTROWEAK_10D_COUPLING,
  OP_MUON_PHASE_TWIST_BINDING,
];

const RECIPE_W_BOSON: ParticleRecipe = [
  ...RECIPE_Z_BOSON, // W-boson - projection of Z-boson
  OP_WEINBERG_KOIDE_PROJECTION,
];

const RECIPE_NEUTRINO_E: ParticleRecipe = [OP_LAYER_3_GAUSSIAN_SHIFT];

const RECIPE_NEUTRINO_MU: ParticleRecipe = [OP_LAYER_3_GAUSSIAN_SHIFT, OP_KOIDE_MUON_SCALING];

const RECIPE_NEUTRINO_TAU: ParticleRecipe = [OP_LAYER_3_GAUSSIAN_SHIFT, OP_KOIDE_TAU_SCALING];

const RECIPE_DARK_MATTER: ParticleRecipe = [OP_LAYER_5_GAUSSIAN_SHIFT];

const RECIPE_GRAVITON: ParticleRecipe = [OP_LAYER_6_GAUSSIAN_SHIFT];

// ----------------------------------------------------------------------------
// 5. THE BUILDER ENGINE (VLT ASSEMBLER)
// ----------------------------------------------------------------------------

function formatMass(massMeV: number): string {
  if (massMeV === 0) return '0.000000 MeV';
  const absMass = Math.abs(massMeV);

  if (absMass >= 1e6) return (massMeV / 1e6).toFixed(4) + ' TeV';
  if (absMass >= 1000) return (massMeV / 1000).toFixed(6) + ' GeV';
  if (absMass >= 0.001) return massMeV.toFixed(6) + ' MeV';
  if (absMass >= 1e-9) return (massMeV * 1e6).toFixed(4) + ' eV';

  // Для Темной Материи и Гравитонов (Слои 5 и 6)
  return (massMeV * 1e6).toExponential(4) + ' eV';
}

let index = 1;
function buildParticle(
  name: string,
  recipe: ParticleRecipe,
  nistTarget: { mass: number; sigma: number },
) {
  console.log(`\n======================================================================`);
  console.log(` 🌀 ASSEMBLING PARTICLE #${index++}: ${name}`);
  console.log(`======================================================================`);

  let currentMass = 0;

  recipe.forEach((op, index) => {
    const previousMass = currentMass;
    currentMass = op.apply(currentMass, CONST.M_E);

    const delta = currentMass - previousMass;
    const sign = delta >= 0 ? '+' : '-';

    console.log(`[STEP ${index + 1}] ${op.code}`);
    console.log(`   INFO: ${op.description}`);

    if (
      op.code === 'UNPROJECT_3D_TO_10D' ||
      op.code.includes('MULTIPLY') ||
      op.code.includes('SCALING')
    ) {
      console.log(`   MATH: MULTIPLIED OR SCALED`);
    } else if (Math.abs(delta) > 0) {
      console.log(`   MATH: ${sign} ${formatMass(Math.abs(delta))}`);
    } else {
      console.log(`   MATH: No mass projection generated`);
    }
    console.log(`   CURRENT TOTAL: ${formatMass(currentMass)}\n`);
  });

  // --- VERIFICATION MODULE ---
  const diff = Math.abs(currentMass - nistTarget.mass);
  let sigmaOutput = '';

  // If there is no target (for predictions)
  if (nistTarget.sigma === 1 && nistTarget.mass === 0) {
    sigmaOutput = 'N/A (Theoretical Prediction)';
  } else {
    const sigma = diff / nistTarget.sigma;
    sigmaOutput = `${sigma.toFixed(3)} σ (Sigmas)`;
    if (sigma < 1.0) sigmaOutput += ' 🏆 PERFECT!';
  }

  console.log(`----------------------------------------------------------------------`);
  console.log(` ✅ FINAL VLT MASS:   ${formatMass(currentMass)}`);
  if (nistTarget.mass > 0) {
    console.log(` 🎯 NIST TARGET:      ${formatMass(nistTarget.mass)}`);
    console.log(` 📉 ABSOLUTE ERROR:   ${formatMass(diff)}`);
  } else {
    console.log(` 🎯 TARGET:           Cosmological Prediction / Upper Limit`);
  }
  console.log(` 🚨 DEVIATION:        ${sigmaOutput}`);
}

// ----------------------------------------------------------------------------
// 6. EXECUTE FRAMEWORK
// ----------------------------------------------------------------------------

console.log('INITIALIZING VORTEX LAYER THEORY (VLT) ENGINE v1.0...');
console.log(`Base Substrate: Electron (${CONST.M_E} MeV)`);

buildParticle('Proton (p+)', RECIPE_PROTON, NIST.PROTON);
buildParticle('Charged Pion (π±)', RECIPE_PION_CHARGED, NIST.PION_CH);
buildParticle('Neutron (n0)', RECIPE_NEUTRON, NIST.NEUTRON);
buildParticle('Higgs Boson (H0)', RECIPE_HIGGS, NIST.HIGGS);
buildParticle('Up Quark (Bare/Current)', RECIPE_UP_QUARK, NIST.UP_QUARK);
buildParticle('Down Quark (Bare/Current)', RECIPE_DOWN_QUARK, NIST.DOWN_QUARK);
buildParticle('Charm Quark (c)', RECIPE_CHARM_QUARK, NIST.CHARM_QUARK);
buildParticle('Strange Quark (s)', RECIPE_STRANGE_QUARK, NIST.STRANGE_QUARK);
buildParticle('Bottom Quark (b)', RECIPE_BOTTOM_QUARK, NIST.BOTTOM_QUARK);
buildParticle('Top Quark (t)', RECIPE_TOP_QUARK, NIST.TOP_QUARK);
buildParticle('Photon (γ)', RECIPE_PHOTON, NIST.PHOTON);
buildParticle('Gluon (g)', RECIPE_GLUON, NIST.GLUON);
buildParticle('Muon (μ)', RECIPE_MUON, NIST.MUON);
buildParticle('Tau (τ)', RECIPE_TAU, NIST.TAU);
buildParticle('Z Boson (Z0)', RECIPE_Z_BOSON, NIST.Z_BOSON);
buildParticle('W Boson (W±)', RECIPE_W_BOSON, NIST.W_BOSON);
buildParticle('Electron Neutrino (ν_e)', RECIPE_NEUTRINO_E, NIST.NEUTRINO_E);
buildParticle('Muon Neutrino (ν_μ)', RECIPE_NEUTRINO_MU, NIST.NEUTRINO_MU);
buildParticle('Tau Neutrino (ν_τ)', RECIPE_NEUTRINO_TAU, NIST.NEUTRINO_TAU);
buildParticle('Axion / Dark Matter (Layer 5)', RECIPE_DARK_MATTER, NIST.DARK_MATTER);
buildParticle('Graviton (Layer 6)', RECIPE_GRAVITON, NIST.GRAVITON);
