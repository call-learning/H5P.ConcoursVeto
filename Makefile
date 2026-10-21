# Here is a simple makefile
# The h5p pack command was not working without a subfolder with a .git in it.
ZIP_COMMAND=zip
TEMP_DIR := $(shell mktemp -d)

.PHONY: concours-veto concours-veto-hemi-sud concours-veto-stav concours-veto-stl h5p-concoursveto-libs.h5p

all: concours-veto concours-veto-hemi-sud concours-veto-stav concours-veto-stl

concours-veto concours-veto-hemi-sud concours-veto-stav concours-veto-stl: %: H5P.ConcoursVeto h5p-concoursveto-libs.h5p
	# Now build the activities.
	mkdir ${TEMP_DIR}/h5p-$*
	cp -r $*/content ${TEMP_DIR}/h5p-$*
	cp $*/h5p.json  ${TEMP_DIR}/h5p-$*
	cp $*/icon.svg ${TEMP_DIR}/h5p-$*
	cp h5p-concoursveto-libs.h5p ${TEMP_DIR}/h5p-$*/h5p-concoursveto.h5p
	# Add the complete content directory. H5P hosts extract files below content/
	# when importing the package, so nested content assets must be part of the
	# archive as well as content.json.
	cd ${TEMP_DIR}/h5p-$* && $(ZIP_COMMAND) -urD h5p-concoursveto.h5p h5p.json icon.svg content
	cp ${TEMP_DIR}/h5p-$*/h5p-concoursveto.h5p h5p-$*.h5p

h5p-concoursveto-libs.h5p: H5P.ConcoursVeto/library.json H5P.ConcoursVeto/semantics.json
	cd ${TEMP_DIR} && h5p utils get h5p-editor-vertical-tabs font-awesome
	# First build the library.
	cd H5P.ConcoursVeto && npm run build
	# Build the lib
	mkdir -p "${TEMP_DIR}/h5p-concoursveto"
	rsync -avz H5P.ConcoursVeto/* "${TEMP_DIR}/h5p-concoursveto" --exclude 'node_modules' --exclude 'src'
	cd ${TEMP_DIR} && h5p utils pack h5p-editor-vertical-tabs font-awesome h5p-concoursveto h5p-concoursveto-libs.h5p
	cp ${TEMP_DIR}/h5p-concoursveto-libs.h5p .
