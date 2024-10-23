# H5P Library package
PACKAGE_FILES=  H5P.ConcoursVeto/umd/h5p-concoursveto.js \
                H5P.ConcoursVeto/umd/h5p-concoursveto.css \
                H5P.ConcoursVeto/umd/MaterialIcons* \
                H5P.ConcoursVeto/library.json \
                H5P.ConcoursVeto/semantics.json \
                H5P.ConcoursVeto/assets/* \
                H5P.ConcoursVeto/icon.svg
ZIP_COMMAND=zip
TEMP_DIR := $(shell mktemp -d)

all:
	cd ${TEMP_DIR} && h5p get h5p-editor-vertical-tabs font-awesome
	cd ${TEMP_DIR} && h5p pack h5p-editor-vertical-tabs font-awesome h5p-concoursveto-libs.h5p
	cd ../H5P.ConcoursVeto && npm run build
	rsync -avz ../H5P.ConcoursVeto ${TEMP_DIR} --exclude 'node_modules' --exclude 'src'
	cd ${TEMP_DIR} && $(ZIP_COMMAND) -urD h5p-concoursveto-libs.h5p $(PACKAGE_FILES)
	cp ${TEMP_DIR}/h5p-concoursveto-libs.h5p .

