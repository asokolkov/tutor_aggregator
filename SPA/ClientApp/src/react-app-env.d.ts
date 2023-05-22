declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

/*
 * Namespace 'React' has no exported member 'StatelessComponent'
 * in formik, react-mapbox-gl
 * https://github.com/jaredpalmer/formik/issues/3546
 */
declare namespace React {
  type StatelessComponent<P> = React.FunctionComponent<P>;
}
